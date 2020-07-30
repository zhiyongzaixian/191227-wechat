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

const router = new VueRouter({
  routes,
  // mode: 'history'
})


// 全局守卫

router.beforeEach((to, from, next) => {
  console.log('----- beforeEach 全局前置守卫 -------');
  // 西游记： 贫僧从东土大唐而来(from)，要去西天取经(to)，途径贵宝地，望发放 通关文牒(next)
  console.log(to);
  console.log(from);
  // console.log(next);
  // 使用场景： 验证用户身份，判断用户是否登录
  // let isLogin = false; 未登录
  let isLogin = true; // 登录
  // 如果登录，正常跳转至home，如果未登录就跳转至登录界面
  if(isLogin){ // 如果登录，正常跳转至home
    next()
  }else { // 如果未登录就跳转至登录界面
    // next('/login')
    if(to.path === '/login'){
      next()
    }else {
      next('/login')
    }
  }
  
})


router.beforeResolve((to, from, next) => {
  console.log('----- beforeResolve 全局解析守卫 -------');
  // 负责解析路由地址，加载对应的路由组件
  next()
})

router.afterEach((to, from) => {
  console.log('----- afterEach 全局后置钩子 -------');
})


export default router
