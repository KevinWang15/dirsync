package types

type Operation string

const (
	OperationCopy      Operation = "copy"
	OperationOverwrite Operation = "overwrite"
	OperationDelete    Operation = "delete"
)

type Task struct {
	Operation    Operation
	RelativePath string
}
