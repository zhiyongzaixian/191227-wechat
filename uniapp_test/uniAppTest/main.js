import Vue from 'vue'
import App from './App'

// 关闭Vue开发中的提示
Vue.config.productionTip = false

// mp: 小程序
// 声明当前组件代表整个小程序应用
App.mpType = 'app' // app: application

const app = new Vue({
    ...App
})
// 挂载整个应用
app.$mount()


// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })