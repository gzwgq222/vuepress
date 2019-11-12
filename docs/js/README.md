# JS

## 基础
### 闭包
### event loop
### 深、浅拷贝
### 防抖、节流
### 高阶函数
### 函数柯里化
### 继承


## 函数

### 去重

**多重不同的姿势去重**

- 双重循环
``` js
const unique = arr => {
    let newArray = []
    let i = 0,
        isRepeat = false,
        len = arr.length
    for (i; i < len; i++) {
      isRepeat = false
      let j = 0,
          newLen = newArray.length
      for (j; j < newLen; j ++) {
        if (arr[i] === newArray[j]) {
          isRepeat = true
          break
        }
      }
      !isRepeat && newArray.push(arr[i])
    }
    return newArray
}
```

- 循环 + includes
``` js
const unique = arr => {
    let newArr = []
    arr.forEach(item => !newArr.includes(item) && newArr.push(item))
    return newArr
}
```

- filter + indexOf
``` js
const unique = arr => {
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index
    })
}
```

- sort 

::: tip
先 sort，判断相邻两个 item 是否相等，不相等则 push 进去
:::
``` js
const unique = arr => {
    let newArr = []
    arr.sort()
    arr.forEach((item, i) => {
        item !== arr[i+1] && newArr.push(item)
    })
    return newArr
}
```

::: tip
先 sort，然后判断 newArr 最后的 item，是否等于当前循环的 item，不等于则 push 进去
:::
``` js
const unique = arr => {
    const newArray = []
    arr.sort()
    arr.forEach((item, i) => {
    newArray[newArray.length - 1] !== item && newArray.push(item)
    })  
    return newArray
}
```

- reduce
``` js
const unique = arr => {
    return arr.reduce((pre, cur) => {
        !pre.includes(cur) && pre.push(cur)
        return pre
    }, [])
}
```

- set
``` js
const unique = arr => [...new Set(arr)]
```
``` js
const unique = arr => Array.from(new Set(arr))
```