// 冒泡排序：
/*
* 1. 对数组进行遍历，会比较前后相邻的两个元素，根据排序规则(升序，降序)，去决定相邻的元素是否需要交互位置
* 2. 每一轮PK，会找出一个最大或者最小的元素
* 3. 会遍历多次，直到整个数组排序结束
*
*
* */


let arr = [2,3,5,1,4,7,6];
// [2,3,1,4,5,6,7]
// [2,3,1,4,5,6,7]
// [2,1,3,4,5,6,7]
// [1,2,3,4,5,6,7]

let a = 1;
let b = 2;
// a = 2; b = 1;???
// a = a + b;
// b = a - b;
// a = a - b;


function arrSort(arr) {
  // 负责PK的轮数: length - 1
  for (var i = 0; i < arr.length - 1; i++) {
    // 每一轮PK 数组的元素: arr.length - i - 1
    for (var j = 0; j < arr.length - i - 1; j++) {
      // 升序： 如果前边的元素大于后边的元素，两者需要交换位置
      // arr[j] arr[j + 1]
      // if(arr[j] > arr[j + 1]){ 升序
      if(arr[j] < arr[j + 1]){ // 降序
        arr[j] = arr[j] + arr[j + 1]
        arr[j + 1] = arr[j] - arr[j + 1]
        arr[j] = arr[j] - arr[j + 1]
      }
    }
  }
  
  return arr;
}

console.log(arrSort(arr));
