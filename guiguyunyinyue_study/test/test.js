// 位移运算符： >>> <<<
// 将指定的数据转换成二进制数据，然后移动指定的位数，前边空缺的位数用0补齐，移动之后就是计算的结果
// 右移0位，通常用在将其他数据类型强制转换成number类型
var num = 3;
// 0000 0011
//  00000 001
console.log(num>>>1); // 1
console.log(num>>>2); // 0

console.log(num>>>0); // 3

var str = '123123'
console.log(typeof str); // string
var str2 = str>>>0;
console.log(str2);
console.log(typeof str2); // number


let arr = [1,2,3]
console.log(arr.toString()); // 1 2 3
console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(str)); // [object String]
