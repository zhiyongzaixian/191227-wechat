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
 
 
### 2. 路由传参
 1. query
    1. 传参方式：
        1. 注册的路由的时候不需要做任何事情
        2. 请求的时候通过path?key=value&key2=value2
    2. 获取:
        1. $route.query.key
    3. 使用场景
        1. 适合多个参数
 2. params
    1. 传参方式:
        1. 注册路由的时候需要声明占位符，{path: '路由路径/:key(占位符)'}
        2. 请求的时候通过 path/params参数
    2. 获取:
        1. $route.params.key
    3. 使用场景
        1. 通常只有一个参数的时候
        2. 该参数通常是一个标识id
 3. meta
    1. 传参方式:
        1. 注册的时候通过meta字段进行参数设置
    2. 获取:
        1. $route.meta.key
    3. 使用场景
        1. 路由元信息，用于描述当前的路由信息
        2. 可以自定义参数内容的时候(可以有多个)
 4. props
    1. 传参方式:
        1. 布尔值(需要搭配params参数使用)
        2. 对象(用于自定义参数)
        3. 函数(自定义参数 + 路由信息)
    2. 获取:'
        1. 在组件内部通过props接收获取
    3. 使用场景
        1. 用来解耦$route和组件实例的耦合度
 
 
 
 
 
 
 
 
 
 
 
 
### 3. 面试题
 1. 命名路由的时候params和query分别可以和什么搭配使用
    1. query + name
    2. query + path
    3. params + name
 2. $router VS $route的区别
    1. $router
        1. 路由器对象
        2. 用来控制路由的跳转，更多使用的是其的方法
    2. $route
        1. 路由信息对象
        2. 包含当前路由的所有信息(path, query, params, meta)
 3. Vue.use() 干了什么事情
    1. 自定义Vue插件需要向外暴露对象或者是函数
    2. 如果向外暴露对象的话，对象中必须有install方法
    3. 如果向外暴露的是函数的话，那么该函数本身就是install方法
    4. 当Vue.use()的时候，会自动调用install方法，并且将Vue对象作为实参传入到install方法中
 
 
 
 
