import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

// 用来声明当前组件代表整个应用
App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
