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
