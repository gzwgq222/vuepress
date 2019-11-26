
# 数组
[MDN：Array 参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 集合类
数组元素的每一项都会执行 `callback`

### forEach
`forEach` 方法对数组的每一项执行一次提供的函数，返回 `undefined`  
语法：`arr.foreach(callback(item, index, arr), context)`。如提供 `context` 则作为 `callback` 的 `this`
``` js
Array.prototype.forEach = function (cb, context) {
    const arr = Array.prototype.slice.call(this); // 浅拷贝，确保 this 在 callback 中不被改变
    for (var i = 0; i < arr.length; i++) {
       cb.call(context, arr[i], i, arr)
   }
}
```
- 数组中元素为基本类型时，`cb` 中无法改变原数组；为复杂类型时，`cb` 中可以改变原数组


### map
`map` 方法返回一个新的数组，其结果是数组中的每个元素调用提供的函数返回的值     
语法：`var new_array = arr.map.(callback(item, index, array), context)`。
``` js
Array.prototype.map = function (cb, context) {
    const arr = Array.prototype.slice.call(this);
    let data = [];
    for(var i = 0; i < arr.length; i++) {
        const res = cb.call(context, arr[i], i, arr);
        data.push(res);
    }
    return data;
}
```

### filter
`filter` 方法通过传入的 `callback` 对每一项元素进行过滤，将满足条件的元素组成新的数组返回   
语法：`const new_array = arr.filter(callback(item, i, arr), context)`
``` js
Array.prototype.filter = function (cb, context) {
    const arr = Array.prototype.slice.call(this);
    let data = [];
    for(var i = 0; i < arr.length; i++) {
        cb.call(context, arr[i], i, arr) && data.push(arr[i]);
    }
    return data;
}

```
### reduce
`reduce` 方法对数组的每个元素执行提供的 `callback` ，将执行的结果作为返回值返回     
语法: `const data = arr.reduce(cb(accumulator, currentValue, index, arr), initialValue)`
``` js
Array.prototype.reduce = function (cb, initValue) {
    const arr = Array.prototype.slice.call(this);
    var i = 0;
    if (initValue === undefined) {
        initValue = arr[0];
        i = 1;
    }
    var res = initValue;
    for(; i < arr.length; i++) {
        res = cb(res, arr[i], i, arr);
    }
    return res;
}
```

## 检索类
对数组元素进行特定值的检索

### find
`find` 方法对数组元素的每一项 `callback` ，直至有一个 `callback` 为 `true`。当找到这样一个元素后，停止检索，立即返回该元素，否则返回 `undefined`    
语法: `const index = arr.find((item, i, arr), context)`
``` js
Array.prototype.find1 = function (cb, context) {
    const arr = Array.prototype.slice.call(this);
    let item = undefined;
    for(var i = 0; i < arr.length; i++) {
        if (cb.call(context, arr[i], i, arr)) {
            item = arr[i];
            break;
        };
    }
    return item;
}
```

### findIndex
`findIndex` 方法对数组元素的每一项 `callback` ，直至有一个 `callback` 为 `true`。找到这样一个元素后，停止检索，立即返回该元素的索引，否则返回 -1     
语法: `const index = arr.findIndex((item, i, arr), context)`
``` js
Array.prototype.findIndex = function (cb, context) {
    const arr = Array.prototype.slice.call(this);
    let index = -1;
    for(var i = 0; i < arr.length; i++) {
        if (cb.call(context, arr[i], i, arr)) {
            index = i;
            break;
        };
    }
    return index;
}
```
### indexOf
### lastIndexOf
### some
`some` 方法通过 `callback` 测试数组是不是至少有一个元素满足条件，返回 `Boolean`     
语法：`arr.some(callback(item, index, arr), context)`   
> 注意：若收到一个空数组，此方法在一切情况下都会返回 `false`
``` js
Array.prototype.some = function (cb, context) {
    const arr = Array.prototype.slice.call(this);
    let state = false;
    for(var i = 0; i < arr.length; i++) {
        if (cb.call(context, arr[i], i, arr)) {
            state = true;
            break;
        }
    }
    return state;
}
```

### every
`every` 方法测试数组内的所有元素能否都通过 `callback` 的测试，返回 `Boolean`
语法：`arr.every(callback(item, index, arr), context)`   
> 注意：若收到一个空数组，此方法在一切情况下都会返回 `true`
``` js
Array.prototype.every = function (cb, context) {
    const arr = Array.prototype.slice.call(this);
    let state = true;
    for(var i = 0; i < arr.length; i++) {
        if (!cb.call(context, arr[i], i, arr)) {
            state = false;
            break;
        }
    }
    return state;
}
```
## 拼接、附加和反转
### concat
### join
### reverse

## 添加、删除和追加
### shif
### unshift
### pop
### push
### fill


## 扁平

### flat
### flatMap

## generator 类

### keys
### values
