# 手动实现api

## 数组
### foreach

### map
``` js
Array.prototype.map = function (cb, context) {
    let arr = Array.prototype.slice.call(this),
        mapArr = [],
        i = 0,
        len = arr.lenght;
    for(; i < len; i++) {
        const res = cb.call(context, arr[i], i, arr);
        mapArr.push(res);
    }
    return mapArr;
}
```
### filter
### some
### event
### reduce

## 函数
### bind
### call
### apply
### setTimeout


## 异步
### promise
### async/await