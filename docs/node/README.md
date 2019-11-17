# Node

### node 是什么？
Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。  
Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

说人话就是 .....     
`node` 就是 `javascript` 的一种运行环境, 基于 Google的V8引擎创建的这么一个平台。  
long long years ago `javascript` 只能在浏览器执行，没办法在服务端执行，而 `node` 的诞生就可以让 `javascript` 脱离浏览器的限制可以在服务端执行。
::: warning 注意
node 不是一门语言而是一个环境、一个平台，可以让 javascrip 运行在服务端。
:::

### node 可以做什么？
`node` 是 `javascript` 的运行平台，提供了丰富的内置模块。
- 文件系统（fs）：`readFile` `writeFile` 等api可以对文件进行读写操作
- http模块：可以创建web服务器
-  流（stream）：流是基于事件的api，用于管理和处理数据
- more...

可以对系统中的文件进行读写，创建web服务器，对网页数据进行爬取等等

### node 规范
`node` 遵循的是  CommonJs 规范
``` js
module.exports = {}
// or
exports.a = 'a';
```
``` js
require('./module')
```
