let path = require('path');
let express = require('express');

let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();
// 1. 生成应用实例
const app = new express(); // app: application 代表整个应用


/*
express.static() 向外暴露静态资源
express.json() 处理post请求参数： application/json
express.urlencoded() 处理post请求参数: application/x-www-form-urlencoded 请求参数a=xxx&b=yyy

// 第三方中间件： connect-multiparty用来post请求的form-data参数
*
* */

// 全局使用
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// __dirname 绝对根路径
app.use(express.static(path.resolve(__dirname, 'public')))

// 局部中间件使用
app.post('/register', multipartMiddleware, (req, res) => {
  console.log(req.body);
  res.send('服务器返回的数据');
});






// 2. 绑定监听(设置当前项目的端口号)
app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址： http://localhost:3001');
  }
})
