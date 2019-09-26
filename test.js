/**
 * @method getRandomArr
 * @desc 随机生成 0 ~ m 间的 n 个数
 * @param {Number} n 
 * @param {Number} m 默认为 n
 * @return {Array} 随意生成的数据
 */
const getRandomArr = (n, m = n) => Array.from({length: n}, item => Math.floor(Math.random() * m))
let arr =  getRandomArr(100)
let arr1 =  [...arr];

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