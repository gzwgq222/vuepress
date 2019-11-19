# 简介
## 需求  

  在快速迭代的时候，每次构建项目后手动推送到服务器就显得有点繁琐了，会花很多的时间在更新文件上。如果每次把代码 push 到仓库的时候都能自动构建项目并推送到服务器上就完美了。

  查下下资料主流的方案如下：
  1. 代码仓库在 github，可以使用 github 支持的 CI 方式，如：Travis-ci
  2. 代码仓库在 gitlab，可以使用 gitlab 自带的 gitlab-ci
  3. 可以使用 jenkins 持续化集成平台

  因为个人项目托管在 github 上，有台乞丐版的服务器，为了适用性，选择了 jenkins 做持续化集成。

## 原理  

  ![](../.vuepress/public/jenkins/jks.jpg)  
  如图所示，原理很简单明了，在 git/svn 项目仓库配置 hook，当我们本地 push 的时候就会触发 hook 向 jenkins 发送消息，jenkins 接收到消息后就会从仓库 pull 代码，接着执行我们在 jenkins 上配置的 shell 脚本，shell 脚本上配置在打包完成后把打包后的文件推送至服务器对应的目录上。