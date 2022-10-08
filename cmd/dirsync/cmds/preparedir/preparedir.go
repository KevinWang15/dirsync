package preparedir

import (
	"crypto/sha1"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"path"
	"path/filepath"
	"regexp"
	"sync"
	"sync/atomic"
	"time"

	"github.com/KevinWang15/dirsync/pkg/consts"
	"github.com/KevinWang15/dirsync/pkg/flags"
	"github.com/MichaelTJones/walk"
	"github.com/gammazero/workerpool"
	"github.com/spf13/cobra"
)

var Cmd = &cobra.Command{
	Use: "prepare-dir",
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			log.Fatalf("dirsync preparedir <dir>")
		}
		dirMap := genDirMap(args[0])
		bytes, err := json.Marshal(dirMap)
		if err != nil {
			panic(err)
		}
		err = os.WriteFile(path.Join(args[0], consts.DirMapFileName), bytes, 0644)
		if err != nil {
			panic(err)
		}
	},
}

func genDirMap(root string) map[string]string {
	wp := workerpool.New(20)
	var excludeRegexp *regexp.Regexp = nil
	if excludeRegexpStr != "" {
		excludeRegexp = regexp.MustCompile(excludeRegexpStr)
	}

	totalTasks := atomic.Int32{}
	completedTasks := atomic.Int32{}
	var dirMap = sync.Map{}

	var reportProgress func()

	reportProgress = func() {
		total := totalTasks.Load()
		completed := completedTasks.Load()

		if total != 0 {
			fmt.Fprintf(os.Stderr, "%d/%d\n", completed, total)
		}
		time.Sleep(5 * time.Second)
		if total == 0 || completed != total {
			reportProgress()
		}
	}

	go reportProgress()

	err := walk.Walk(root, func(file string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if info.IsDir() {
			return nil
		}

		if info.Name() == consts.DirMapFileName {
			return nil
		}

		if excludeRegexp != nil {
			if excludeRegexp.MatchString(file) {
				return nil
			}
		}

		totalTasks.Add(1)
		wp.Submit(func() {
			f, err := os.Open(file)
			if err != nil {
				panic(err)
			}
			defer f.Close()

			var hasher = sha1.New()

			if _, err := io.Copy(hasher, f); err != nil {
				log.Fatal(err)
			}

			rel, err := filepath.Rel(root, file)
			if err != nil {
				log.Fatal(err)
			}
			dirMap.Store(rel, fmt.Sprintf("%x", hasher.Sum(nil)))
			completedTasks.Add(1)
		})
		return nil
	})
	if err != nil {
		panic(err)
	}

	wp.StopWait()

	dirMapAsMap := map[string]string{}
	dirMap.Range(func(key interface{}, value interface{}) bool {
		dirMapAsMap[key.(string)] = value.(string)
		return true
	})
	return dirMapAsMap
}

var excludeRegexpStr string

func init() {
	flags.AddExcludeFlag(Cmd, &excludeRegexpStr)
}
