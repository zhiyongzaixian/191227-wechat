
import Home from '../components/Home/Home'
import Personal from '../components/Personal/Personal'
import Cart from '../components/Cart/Cart'


export default [
  {
    path: '/home',
    component: Home,
    
    // 元信息： 用来描述信息本身的信息
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal/:id',
    component: Personal,
    name: 'personal',
    // props: true // 需要搭配params使用， 允许params参数导入组件的props对象中
    
    // props: { // 对象模式
    //   msg: 'props传递的参数',
    //   a: 123
    // }
    props: route => ({a: 123, msg: route.params.id})
  },
  {
    path: '/cart',
    component: Cart,
    name: 'cart'
  },
  {
    path: '/',
    redirect: '/home'
  }
]
