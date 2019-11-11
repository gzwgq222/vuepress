# Linux

## 常用命令

## nginx 

nginx -s reload | reopen | stop | quit  # 重新加载配置文件 | 重启 | 停止 | 退出 nginx       
nginx -t：# 测试配置是否有语法错误      
nginx [-?hvVtq] [-s signal] [-c filename] [-p prefix] [-g directives]       
-?,-h         #  打开帮助信息       
-v             #  显示版本信息并退出        
-V             #  显示版本和配置选项信息，然后退出      
-t              # 检测配置文件是否有语法错误，然后退出      
-q             # 在检测配置文件期间屏蔽非错误信息       
-s signal   # 给一个 nginx 主进程发送信号：stop（停止）, quit（退出）, reopen（重启）, reload（重新加载配置文件）       
-p prefix    # 设置前缀路径（默认是：/usr/local/Cellar/nginx/1.2.6/）       
-c filename # 设置配置文件（默认是：/usr/local/etc/nginx/nginx.conf）       
-g directives # 设置配置文件外的全局指令        
cat nginx.conf   # 查看nginx配置

/usr/sbin/nginx：主程序
/etc/nginx：存放配置文件
/usr/share/nginx：存放静态文件
/var/log/nginx：存放日志

启动：nginx     
查看进程号：ps -ef | grep nginx     
杀死进程: kill -9 进程号        
进入nginx配置文件目录：cd /etc/nginx        
查看nginx配置文件 cat nginx.conf        
编辑配置文件：vim nginx.conf  进入编辑模式 按 i 进行编辑，当编辑完之后按ESC键退出编辑模式，然后输入 :wq! 并回车，保存修改并退出     
:q! 不保存退出/e
## mysql

## jenkins
service jenkins start | stop | restart jenkins 关闭 | 开启 | 重启       
cat /etc/sysconfig/jenkins 查看 jenkins 配置
