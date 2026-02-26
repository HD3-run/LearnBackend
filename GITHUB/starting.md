PS C:\Users\USER\Desktop\backnd learn> git init
Initialized empty Git repository in C:/Users/USER/Desktop/backnd learn/.git/
PS C:\Users\USER\Desktop\backnd learn> git branch
PS C:\Users\USER\Desktop\backnd learn> git branch -M BackendMain
PS C:\Users\USER\Desktop\backnd learn> git branch
PS C:\Users\USER\Desktop\backnd learn> git remote add origin https://github.com/HD3-run/LearnBackend.git
PS C:\Users\USER\Desktop\backnd learn> git init -v
error: unknown switch `v'
usage: git init [-q | --quiet] [--bare] [--template=<template-directory>]
                [--separate-git-dir <git-dir>] [--object-format=<format>]
                [--ref-format=<format>]
                [-b <branch-name> | --initial-branch=<branch-name>]
                [--shared[=<permissions>]] [<directory>]

    --[no-]template <template-directory>
                          directory from which templates will be used
    --[no-]bare           create a bare repository
    --shared[=<permissions>]
                          specify that the git repository is to be shared amongst several users
    -q, --[no-]quiet      be quiet
    --[no-]separate-git-dir <gitdir>
                          separate git dir from working tree
    -b, --[no-]initial-branch <name>
                          override the name of the initial branch
    --[no-]object-format <hash>
                          specify the hash algorithm to use
    --[no-]ref-format <format>
                          specify the reference format to use

PS C:\Users\USER\Desktop\backnd learn> git status
On branch BackendMain

No commits yet

nothing to commit (create/copy files and use "git add" to track)
PS C:\Users\USER\Desktop\backnd learn> mkdir GITHUB


    Directory: C:\Users\USER\Desktop\backnd learn


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        26/02/2026     19:52                GITHUB


PS C:\Users\USER\Desktop\backnd learn> git status
On branch BackendMain

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        GITHUB/

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\USER\Desktop\backnd learn> git remote -v
origin  https://github.com/HD3-run/LearnBackend.git (fetch)
origin  https://github.com/HD3-run/LearnBackend.git (push)
PS C:\Users\USER\Desktop\backnd learn> git add . 
PS C:\Users\USER\Desktop\backnd learn> git commit -m "init git repo"
[BackendMain (root-commit) a90f3e8] init git repo
 1 file changed, 66 insertions(+)
 create mode 100644 GITHUB/cmds.md
PS C:\Users\USER\Desktop\backnd learn> git push -u origin LearnBackend
error: src refspec LearnBackend does not match any
error: failed to push some refs to 'https://github.com/HD3-run/LearnBackend.git'
PS C:\Users\USER\Desktop\backnd learn> git push
fatal: The current branch BackendMain has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin BackendMain

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\USER\Desktop\backnd learn> git branch
* BackendMain
PS C:\Users\USER\Desktop\backnd learn> git branch -a
* BackendMain
PS C:\Users\USER\Desktop\backnd learn> git push -u origin BackendMain
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 1.29 KiB | 1.29 MiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/HD3-run/LearnBackend.git
 * [new branch]      BackendMain -> BackendMain
branch 'BackendMain' set up to track 'origin/BackendMain'.
PS C:\Users\USER\Desktop\backnd learn> git status
On branch BackendMain
Your branch is up to date with 'origin/BackendMain'.

nothing to commit, working tree clean
PS C:\Users\USER\Desktop\backnd learn> git status -s
PS C:\Users\USER\Desktop\backnd learn> git log
commit a90f3e81efbdad72bab4d51a53fbbfa060775122 (HEAD -> BackendMain, origin/BackendMain)
Author: HD3-run <hunkeyzombie2003@gmail.com>
Date:   Thu Feb 26 20:00:14 2026 +0530

    init git repo
PS C:\Users\USER\Desktop\backnd learn> git branch LearnBackend
PS C:\Users\USER\Desktop\backnd learn> git branch
* BackendMain
  LearnBackend
PS C:\Users\USER\Desktop\backnd learn> git switch LearnBackend
Switched to branch 'LearnBackend'
PS C:\Users\USER\Desktop\backnd learn> git branch
  BackendMain
* LearnBackend
PS C:\Users\USER\Desktop\backnd learn> git merge BackendMain
Already up to date.
PS C:\Users\USER\Desktop\backnd learn> git add .
PS C:\Users\USER\Desktop\backnd learn> git commit -m "faa"
On branch LearnBackend
nothing to commit, working tree clean
PS C:\Users\USER\Desktop\backnd learn> git push -u origin LearnBackend
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'LearnBackend' on GitHub by visiting:
remote:      https://github.com/HD3-run/LearnBackend/pull/new/LearnBackend
remote:
To https://github.com/HD3-run/LearnBackend.git
 * [new branch]      LearnBackend -> LearnBackend
branch 'LearnBackend' set up to track 'origin/LearnBackend'.
PS C:\Users\USER\Desktop\backnd learn> git switch BackendMain 
Switched to branch 'BackendMain'
Your branch is up to date with 'origin/BackendMain'.
PS C:\Users\USER\Desktop\backnd learn> rm -rf GITHUB
Remove-Item : A parameter cannot be found that matches parameter name 'rf'.
At line:1 char:4
+ rm -rf GITHUB
+    ~~~
    + CategoryInfo          : InvalidArgument: (:) [Remove-Item], ParameterBindingExce  
   ption
    + FullyQualifiedErrorId : NamedParameterNotFound,Microsoft.PowerShell.Commands.Rem  
   oveItemCommand

PS C:\Users\USER\Desktop\backnd learn> Remove-Item GITHUB

Confirm
The item at C:\Users\USER\Desktop\backnd learn\GITHUB has children and the Recurse      
parameter was not specified. If you continue, all children will be removed with the     
item. Are you sure you want to continue?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help
(default is "Y"):y
PS C:\Users\USER\Desktop\backnd learn> git push origin BackendMain
Everything up-to-date
PS C:\Users\USER\Desktop\backnd learn> git add .
PS C:\Users\USER\Desktop\backnd learn> git commit -m "reverted changes in Main branch"
[BackendMain 702a7df] reverted changes in Main branch
 1 file changed, 66 deletions(-)
 delete mode 100644 GITHUB/cmds.md
PS C:\Users\USER\Desktop\backnd learn> git push origin BackendMain
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (2/2), 217 bytes | 217.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/HD3-run/LearnBackend.git
   a90f3e8..702a7df  BackendMain -> BackendMain
PS C:\Users\USER\Desktop\backnd learn> git switch LearnBackend
Switched to branch 'LearnBackend'
Your branch is up to date with 'origin/LearnBackend'.
PS C:\Users\USER\Desktop\backnd learn> 