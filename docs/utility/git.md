---
sidebarDepth: 0
---

## git命令使用记录

#### 一、从[git官网](https://git-scm.com/downloads)下载安装



#### 二、创建版本库
`cd <fileName> "执行" git init`



#### 三、删除版本库
 `rm -rf .git`



#### 四、文件提交
* 1、使用 `git status` 查看状态
* 2、使用命令 `git add <file> ` 提交单个文件，`git add all` 提交所有文件(包括新增和删除)。注：执行 `git add`是把要提交的文件从工作区添加到暂存区
* 3、使用命令 `git commit -m <message>`，`-m`后面输入的是本次提交说明。注：执行 `git commit -m <messag>` 则把暂存区的文件提交到分支
* 4、指定忽略某个文件或文件夹不提交(配置语法)
    * 首先在根目录新建.gitignore文件
    * `#`表示注释
    * 以 `/` 开头表示目录
    * 以 `*` 开头表示匹配多个字符
    * 以 `?` 开头表示匹配单个字符
    * 以 `[]` 开头表示包含单个字符的匹配列表
    * 以 `!` 开头表示不忽略
    
    

#### 五、版本回退
* 1、执行 `git log` 查看最近到最远的提交日志
* 2、执行 `git reset --hard HEAD^` 其中 `HEAD` 表示当前版本，`HEAD^` 表示上个版本，`HEAD^^`表示上上个版本，往上一百个版本写成 `HEAD~100`
* 3、指定回到某个版本 `git reset --hard commitId` 其中 `commitId` 执行 `git log` 可以查看



#### 六、撤销修改和删除文件
* 撤销修改：
    * 如果没从工作区添加到暂存区执行： `git checkout -- <file>`。执行 `git checkout -- <file>` 其实是用版本库的版本替换工作区的版本(无论工作区是修改还是删除都可以一键还原)
    * 如果添加到暂存区执行： `git reset HEAD <file>` 可以把暂存区的修改撤销掉，重新放回工作区
* 删除文件：
    * 执行 `git rm <file>`，在执行 `git commit -m <message>`彻底从版本库删除



#### 七、远程仓库
* 把本地仓库的代码同步到远程仓库(用github举例)
    * 1、执行 `git remote add origin <github仓库地址>`，`origin`表示远程仓库名
    * 2、执行 `git push -u origin master`，`master`表示当前分支，默认没新建分支的情况下，git所有提交都在这分支上
    * 3、从现在起，只要本地作了提交，就可以通过命令： `git push origin master` 推送到远程仓库
* 从远程仓库克隆到本地
    * 执行 `git clone <github仓库地址>`
    
    

#### 八、分支
* 命令：
    * 查看分支: `git branch`
    * 创建分支: `git branch <name>`
    * 切换分支: `git checkout <name>`
    * 创建+切换分支: `git checkout -b <name>`
    * 合并某分支到当前分支: `git merge <name>`，如果需要保存合并分支记录，请使用：`git merge --no-ff -m "<message>" <name>` git默认Fast forward模式，删除分支后会丢失分支信息 `--no-ff`表示禁用Fast forward模式
    * 删除分支: `git branch -d <name>` ,如果需要删除一个未合并的分支使用大写的`-D`
    * 储藏当前工作区: `git stash`
    * 查看储藏记录: `git stash list`
    * 恢复并删除储藏记录: `git stash pop`
    
