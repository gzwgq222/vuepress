---
sidebarDepth: 1
---

# 文件系统
文件系统（file system）顾名思义就是可以对系统的文件进行操作

## 读取

### fs.readFile(path[, options], callback)
- path string | Buffer | URL | integer 文件名或文件描述符。
- options Object | string
  - encoding string | null 默认值: null。
  - flag string 参阅支持的文件系统标志。默认值: 'r'。
- callback Function
  - err Error
  - data string | Buffer

异步读取文件的全部内容
```js
fs.readFile('./txt', (err, data) => {
  if(err) throw err;
  console.log(data); // 已全部读取完
})
```

如果 `options` 是字符串，则他指定字符串编码
```js
fs.readFile('/etc/passwd', 'utf8', callback);
```

::: tip
 `fs.readFile` 会缓冲整个文件。为了最小化内存成本，可使用 `fs.createReadStream()` 进行流式读取
:::

### fs.readFileSync(path[, options])
- path string | Buffer | URL | integer 文件名或文件描述符。
- options Object | string
  - encoding string | null 默认值: null。
  - flag string 参阅支持的文件系统标志。默认值: 'r'。
- 返回: string | Buffer

如指定了 `encoding` 选项，则返回字符串式的结果，否则返回 `buffer`   
看到 sync 应该就知道是同步读取
```js
const res = fs.readFileSync('./txt', 'utf8');
console.log(res);
```
