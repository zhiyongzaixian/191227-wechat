
var a = 10;
function fun() {
  var a = 20;
  fun2();
}


function fun2(){
  console.log(a); // 10
  console.log(b);
}
fun();
