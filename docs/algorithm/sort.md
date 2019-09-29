### 排序算法（冒泡、选择、快排）
---
对比图   
![sort](https://upload-images.jianshu.io/upload_images/6078022-86a57fe9166e171b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)   
**n**: 数据规模   
**k**:“桶”的个数    
**In-place**: 占用常数内存，不占用额外内存    
**Out-place**: 占用额外内存   
**稳定性**：排序后2个相等键值的顺序和排序之前它们的顺序相同

所谓排序，就是将一组或多组数据按照递增或递减的方式排列起来    


### 冒泡排序（Bubble Sort）
--- 
::: tip
顾名思义，冒泡排序就像气泡一样，依次向上（后），每次都是从第一个数开始和后一个数进行比较，如果大于后一个数，则交换两者位置，后一个数再和下一位进行比较，直到全部排序完毕。大的数往后排得到的就是顺序，小的数往后排得到的则是倒序。  
:::
![Bubble Sort](https://upload-images.jianshu.io/upload_images/6078022-4987842fd0c41f9b.gif?imageMogr2/auto-orient/strip)

**什么时候最慢 ？**   
当输入的数据是反序时，每两个数之间都需要交换位置，此时操作次数无疑是最多的，所以是最慢的。

**什么时候最快 ？**   
当输入的数据已经是正序时，就无需再进行排序操作。此处可进行优化处理，通过一个 flag 去判断数据是否正序，如果是正序，则第一次挨个比较相邻的数据间就不会反生交换，后续的比较就没必要了。

for实现
```js
function bubbleSort (arr) {
  for(let i = 0; i < arr.length - 1; i++) { // 排序的次数。 此处为什么要减 1 ?
    for (let j = 0; j < arr.length - 1 - i; j++) { // 每次排序，比较相邻数据。此处为什么要减 i ?
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}
```
**Q： 为什么要在排序的次数上 -1 ？**  
**A：** 为了减少排序和比较的次数。因为是往后排，n 个数据的时候只需要排 n-1 次即可（只剩第一个数的时候其他的数据都已经排好了，这次就不需要排列了）  
**Q： 为什么每次排序比较相邻两数据的时候要 -1-i ？**  
**A：** 同理，比较相邻数据的时候，只剩第一个数的时候就不需比较了。排列了 i 次，那么后面的 i 个数已经是按正序排列好了，当然后面 i 个数就不用再进行两两比较了

while实现 
```js
function bubbleSort(arr) {
  let time = arr.length - 1
  while (time) {
    let i = 0
    while (i<time) {
      if (arr[i] > arr[i+1]) [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      i ++
    }    
    time --
  }

```
### 选择排序（Selection Sort）
--- 
::: tip
选择最小（大）数的从第一位依次往后排，直到全部排列完毕，共需 n-1 次循环排序，第 n-1 次循环的时候最后一个数已经是最大或最小值了。通过比较图可知，选择排序在时间复杂度上是最稳定的，无论什么数据进去时间复杂度都是 n-1 + n-2 + n-3 ... + 3 + 2 +1 = O(n²)
:::
![selectionSort](https://upload-images.jianshu.io/upload_images/1867034-c6cc220cfb2b9ac8.gif?imageMogr2/auto-orient/strip)

```js
function selectionSort (arr) {
  const { length } = arr;
  let minIndex;
  for (let i = 0; i < length - 1; i++) { // 为什么不是 i < length ?
    minIndex = i;
    for (let j = i; j < length; j++) { // 为什么 j = i; j < length 而不是  j < length -1 ?
      arr[minIndex] > arr[j] && (minIndex = j);
    }
    minIndex !== i && ([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]);
  }
}
```   
**Q：为什么不是 i < length ?**   
**A：** 当循环了n-1次排序的时候就已经按正序排好了 n-1 个数，此时最后一个数就是最大或最小值了，无需再排一次。  
**Q：为什么 j = i；j < length ?**    
**A：** 与上同理，当在第 i 次排序的时候前面 i - 1 个数就已经是正序了，前面的数无需再排了，只需把后面的数进行排序即可。因为要和后面的每一项进行比较找出值最小的 minIndex，所以 j < length

### 快速排序（Quick Sort） 
::: tip
通过一趟排序，将数据分割成两部分，其中一部分的数据都比另一部分的小，对这两部分的数据再进行该分割的操作，以达到整个序列有序（将小数据放一侧，大数据放一侧，有点冒泡排序的味道）。
一种分而治之思想在排序算法上的典型应用。本质上看，快排是在冒泡排序的基础上的递归分治法。顾名思义，他的特点就快，和其它排序方法相比，在处理大量数据的时候最为明显。
:::
![Quick Sort](https://upload-images.jianshu.io/upload_images/1867034-cd65e35d7dce5045.gif?imageMogr2/auto-orient/strip)

**两种实现方式**

**1. 使用两个数组进行存放**
```js
function quickSort (arr) {
  if (arr.length < 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2); // 找到基准数
  const pivot = arr.splice(pivotIndex, 1)[0]; // 取出并删除基准数
  let left = [],
  right = [];
  for (let i = 0; i < arr.length; i ++) {
    arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]); // 优化：和基准数相等的数据不必进行递归，可以把相等的数据添加到一个数组 pivotList 中 => .concat(pivotList, ...)
  }
  return quickSort(left).concat(pivot, quickSort(right));
  // or
  // arr.forEach(item => {
  //   item > pivot ? right.push(item) : left.push(item);
  // })
  // return [...quickSort(left), pivot, ...quickSort(right)];
}
```
**缺点**

- 获取基准点使用了一个splice操作，在js中splice会对数组进行一次拷贝的操作，而它最坏的情况下复杂度为O(n)，而O(n)代表着针对数组规模的大小进行了一次循环操作。
- 首先我们每次执行都会使用到两个数组空间，产生空间复杂度。
- concat操作会对数组进行一次拷贝，而它的复杂度也会是O(n)
- 对大量数据的排序来说相对会比较慢

**优点**

- 代码简单明了，可读性强，易于理解

**2. 使用交换（正宗版本）**

[参考资料](https://www.cnblogs.com/liululin/p/5897059.html)

[参考资料](https://www.cnblogs.com/alaner/p/9612948.html)