# Git Workflow Notes

---

# What is Git?

Git is a Version Control System (VCS).

It helps developers:

- Track project history
- Restore previous versions
- Collaborate with teams
- Manage changes safely

---

# Git Commands Used in MedRoute AI

---

## 1. Check Current Directory

```powershell
pwd
```

### Purpose

Displays the current working directory.

### Example

```
C:\Users\Archisha\Documents\medroute-ai
```

---

## 2. Create a Folder

```powershell
mkdir folder_name
```

### Purpose

Creates a new folder.

### Example

```powershell
mkdir client
mkdir server
mkdir docs
```

---

## 3. Move Into a Folder

```powershell
cd folder_name
```

### Purpose

Changes the current directory.

### Example

```powershell
cd medroute-ai
```

---

## 4. Open Current Folder in VS Code

```powershell
code .
```

### Purpose

Opens the current project in Visual Studio Code.

---

## 5. Initialize Git Repository

```bash
git init
```

### Purpose

Converts a normal folder into a Git repository.

Creates the hidden:

```
.git
```

folder.

---

## 6. Rename Current Branch

```bash
git branch -M main
```

### Purpose

Renames the default branch to **main**.

---

## 7. Check Git Status

```bash
git status
```

### Purpose

Displays:

- Current branch
- Modified files
- New files
- Deleted files
- Files ready to commit

This is the command you should run most often.

---

## 8. Add a Single File

```bash
git add filename
```

### Purpose

Stages one file for the next commit.

Example

```bash
git add .gitignore
```

---

## 9. Add an Entire Folder

```bash
git add docs
```

### Purpose

Stages all changes inside a folder.

---

## 10. Add Everything

```bash
git add .
```

### Purpose

Stages every modified and newly created file in the project.

---

## 11. Create a Commit

```bash
git commit -m "message"
```

### Purpose

Creates a permanent snapshot of the staged changes.

Example

```bash
git commit -m "docs: add web application fundamentals"
```

---

## 12. View Commit History

```bash
git log --oneline
```

### Purpose

Shows all commits in a compact format.

Example

```
743efcc docs: add project journal
4313f63 chore: add initial project structure
```

---

## 13. Connect Local Repository to GitHub

```bash
git remote add origin REPOSITORY_URL
```

### Purpose

Links the local Git repository to a GitHub repository.

Example

```bash
git remote add origin https://github.com/username/medroute-ai.git
```

⚠ This command is executed **only once**.

---

## 14. View Connected Remote Repository

```bash
git remote -v
```

### Purpose

Displays the configured remote repositories.

Example

```
origin https://github.com/username/medroute-ai.git (fetch)

origin https://github.com/username/medroute-ai.git (push)
```

---

## 15. Push for the First Time

```bash
git push -u origin main
```

### Purpose

Uploads the local repository to GitHub and sets the upstream branch.

This command is normally required only the first time.

---

## 16. Push Future Commits

```bash
git push
```

### Purpose

Uploads new commits to GitHub.

---

## 17. Show Files Included in the Latest Commit

```bash
git show --name-only --stat HEAD
```

### Purpose

Displays:

- Latest commit
- Files included
- Number of changes

Useful for checking what was actually committed.

---

## 18. Amend the Last Commit Message

```bash
git commit --amend -m "new message"
```

### Purpose

Changes the latest commit message.

Example

```bash
git commit --amend -m "docs: add project journal"
```

---

## 19. Push an Amended Commit

```bash
git push --force-with-lease
```

### Purpose

Updates GitHub after changing an already-pushed commit.

Safer than using:

```bash
git push --force
```

---

# Typical Git Workflow

```
Modify files
      │
      ▼
git status
      │
      ▼
git add .
      │
      ▼
git commit -m "meaningful message"
      │
      ▼
git push
```

---

# Professional Commit Prefixes

## feat

New feature

Example

```
feat: add login page
```

---

## fix

Bug fix

Example

```
fix: correct hospital sorting logic
```

---

## docs

Documentation updates

Example

```
docs: add REST API notes
```

---

## style

Formatting changes

Example

```
style: improve code formatting
```

---

## refactor

Improving code without changing behaviour

Example

```
refactor: simplify authentication middleware
```

---

## test

Adding or updating tests

Example

```
test: add login API tests
```

---

## chore

Project maintenance

Example

```
chore: initialize repository
```

---

# Git Best Practices

✔ Commit frequently.

✔ Write meaningful commit messages.

✔ Run `git status` before committing.

✔ Push changes regularly.

✔ Never upload `.env`.

✔ Never upload `node_modules`.

✔ Keep commit messages short and descriptive.

---

# Common Mistakes

❌ Writing commit messages like:

```
final

update

new

commit message
```

Instead write:

```
feat: add hospital search page

docs: update project journal

fix: resolve login validation bug
```

---

# Commands We Will Learn Later

These commands will be introduced when needed:

```bash
git clone
git pull
git fetch
git checkout
git switch
git branch
git merge
git rebase
git stash
git tag
git reset
git revert
```

---

# Summary

Git allows developers to track every version of a project.

The basic workflow is:

```
git status

↓

git add

↓

git commit

↓

git push
```

These four commands are used throughout almost every professional software project.