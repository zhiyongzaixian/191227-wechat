let arr = [2,3,4,5]

// reduce(() => {}, 累加初始值)
/* 
 1. 累加初始值传值了，pre初始化的值 === 累加初始值
 2. 累加初始值没有传值， pre初始化的值 === 数组的第一项
 */
let result = arr.reduce((pre, item) => {
	console.log(pre, item)
	return pre + item
}, 0)

console.log('result', result)