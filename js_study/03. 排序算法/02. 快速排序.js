// 二叉树算法
/*
* 1. 一分为二，二分为四
* 2. 例子： 游戏。。。 A 和 B 两个人，一个人心里想一个数(1-100), 另一个人去猜，直到猜对为止，猜的次数少的获胜
*
* */

// 1-100 68
// 1-50 51-100
// 51-75 76-100
// 51-62 63-75
// 63-68 69 - 75
// 63-65 66-68
// 67
// 68 || 66

// 快速排序
/*
* 1. 对原数组去中间值
* 2. 准备两个空数组，对原数组剩下的值进行遍历，获取的每个元素同中间值比较大小，小的统一放在左侧数组，比中间值大的元素放在右侧数组
* 3. 循环之前以上的动作，直到排序结束
*
*
*
* */
let arr = [2,3,5,4,7,6,1];
// console.log(arr.splice(3, 1));
// console.log(arr);
// 4 [2,3,5,7,6,1]
// [] 4 []
// [2, 3, 1] 4 [5,7,6,]
// [2,1] 3 [] 4 [5,7,6]
// [1] 2 [] 3 [] 4 [5,7,6]

function quickSort(arr) {
  // 递归结束的条件
  if(arr.length < 2){
    return arr
  }
  // 获取中间值
  let flag = Math.floor(arr.length / 2);
  let flagValue = arr.splice(flag, 1)[0];
  
  let leftArr = [];
  let rightArr = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    
    if(arrItem > flagValue){
      rightArr.push(arrItem)
    }else {
      leftArr.push(arrItem)
    }
  }
  
  leftArr = quickSort(leftArr);
  rightArr = quickSort(rightArr);
  return [...leftArr, flagValue, ...rightArr]
}


console.log(quickSort(arr));
