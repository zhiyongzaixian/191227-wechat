import Vue from 'vue'
import App from './App.vue'
import Test from './MyComponents/Button'



Vue.config.productionTip = false

// 声明使用Vue的扩展库，如果扩展库向外暴露的是对象，会自动调用对象的install方法
Vue.use(Test)

const vm = new Vue({
  render: h => h(App),
}).$mount('#app')

