import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

/*
* 路由模式：
*   1. hash router
*     - hash路由通过 # + path组成，代表唯一值
*     - 通过路由切换，强制触发浏览器添加一条新的浏览历史记录
*   2. history router
*     - 通过浏览器的history对象进行路由管理跳转
*     - history对象是浏览器内置的浏览历史管理对象
*
*
* */

export default new VueRouter({
  routes,
  // mode: 'history'
})
