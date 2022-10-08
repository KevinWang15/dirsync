package utils

import (
	"encoding/json"
	"github.com/KevinWang15/dirsync/pkg/consts"
	"os"
	"path"
)

func ReadDirMap(dir string) map[string]string {
	content, err := os.ReadFile(path.Join(dir, consts.DirMapFileName))
	if err != nil {
		panic(err)
	}

	result := map[string]string{}
	err = json.Unmarshal(content, &result)
	if err != nil {
		panic(err)
	}
	return result
}
