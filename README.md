# 归纳、整理

- [javascript](https://github.com/gzwgq222/vuepress/tree/master/docs/js)  
- [es6](https://github.com/gzwgq222/vuepress/tree/master/docs/es6)  
- [naginx](https://github.com/gzwgq222/vuepress/tree/master/docs/nginx)   
- [webpack](https://github.com/gzwgq222/vuepress/tree/master/docs/webpack)    
- [git](https://github.com/gzwgq222/vuepress/tree/master/docs/git)    
- [算法](https://github.com/gzwgq222/vuepress/tree/master/docs/algorithm)    
- [设计模式](https://github.com/gzwgq222/vuepress/tree/master/docs/design)    
- [CI/CD](https://github.com/gzwgq222/vuepress/tree/master/docs/jenkins)    


## 命令
- 本地运行
```
npm install -g vuepress
npm run dev
npm run build
```
- 推送至仓库、服务器
```
npm run pro 'feat: 推送至仓库、服务器'
```
## CI/CD
- 该项目已通过 jenkins 实现了 CI/CD，每次 push 都会自动进行打包并更新到服务器。   
**由于服务器编译占用资源开销比较大，请选择 `npm run pro message` 的形式执行本地编译**   

shell 脚本
```
#!/usr/bin/env sh
npm install vuepress &&
npm install moment &&
# npm install
npm run docs:build &&
rm -rf /web/doc/* &&
cd docs/.vuepress/dist &&
cp -r * /web/doc
```