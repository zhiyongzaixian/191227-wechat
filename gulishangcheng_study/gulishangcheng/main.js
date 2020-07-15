import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 用来声明当前组件代表整个应用
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
