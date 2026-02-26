## Git Commands and What They Do

### Setup and Repo Creation
- `git init` — initialize a new local Git repository in the current folder.
- `git init <folder>` — initialize a new local Git repository in the specified folder.
- `git config --global user.name "Your Name"` — set your global Git username for commits.
- `git config --global user.email "you@email.com"` — set your global Git email for commits.
- `git config --list` — show your Git configuration values.

### Status and Info
- `git status` — show working tree changes and staging status.
- `git status -s` — show a short status summary.
- `git remote -v` — list remotes and their URLs.
- `git branch` — list local branches.
- `git branch -a` — list local and remote branches.
- `git log` — show commit history.
- `git log --oneline` — show a compact commit history.

### Staging and Committing
- `git add <file>` — stage a specific file.
- `git add .` — stage all changes in the current folder.
- `git commit -m "message"` — create a commit with a message.
- `git commit --amend -m "new message"` — replace the last commit message.

### Branching
- `git branch <name>` — create a new branch.
- `git branch -M <name>` — rename the current branch, forcing the name.
- `git checkout <branch>` — switch to another branch.
- `git checkout -b <branch>` — create and switch to a new branch.
- `git switch <branch>` — switch to another branch.
- `git switch -c <branch>` — create and switch to a new branch.

### Remotes and Push/Pull
- `git remote add origin <url>` — connect the repo to a remote named origin.
- `git remote remove origin` — remove the origin remote.
- `git fetch` — download remote updates without merging.
- `git pull` — fetch and merge from the remote into your current branch.
- `git push` — push your commits to the remote branch with the same name.
- `git push -u origin <branch>` — push and set upstream for the branch.

### Merge and Rebase
- `git merge <branch>` — merge another branch into the current branch.
- `git rebase <branch>` — reapply your commits on top of another branch.
- `git rebase --continue` — continue a rebase after resolving conflicts.
- `git rebase --abort` — cancel a rebase and return to the previous state.

### Undo and Fix
- `git restore <file>` — discard changes in a file to last committed version.
- `git restore --staged <file>` — unstage a file but keep changes.
- `git reset <file>` — unstage a file.
- `git reset --soft HEAD~1` — undo last commit, keep changes staged.
- `git reset --mixed HEAD~1` — undo last commit, keep changes unstaged.
- `git reset --hard HEAD~1` — undo last commit and discard changes.
- `git revert <commit>` — create a new commit that undoes a specific commit.

### Stash
- `git stash` — save uncommitted changes temporarily.
- `git stash list` — list stashed changes.
- `git stash pop` — apply and remove the latest stash.
- `git stash apply` — apply the latest stash without removing it.

### Tags
- `git tag` — list tags.
- `git tag <name>` — create a lightweight tag.
- `git tag -a <name> -m "message"` — create an annotated tag.
- `git push origin <tag>` — push a tag to the remote.
