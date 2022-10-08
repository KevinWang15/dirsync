package flags

import "github.com/spf13/cobra"

func AddSourceFlag(cmd *cobra.Command, p *string) {
	cmd.PersistentFlags().StringVar(p, "source", "", "")
}

func AddTargetFlag(cmd *cobra.Command, p *string) {
	cmd.PersistentFlags().StringVar(p, "target", "", "")
}

func AddDryRunFlag(cmd *cobra.Command, p *bool) {
	cmd.PersistentFlags().BoolVar(p, "dry-run", false, "")
}

func AddDeleteFlag(cmd *cobra.Command, p *bool) {
	cmd.PersistentFlags().BoolVar(p, "delete", false, "delete extraneous files in target")
}

func AddExcludeFlag(cmd *cobra.Command, p *string) {
	cmd.PersistentFlags().StringVar(p, "exclude", "", "Regexp - patterns to exclude")
}
