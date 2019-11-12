# 归纳、整理

- [javascript](https://github.com/gzwgq222/vuepress/tree/master/docs/js)  
- [es6](https://github.com/gzwgq222/vuepress/tree/master/docs/es6)  
- [naginx](https://github.com/gzwgq222/vuepress/tree/master/docs/nginx)   
- [webpack](https://github.com/gzwgq222/vuepress/tree/master/docs/webpack)    
- [git](https://github.com/gzwgq222/vuepress/tree/master/docs/git)    
- [算法](https://github.com/gzwgq222/vuepress/tree/master/docs/algorithm)    
- [设计模式](https://github.com/gzwgq222/vuepress/tree/master/docs/design)    
- [CI/CD](https://github.com/gzwgq222/vuepress/tree/master/docs/jenkins)    


## 运行
```
npm install -g vuepress
npm run dev
npm run build
```
## CI/CD
该项目已通过 jenkins 实现了 CI/CD，每次 push 都会自动进行打包并更新到服务器。   
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