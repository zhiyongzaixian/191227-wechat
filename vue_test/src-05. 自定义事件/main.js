import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 全局错误捕获，就是在任何位置发生的错误如果不做任何处理最终都会传递到全局,
// 全局捕获后不会在浏览器控制台报错
Vue.config.errorHandler = function (err, vm, info) {
  console.log('--- 全局错误捕获 ----');
  console.log(vm);
}

new Vue({
  render: h => h(App),
}).$mount('#app')
