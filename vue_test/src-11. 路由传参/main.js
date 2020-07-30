import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
Vue.config.productionTip = false
// 全局错误捕获，就是在任何位置发生的错误如果不做任何处理最终都会传递到全局,
// 全局捕获后不会在浏览器控制台报错
Vue.config.errorHandler = function (err, vm, info) {
  console.log('--- 全局错误捕获 ----');
  console.log(vm);
}

// 原型： 构造函数的显示原型 === 其实例的隐式原型

/*
* 组件实例： this
* 应用实例： vm
* vm.__proto__ === Vue.prototype
* 结论： 组件的实例的原型对象 是 应用的实例vm
* this.__proto__.__proto__ == vm.__proto__ == Vue.prototype
* */
Vue.prototype.$Bus = new Vue()

const vm = new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

// console.log('vm: ', vm);
//
// function Person(name) {
//   this.name = name;
// }

// let person1 = new Person('wade')
// let person2 = new Person('anverson')
//
// person2.__proto__ = person1\

// person1.__proto__ === person2.__proto__
