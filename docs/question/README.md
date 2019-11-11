# Question

## mysql
### 权限
**Q：** jenkins上使用 cp 命令，提示 `Permission denied`     
**A：** vim /etc/sysconfig/jenkins 查看jenkins权限，JENKINS_USER=jenkins 改为 JENKINS_USER=root
## jenkins
## node
## nginx
**Q：**vim nginx.conf 时异常退出，再进入时 提示 Found a swap file by the name ".nginx.conf.swp"，目录下产生了.nginx.conf.swap隐藏文件， ls -a查看所有文件（.开头的为隐藏文件）
**A：**rm - .nginx.conf.swp 或者 恢复非正常关闭的文件