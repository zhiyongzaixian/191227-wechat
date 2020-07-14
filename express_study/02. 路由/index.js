// 路由
/*
* 路由分类：
*   1. 前端路由
*   2. 后端路由
*
*
*
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
