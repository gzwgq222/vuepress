# Git
## 常用命令
###  初始化
> 集中式 vs 分布式

  | 集中式（SVN）|分布式（git）
--|:--:|--:
是否有中央服务器 | 有。开发人员需要从中央服务器获得最新版本的项目然后在本地开发，开发完推送给中央服务器。因此脱离服务器开发者是几乎无法工作的 | 没有中央服务器，开发人员本地都有 Local Repository
网络依赖|必须要联网才能工作，而且对网络的依赖性较强，如果推送的文件比较大而且网络状况欠佳，则提交文件的速度会受到很大的限制 | 分布式在没有网络的情况下也可以执行commit、查看版本提交记录、以及分支操作，在有网络的情况下执行 push 到 Remote Repository
文件存储格式 | 按照原始文件存储，体积较大 | 按照元数据方式存储，体积很小
是否有版本号 | 有 | 没有
分支操作的影响 | 创建新的分支则所有的人都会拥有和你一样的分支 | 分支操作不会影响其他开发人员
提交 |  提交的文件会直接记录到中央版本库 | 提交是本地操作，需要执行push操作才会到主要版本库

<!-- **集中式**

![集中式](http://www.nowamagic.net/librarys/images/201401/2014_01_03_06.jpg)

**分布式**

![分布式](https://images2017.cnblogs.com/blog/781464/201710/781464-20171017113825209-95721098.jpg) -->

* 初始化 Git 仓库
    ```
    git init
    ```
* clone 
    ```
    git clone https://github.com/gzwgq222/blog-server.git
    ```
* 设置用户信息
    ``` 
    git config --global user.name 'gzwgq222'
    git config --global user.email '445722156@qq.com'
    ```
    如果使用了 `--global` 选项，那么该命令只运行一次，设置的是全局的用户信息。当你想针对特定的项目设置不用的用户名称和邮箱地址，可以在项目目录下运行没有 --global 的选项命令来配置
    ```
    git config user.name 'gzwgq222'
    git config user.email '445722156@qq.com'
    ```
* 查看配置信息
    ```
    git config --list
    ```
### 暂存
* 暂存所有，不包含删除
    ```
    git add .
    ```
* 检查当前文件状态
    ```
    git status
    ```
    `git status -s` -s 选项查看简洁信息
* 查看未暂存的文件更改了那些部分
    ```
    git diff
    ```
* 提交至本地仓库
    ```
    git commit -m 'commit message'
    ```
* 取消暂存
    ```
    git reset HEAD <file>
    ```
* 撤销对文件的修改
    ```
    git checkout -- <file>
    ```
* 查看提交历史
    ```
    git log
    ```
    `git log -p -2`  -p 选项查看每次提交的内容差异， -2 查看最近两次提交
    ```
    git log --oneline --decorate --graph --all
    ```
    输出你的提交历史、各个分支的指向以及项目的分支分叉情况
### 远程仓库
* 查看远程仓库
    ```
    git remote
    ```
    可以添加 -v 选项，会显示远程仓库 Git 保存的简写与队友的 URL
* 添加远程仓库
    ```
    git remote add <shortname> <url>
    ```
* 从远程仓库拉取信息
    ```
    git fetch [remote-name]
    ```
* 推送至远程仓库
    ```
    git push [remote-name] [branch-name]
    ```
### tag
* 列出标签
    ```
    git tag
    ```
* 附注标签
    ```
    git tag -a v1.0 -m 'my version v1.0'
    ```
* 查看标签信息
    ```
    git show v1.0
    ```
### 分支
* 查看分支
    ```
    git branch
    ```
    -a 选项查看所有， -v 选项查看本地
* 创建分支
    ```
    git branch <branch-name>
    ```
* 切换分支
    ```
    git checkout <branch-name>
    ```
    创建 iss001 分支并切换
    ```
    git checkout -b iss001
    ```
* 删除本地分支
    ```
    git branch -d iss001
    ```
* 删除远程分支
    ```
    git push origin --delete <branch-name>
    ```
* 拉取
    ```
    git fetch
    ```
    ```
    git pull
    ```
    `git fetch` 只是把远程仓库的数据拉取下来，并不会进行合并，`get pull`，相当于先 `git fetch` 然后 `git merge`
    为了确保 git 提交记录干净，拉取的时候最好使用 `git pull --rebase` 或者 `git pull` 完成后再 `git --rebase`
### 变基
* 变基
    ```
    git pull --rebase
    git --rebase
    ```
