# Week 1

1. Listened to lectures

## Setup ssh-key to gitlab

Commands

´´´
ssh-keygen -t rsa -C "jonimatiasrajala@gmail.com" -b 4096
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/jonirajala/.ssh/id_rsa): gitlab
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in gitlab
Your public key has been saved in gitlab.pub
´´´

Moved generated key to .shh folder

Setup the key to ./ssh/config folder

´´´
Host gitlab.fabcloud.org
  AddKeysToAgent yes
  IdentityFile ~/.ssh/gitlab
´´´

## Edit the repository

Create gitignore file with content to remove additional MacOS files

´´´
.DS_Store
public/.DS_Store
´´´


run commands to push the .gitignore (and other changes)

´´´
git add *
git add .gitignore
git commit -a -m "I don't remember what I wrote here"
git pull
git push
´´´



## Setup the website with markdown

Download markdown template from https://gitlab.com/fabacademy_oulu/students_template_site

Somewhere here, I created a file called simple_document.md and put it in the root of the repository.

Open the zip to the Folder next to the local git working copy.

Delete readme file from the template. I already have that.

Copy files
```
for $file in *; do mv $file ../joni-rajala/$file; done
```

Copy dot files. No .gitignore, I already have that.
```
mv .gitlab-ci.yml ../joni-rajala/.gitlab-ci.yml

```

Remove the public folder from the repository. Add all, commit, pull push. 
```
cd ../joni-rajala
git rm -r public
git add *
git commit -a -m "Installed template for mkdir websites. Removed public folder."
git 
```

## Setup development environment

Open Visual Studio Code.

Open the folder with the working copy of the repository.

Add .vscode folder to .gitignore
```
.vscode
```



