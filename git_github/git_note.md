# git 

## How to git commit date 
```sh
git commit --amend --no-edit --date="Thu, 05 Oct 2023 12:05:13 +0100"
``` 


## Update remote origin
```sh
git remote set-url origin https://<GIT_TOKEN>@github.com/kore4lyf/Project-FundME.git
```


## How to Clean Up Your Local Repository with Git Commands 

### How to remove untracked files? 
To remove untracked files, you can use the git clean command. This command will delete any untracked files and directories in your working directory. You can use the -n option to perform a dry run and see what files will be deleted without actually deleting them. You can use the -f option to force the deletion of the files. You can use the -d option to also delete untracked directories. You can use the -x option to also delete ignored files (files that match the patterns in your .gitignore file).

For example, to delete all untracked files and directories, including ignored ones, you can run:
```sh
git clean -d -x Project-FundME
```

### How to undo local changes?
You can use the -- option to specify a file or a directory that you want to restore.

For example, to undo all local changes and reset your working directory to the state of the master branch, you can run:
```sh 
git checkout -- .
``` 

To undo local changes only for a specific file, you can run:
```sh
git checkout -- <file> 
```

### How to delete local branches? 
To delete local branches, you can use the git branch command with the -d or -D option. The -d option will delete a branch only if it is already merged with its upstream branch (the branch that it is tracking on the remote repository). The -D option will force delete a branch regardless of its merge status.

For example, to delete a branch named feature1 that is already merged with the master branch, you can run:
```sh 
git branch -d feature1
``` 

To force delete a branch named bugfix2 that is not merged yet, you can run:
```sh
git branch -D bugfix2
```

### How to prune remote-tracking branches?
Remote-tracking branches are branches that track the state of branches on the remote repository (the repository that you have cloned from or pushed to). They have names like origin/master or origin/feature1. Remote-tracking branches can help you keep track of what is happening on the remote repository and synchronize your local branches with it.

However, sometimes remote-tracking branches may become stale or obsolete. This may happen when a branch on the remote repository is deleted or renamed, but your local repository still has a reference to it. Stale or obsolete remote-tracking branches can cause confusion and errors when you try to fetch, pull, or push from or to the remote repository.

To prune remote-tracking branches, you can use the git fetch command with the --prune option. This command will fetch the latest updates from the remote repository and delete any remote-tracking branches that no longer exist on the remote repository.

For example, to prune remote-tracking branches for the origin remote (the default remote), you can run:
```sh
git fetch --prune origin
``` 

