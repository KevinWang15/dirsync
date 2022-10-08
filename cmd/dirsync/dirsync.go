package main

import (
	"github.com/KevinWang15/dirsync/cmd/dirsync/cmds/preparedir"
	"github.com/KevinWang15/dirsync/cmd/dirsync/cmds/sync"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use: "dirsync",
}

func init() {
	rootCmd.AddCommand(preparedir.Cmd)
	rootCmd.AddCommand(sync.Cmd)
}

func main() {
	if err := rootCmd.Execute(); err != nil {
		panic(err)
	}
}
