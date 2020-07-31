// 正常演示
console.log('代码开始位置');
function fun() {
  var a = 10;
  var b = 20;
  var c = 30;
  function fun2() {
    console.log(a);
    // console.log('123123');
  }

  return fun2;
}

var fun2 = fun();
console.log('----');
fun2();
// 及时销毁闭包
fun2 = null;

// 闭包形成条件
// function fun() {
//   var a = 10;
//   var b = 20;
//   var c = 30;
//   function fun2() {
//     console.log(a);
//   }
//
//   // fun2();
//   return fun2;
// }
//
// fun();
