package sync

import (
	"encoding/json"
	"fmt"
	"github.com/KevinWang15/dirsync/pkg/flags"
	"github.com/KevinWang15/dirsync/pkg/types"
	"github.com/KevinWang15/dirsync/pkg/utils"
	"github.com/gammazero/workerpool"
	"github.com/spf13/cobra"
	"io"
	"os"
	"path"
	"regexp"
	"sort"
	"sync/atomic"
	"time"
)

var Cmd = &cobra.Command{
	Use: "sync",
	Run: func(cmd *cobra.Command, args []string) {
		sync(source, target, enableDryrun)
	},
}

func sync(source string, target string, dryrun bool) {
	toCopy := []string{}
	toOverwrite := []string{}
	toDelete := []string{}

	var excludeRegexp *regexp.Regexp = nil
	if excludeRegexpStr != "" {
		excludeRegexp = regexp.MustCompile(excludeRegexpStr)
	}

	sourceDirMap := utils.ReadDirMap(source)
	targetDirMap := utils.ReadDirMap(target)

	for k, v := range sourceDirMap {
		if excludeRegexp != nil {
			if excludeRegexp.MatchString(k) {
				continue
			}
		}
		if targetDirMap[k] == "" {
			toCopy = append(toCopy, k)
		} else if targetDirMap[k] != v {
			toOverwrite = append(toOverwrite, k)
		}
	}

	if enableDelete {
		for k := range targetDirMap {
			if sourceDirMap[k] == "" {
				if excludeRegexp != nil {
					if excludeRegexp.MatchString(k) {
						continue
					}
				}
				toDelete = append(toDelete, k)
			}
		}
	}

	sort.Strings(toCopy)
	sort.Strings(toOverwrite)
	sort.Strings(toDelete)

	if dryrun {
		bytes, err := json.MarshalIndent(map[string]interface{}{"copy": toCopy, "overwrite": toOverwrite, "delete": toDelete}, "", "  ")
		if err != nil {
			panic(err)
		}
		fmt.Print(string(bytes))
	} else {
		tasks := []types.Task{}
		for _, e := range toCopy {
			tasks = append(tasks, types.Task{
				Operation:    types.OperationCopy,
				RelativePath: e,
			})
		}
		for _, e := range toOverwrite {
			tasks = append(tasks, types.Task{
				Operation:    types.OperationOverwrite,
				RelativePath: e,
			})
		}
		for _, e := range toDelete {
			tasks = append(tasks, types.Task{
				Operation:    types.OperationDelete,
				RelativePath: e,
			})
		}

		executeTasks(tasks)
	}
}

func executeTasks(tasks []types.Task) {
	wp := workerpool.New(50)
	totalTasks := int32(len(tasks))
	completedTasks := atomic.Int32{}

	var reportProgress func()

	reportProgress = func() {
		total := totalTasks
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

	for i := range tasks {
		task := tasks[i]
		wp.Submit(func() {
			executeTask(task)
			completedTasks.Add(1)
		})
	}

	wp.StopWait()
}

func executeTask(task types.Task) {
	sourcePath := path.Join(source, task.RelativePath)
	targetPath := path.Join(target, task.RelativePath)
	switch task.Operation {
	case types.OperationDelete:
		err := os.Remove(targetPath)
		if err != nil {
			panic(err)
		}
	case types.OperationOverwrite:
		fallthrough
	case types.OperationCopy:
		err := os.MkdirAll(path.Dir(targetPath), 0755)
		if err != nil {
			panic(err)
		}
		copyFile(sourcePath, targetPath)
	}
}

func copyFile(source, target string) {
	sourceFile, err := os.Open(source)
	if err != nil {
		panic(err)
	}
	defer func() {
		err := sourceFile.Close()
		if err != nil {
			panic(err)
		}
	}()

	targetFile, err := os.Create(target)
	if err != nil {
		panic(err)
	}
	defer func() {
		err := targetFile.Close()
		if err != nil {
			panic(err)
		}
	}()

	if _, err := io.Copy(targetFile, sourceFile); err != nil {
		panic(err)
	}

	if err := targetFile.Sync(); err != nil {
		panic(err)
	}
}

var source string
var target string
var enableDryrun bool
var enableDelete bool
var excludeRegexpStr string

func init() {
	flags.AddSourceFlag(Cmd, &source)
	flags.AddTargetFlag(Cmd, &target)
	flags.AddDryRunFlag(Cmd, &enableDryrun)
	flags.AddDeleteFlag(Cmd, &enableDelete)
	flags.AddExcludeFlag(Cmd, &excludeRegexpStr)
}
