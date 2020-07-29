
import Home from '../components/Home/Home'
import Personal from '../components/Personal/Personal'


export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/home'
  }
]
