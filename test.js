/**
 * @method getRandomArr
 * @desc 随机生成 0 ~ m 间的 n 个数
 * @param {Number} n 
 * @param {Number} m 默认为 n
 * @return {Array} 随意生成的数据
 */
const getRandomArr = (n, m = n) => Array.from({length: n}, _ => Math.floor(Math.random() * m))
let arr =  getRandomArr(10)
let arr1 =  [...arr];
let arr2 =  [...arr];

function bubbleSort (arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
// console.time('bubbleSort：')
// bubbleSort(arr)
// console.timeEnd('bubbleSort：')

function selectionSort (arr) {
  const { length: len } = arr;
  let minIndex;
  for (let i = 0; i < len -1; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      arr[minIndex] > arr[j] && (minIndex = j);
    }
    minIndex !== i && ([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]);
  }
}

// console.time('selectionSort：')
// selectionSort(arr1)
// console.timeEnd('selectionSort：')

// 使用两个空数组进行交换 也可以把和基准数相等的数值取出来，没必要进入递归
function quickSort (arr) {
  if (arr.length < 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  let left = [],
  right = [];
  for (let i = 0; i < arr.length; i ++) {
    arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
  // arr.forEach(item => {
  //   item > pivot ? right.push(item) : left.push(item);
  // })
  // return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.time('quickSort：')
// quickSort(arr2);
// console.timeEnd('quickSort：')

// 使用交换（正宗版）
function quickSort2(arr,low,high){
  var key = arr[low];
  var start = low;
  var end = high;
  while(end > start){
    // 从后往前
    while(end > start && arr[end] >= key) end--; // 遍历查找第一个小于 key 的下标
    if(arr[end] < key) [arr[end], arr[start]] = [arr[start], arr[end]]
    // 从前往后
    while(end > start && arr[start] <= key) start++;
    if(arr[start] > key) [arr[start], arr[end]] = [arr[end], arr[start]]
  }
  if(start > low) quickSort2(arr,low,start-1);
  if(end < high) quickSort2(arr,end+1,high);
}
console.time('quickSort2')
quickSort2(arr, 0, arr.length - 1);
console.timeEnd('quickSort2')
console.log(arr)
