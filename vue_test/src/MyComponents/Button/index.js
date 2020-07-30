import Button from './Button'
//
// const test = {
//   install(Vue){
//     console.log('install()');
//     Vue.component('Button', Button)
//   }
// }



const test = (Vue) => {
  Vue.component('Button', Button)
  Vue.prototype.play = function (msg) {
    alert(msg)
  }
}



export default test;
