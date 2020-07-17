import request from '../../utils/request.js'


const state = {
	initData: '初始化测试数据',
	indexData: {}, // 主页数据
}



const mutations = {
	changeIndexData(state, indexData){
		state.indexData = indexData
	}
}


const actions = {
	async getIndexData({commit}){
		// 1. 发送请求获取异步数据
		let indexDataResult = await request('/getIndexData')
		// 2. 将异步数据交给mutation
		indexDataResult.code === 200 && commit('changeIndexData', indexDataResult.data)
	}
}


export default {
	state,
	mutations,
	actions,
}