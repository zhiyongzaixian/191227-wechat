import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index.js'
import cart from './modules/cart.js'
/* 
 Vue扩展库：
		1. 向外暴露的有：对象 || 函数
		2. 如果是对象的话，该对象中必须有一个install方法，使用Vue.use()会自动调用该 对象的install方法
		3. 如果是函数的话，那么该函数就是install，使用Vue.use()会自动调用该函数
		4. install方法的第一个参数一定是Vue对象，Vue.use()在调用install方法的时候会注入第一个实参是Vue对象
 */
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		index,
		cart
	}
})

export default store;

