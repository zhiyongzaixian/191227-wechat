// 数组扁平化： 将多维数组变成一维数组
let arr = [1,2, [3, 4, [5,6]]];


// concat
let test = [1,2];
// console.log(test.concat(3));
// console.log(test.concat([4,5]));
function arrFlatten(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    // 如果循环的个体中还是数组，要继续扁平化
    if(Array.isArray(arrItem)){
      // 递归
      result = result.concat(arrFlatten(arrItem));
    }else {
      result = result.concat(arrItem)
    }
  }
  return result;
}


console.log(arrFlatten(arr));

// reduce 累加器
function arrFlatten2(arr) {
  return arr.reduce((result, arrItem) => {
    return result.concat(Array.isArray(arrItem)?arrFlatten2(arrItem):arrItem)
  }, []);
}


let arrFlatten3 = arr => arr.reduce((result, arrItem) => result.concat(Array.isArray(arrItem)?arrFlatten2(arrItem):arrItem), [])
