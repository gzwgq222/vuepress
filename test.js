/**
 * @method getRandomArr
 * @desc 随机生成 0 ~ m 间的 n 个数
 * @param {Number} n 
 * @param {Number} m 默认为 n
 * @return {Array} 随意生成的数据
 */
const getRandomArr = (n, m = n) => Array.from({length: n}, _ => Math.floor(Math.random() * m))
let arr =  getRandomArr(100)
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
console.time('bubbleSort：')
bubbleSort(arr)
console.timeEnd('bubbleSort：')

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

console.time('selectionSort：')
selectionSort(arr1)
console.timeEnd('selectionSort：')

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

console.time('quickSort：')
quickSort(arr2);
console.timeEnd('quickSort：')