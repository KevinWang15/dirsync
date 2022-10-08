# dirsync

An off-site data backup solution that is efficient, incremental and can prevent data degradation.

# How it works

1. Gen `.dirmap` on both sides
   
   (`.dirmap` is a JSON object with keys being paths of files and values being sha1sums, every file in the directory will be included in the `.dirmap` (unless specified in `--exclude`). Its generation uses github.com/MichaelTJones/walk, it is parallelized so it's quite performant)
2. Compare `.dirmap` in dry-run mode to know how to sync (which files to copy / overwrite / delete) (dry-run mode)
3. Execute the sync (when you remove the `--dry-run` flag).

# Examples

```
/root/dirsync prepare-dir /a
/root/dirsync prepare-dir /b
/root/dirsync sync --source=/a --target=/b --dry-run
/root/dirsync sync --source=/a --target=/b --delete --dry-run
/root/dirsync sync --source=/a --target=/b --delete --dry-run
/root/dirsync sync --source=/a --target=/b
/root/dirsync sync --source=/a --target=/b --delete

/root/dirsync prepare-dir --exclude="(\.DS_Store|@eaDir|@SynoResource|@tmp|\.duplicacy|\.dropbox)" /a
/root/dirsync prepare-dir --exclude="(\.DS_Store|@eaDir|@SynoResource|@tmp|\.duplicacy|\.dropbox)" /b
/root/dirsync sync --exclude="(\.DS_Store|@eaDir|@SynoResource|@tmp|\.duplicacy|\.dropbox)" --delete --source /a --target /b
```

# Diff visualization

Pipe the output of `sync --dry-run` to `./visualize-diff/visualize.js` to show the diffs in an interactive UI.

For example:

```
/root/dirsync sync --exclude="(\.DS_Store|@eaDir|@SynoResource|@tmp|\.duplicacy|\.dropbox)" --delete --source /a --target /b --dry-run | ./visualize-diff/visualize.js
```