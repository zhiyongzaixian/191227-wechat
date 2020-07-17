let Koa = require('koa');
let KoaRouter = require('koa-router');


// 1. 生成应用实例
const app = new Koa();
// 2. 生成路由器
const router = new KoaRouter();
app
	.use(router.routes()) // 允许使用路由
	.use(router.allowedMethods()) // 允许使用路由方法
	
// 3. 注册路由
// express: req, res, next
// koa: ctx(req, res) next
router.get('/', (ctx, next) => {
	
	// 返回数据
	ctx.body = '服务器返回的测试数据';
});



// 主页数据接口
let indexData = require('./datas/index.json');
router.get('/getIndexData', (ctx, next) => {
	ctx.body = {
		code: 200,
		data: indexData
	};
});



// 分类页接口
let cateGoryData = require('./datas/categoryDatas.json');
router.get('/getCateGoryData', (ctx, next) => {
	ctx.body = {
		code: 200,
		data: cateGoryData
	};
});

// 2. 绑定监听
app.listen('3001', (err) => {
	if(err){
		console.log('服务器启动失败');
		console.log(err);
	}else {
		console.log('服务器启动成功');
		console.log('服务器地址： http://localhost:3001')
	}
})
