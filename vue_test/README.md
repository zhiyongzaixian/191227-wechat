## Vuex
### 1. 作用
 1. 用于集中管理状态数据
 2. 用于给多个组件共享数据
### 2. 核心概念
 1. store对象
 2. state： 状态数据
 3. mutation: 用于同步修改state状态数据
 4. action: 用于执行异步任务，获取异步数据，同时触发mutation并将数据交给mutation
 5. getter: 根据已有的状态数据计算得到新的状态数据，等同于Vue中的computed
 6. module: 用于对store对象进行模块化管理
 
### 3. 注意点
 1. mutation，action本质都是函数
 
## 路由
### 1. 核心概念
 1. router: 路由器(管理路由)
 2. router-link: 路由链接(请求路由)
 3. router-view: 路由容器(接收请求到的路由组件)
 4. 路由对象: {path: 路由路径, component: 路由组件, redirect: 重定向路由地址}
### 2. 面试题
 1. 命名路由的时候params和query分别可以和什么搭配使用
    1. query + name
    2. query + path
    3. params + name
 
 
 
 
