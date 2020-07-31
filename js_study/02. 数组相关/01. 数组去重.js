// 数组去重
let arr = [2,3,4,1,2,3,4,5,6];


// ES5
function uniqArr(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    // 结果数组中不包含该元素，就可以将该元素放入结果数组中
    if(result.indexOf(arrItem) === -1){
      result.push(arrItem)
    }
  }
  return result;
}


console.log(uniqArr(arr));
// ES6 set容器(包含多个不重复的value)
function uniqArr2(arr) {
  let result = [];
  let set = new Set(arr);
  // for of 循环 专门供iterator接口使用，如果某个数据身上有iterator接口，那么就可以使用for of循环(对象本身没有iterator接口，所以不能使用for of循环)
  // ... 三点运算符也是供iterator接口消费的
  for(let item of set){
    result.push(item)
  }
  return result;
}


console.log(uniqArr2(arr));

console.log(...new Set(arr));
// 简化版
function uniqArr3(arr) {
  // for of 循环 专门供iterator接口使用，如果某个数据身上有iterator接口，那么就可以使用for of循环(对象本身没有iterator接口，所以不能使用for of循环)
  // ... 三点运算符也是供iterator接口消费的
  return [...new Set(arr)];
}

console.log(uniqArr3(arr));
let uniqArr4 = arr => [...new Set(arr)];
console.log(uniqArr4(arr));
