# 持续化集成
## Jenkins

### 场景及原理
- 场景  
    在快速迭代的时候，每次构建项目后手动推送到服务器就显得有点繁琐了，会花很多的时间在更新文件上。如果每次把代码 push 到仓库的时候都能自动构建项目并推送到服务器上就完美了。

    查下下资料主流的方案如下：
    1. 代码仓库在 github，可以使用 github 支持的 CI 方式，如：Travis-ci
    2. 代码仓库在 gitlab，可以使用 gitlab 自带的 gitlab-ci
    3. 可以使用 jenkins 持续化集成平台

    因为个人项目托管在 github 上，有台乞丐版的服务器，为了适用性，选择了 jenkins 做持续化集成。

- 原理
    ![](../.vuepress/public/jenkins/jks.jpg)
    如图所示，原理很简单明了，在 git/svn 项目仓库配置 hook，当我们本地 push 的时候就会触发 hook 向 jenkins 发送消息，jenkins 接收到消息后就会从仓库 pull 代码，接着执行我们在 jenkins 上配置的 shell 脚本，shell 脚本上配置在打包完成后把打包后的文件推送至服务器对应的目录上。

### 前期准备
1. github 账号
2. 测试用的 vue 项目
3. 一台服务器（个人用的阿里云的 centos7）

### 安装
因为 jenkins 是用 java 编写的，所以得先在服务器上安装 java。jenkins 只是一个平台，真正运作的都是插件。
- 安装 java
    ```
    yum install java
    ```
- 安装 jenkins 
    ```
    // 下载 jenkins
    wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo

    // 导入 jenkins 的 key
    rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
    
    // 安装 Jenkins
    yum install jenkins
    
    // 启动 jenkins
    service jenkins restart
    ```
    `service jenkins start | stop | restart`    
    jenkins 关闭 | 开启 | 重启
    
    安装完成对应的目录：    
    /usr/lib/jenkins/jenkins.war    WAR包   
    /etc/sysconfig/jenkins          配置文件   
    /var/lib/jenkins/               默认的JENKINS_HOME目录  
    /var/log/jenkins/jenkins.log    Jenkins日志文件

### 初始化
- 解锁  
    jenkins 默认端口是 8080，可以在配置文件中进行更改。如果你的服务器有开放 8080 端口，那么在浏览器输入 ip:8080 应该就可以访问了。   
    如果没有开放 8080 端口，则需设置 8080 安全组才可以访问。    
    服务器上输入 cat /var/lib/jenkins/secrets/initialAdminPassword 查看初始密码     
    输入密码点击继续
    ![](../.vuepress/public/jenkins/home.png)

- 初始化安装插件    
    这里我们选择推荐通用插件安装即可，选择后等待完成插件安装以及初始化账户
    ![](../.vuepress/public/jenkins/plugin.png)

    等待安装
    ![](../.vuepress/public/jenkins/install.png)

- 创建用户
    ![](../.vuepress/public/jenkins/user.png)
- 安装插件      
    因为我们用来测试的项目是 vue，打包的时候要用到 node，所以得安装 nodeJs 插件。
    ![](../.vuepress/public/jenkins/node.png)

    步骤2的时候输入 nodeJs 选择后再进行步骤3

    ![](../.vuepress/public/jenkins/step1.png)

    安装完成后进行配置

    ![](../.vuepress/public/jenkins/step2.png)
    ![](../.vuepress/public/jenkins/step3.png)

### 创建任务
- 创建
    ![](../.vuepress/public/jenkins/task1.png)

    ![](../.vuepress/public/jenkins/task2.png)

- 添加仓库信息      
    依次输入 仓库地址 | 账号密码 | 拉取代码的分支（构建的时候就会到配置的仓库拉取最新代码进行构建）
    ![](../.vuepress/public/jenkins/task3.png)
    选择构建环境、添加 shell 脚本。怕 npm install 慢的换可以换成安装 cnpm 的脚本
    ```
    node -v
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm install
    npm run build
    ```
    ![](../.vuepress/public/jenkins/task4.png)
- 构建  
    配置完成后点击立即构建，点击构建任务的 icon 可查看构建详情，待构建完成查看工作空间可看到配置的仓库地址的代码被拉取下来了，且多了 dist 文件

    ![](../.vuepress/public/jenkins/build1.png)

    ![](../.vuepress/public/jenkins/build2.png)

    ![](../.vuepress/public/jenkins/build3.png)

到这里已经实现了在 jenkins 上创建任务、配置仓库信息、添加 shell 脚本、构建的功能。      
这里还是手动构建，接下来实现每次 push 代码到仓库就自动触发构建。

### 自动构建
- jenkins 安装 Generic Webhook Trigger 插件
    - 系统管理 -> 插件管理 中查看是否安装过 Generic Webhook Trigger 插件，没有则进行安装
    - 进入任务 -> 配置 构建触发器勾选 Generic Webhook Trigger，填写任意 token（github 仓库中会用到）
    ![](../.vuepress/public/jenkins/task5.png)
- github 添加 webhook   
    在对应的仓库项目上进行配置（托管在 gitlab 上大同小异），添加的方式上图红框中的三种都可以，此处选择了第一种。选择了 push 的时候触发 webhook（pull request也会触发）

    ![](../.vuepress/public/jenkins/task6.png)

    后续自动构建后可在下方查看构建详情（有时候会触发失败，在失败的事件上重新触发就行）

    ![](../.vuepress/public/jenkins/task7.png)

自动构建配置好了，现在来测试一下。本地修改代码 push 到仓库。可以看到 webhook 给 jenkins 发送了通知，jenkins 构建自动进行了。

![](../.vuepress/public/jenkins/push.png)

![](../.vuepress/public/jenkins/push1.png)

### 更新到服务器
构建完成后当然是需要把打包后的文件推送到服务器上了，这样才是一套完整的 CI 流程
根据 jenkins 服务器和web应用服务器是否为同一台服务器可有不同的处理方式
-  同一台服务器
    在构建完成后把文件 cp 或 mv 到指定的web服务器目录（该项目个人放在 /web/dist 目录下）
    更改 shell 脚本
    ```
    #!/bin/bash
    node -v
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm install
    npm run build
    cd dist
    cp -r * /web/dist
    ```
- 不同服务器
    使用 Publish Over SSH 插件
::: tip
因为个人的 jenkins 和前端项目都是部署在同一服务器，所以就选择了 cp 这种简单的方式。
:::

更改 shell 脚本后进行构建，构建报错，查看日志，Permission denied 提示没有权限    

![](../.vuepress/public/jenkins/error.png)  
服务器上查看 jenkins 配置
```
cat /etc/sysconfig/jenkins
```
![](../.vuepress/public/jenkins/root.png)
可以看到 JENKINS_USER=jenkins，jenkins 默认设置为 jenkins 用户      
更改为 JENKINS_USER=root
```
vim /etc/sysconfig/jenkins
```
![](../.vuepress/public/jenkins/root1.png)

重启 jenkins 服务
```
service jenkins restart
```
点击立即构建手动触发构建，构建完成后服务器对应的目录上应该更新了文件

![](../.vuepress/public/jenkins/dist.png)


## Gitlab-ci
> 未完待续...
## Travis-ci
> 未完待续...