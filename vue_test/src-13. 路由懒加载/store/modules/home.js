const state = {
  initData: '初始化测试数据',
  personArr: []
}


/*
* 面试题：
*   1. mutation负责同步修改状态数据的，能不能异步修改
*     1) 可以异步修改
*     2) 如果异步修改的话会导致Vuex的调试工具失效，无法检测异步修改数据
*   2. 思考： 设计的时候为什么建议mutation同步修改状态数据，而新增action负责异步
*     1) Vuex的作用是给多个组件共享数据
*     2) 如果支持mutation异步修改数据，又因为异步的特性，会导致store对象中state数据发生错乱甚至是报错
*     3) 为了数据的安全
*   3. Vuex刷新页面，数据丢失问题
*
*
* */

const mutations = {
  // 同步修改
  changePersonArrMutation(state, personArr){
    state.personArr = personArr
    // sessionStorage.setItem('test', JSON.stringify(personArr))
  }
  
  // 异步修改，会导致调试工具失效
  // changePersonArrMutation(state){
  //   setTimeout(() => {
  //     const personArr = [
  //       {
  //         name: 'kobe'
  //       },
  //       {
  //         name: 'wade'
  //       }
  //     ]
  //     state.personArr = personArr
  //   }, 1000)
  // }
}

const actions = {

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
