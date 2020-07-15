// 路由
/*
* 路由分类：
*   1. 前端路由
*     1) 发送请求，不走网络传输层
*     2) 由对应的js库解析(vue-router, react-router-dom,wx.navigateTo...)
*     3) 应用： SPA
*   2. 后端路由
*     1) 发请求，走网络传输层
*     2) 由服务器端解析
*     3) 应用： 前后端交互
*   3. 路由参数
*     1) get: params(注册路由的时候声明占位符) || query(请求的时候url后跟查询字符串)
*     2) post: body(参数不体现在url中, 在请求体中，更加安全) || params || query
* */


// 引入
let express = require('express');

// 1. 生成应用实例
const app = new express(); // app: application 代表整个应用

// 3. 注册路由
// params参数
// app.get('/login/:username',  (req, res) => {
//   console.log('1111');
//   console.log(req.params);
//   res.end('login data');
// })

// query参数
app.get('/login',  (req, res) => {
  console.log('1111');
  console.log(req.query); // { username: 'curry' }
  
  console.log(req.params);
  res.end('login data');
})


// post请求  params参数
// app.post('/register/:username',  (req, res) => {
//   console.log(req.params);
//
//   res.end('register data');
// })


// post请求  query参数
// app.post('/register',  (req, res) => {
//   console.log(req.query);
//   res.end('register data');
// })


// Post请求通常将请求参数放置在请求体中 req.body
app.post('/register',  (req, res) => {
  console.log(req.body);
  res.end('register data');
})





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
