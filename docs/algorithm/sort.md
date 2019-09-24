### 十大经典排序算法 :100:
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
顾名思义，冒泡排序就像气泡一样，依次向上，每次都是从第一个数开始和后一个数进行比较，如果大于后一个数，则交换两者位置，后一个数再和下一位进行比较，直到全部排序完毕。大的数往后排得到的就是顺序，小的数往后排得到的则是倒序。  

动态图  
![Bubble Sort](https://upload-images.jianshu.io/upload_images/6078022-4987842fd0c41f9b.gif?imageMogr2/auto-orient/strip)

**什么时候最慢 ？**   
当输入的数据是反序时，每两个数之间都需要交换位置，此时操作次数无疑是最多的，所以是最慢的。

**什么时候最快 ？**   
当输入的数据已经是正序时，就无需再进行排序操作。此处可进行优化处理，通过一个 flag 去判断数据是否正序，如果是正序，则第一次挨个比较相邻的数据间就不会反生交换，后续的比较就没必要了。

**JS实现**    
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

**Q：为什么要在排序的次数上 -1 ？每次排序比较相邻两数据的时候要 -1-i ？**   
**A：为了减少排序和比较的次数。因为是往后排，n 个数据的时候只需要拍 n-1 次（只剩第一个数的时候）**
### 选择排序（Selection Sort）
---
动态图  
![selectionSort](https://upload-images.jianshu.io/upload_images/1867034-c6cc220cfb2b9ac8.gif?imageMogr2/auto-orient/strip)
