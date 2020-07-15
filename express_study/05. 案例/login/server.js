let express = require('express');
let cors = require('cors');

const app =  express();
// axios发送post请求默认的参数格式是 application/json
app.use(express.json())
app.use(cors())

// app.use((req, res, next) => {
//   res.set({
//     'Access-Control-Allow-Credentials': true, //允许后端发送cookie
//     'Access-Control-Allow-Origin':  '*', //任意域名都可以访问,或者基于我请求头里面的域
//     'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
//     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
//     'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
//   })
//
//   next();
// })
// 注册登录的路由
app.post('/login', (req, res) => {
  console.log(req.body);
  // 1. 获取请求参数
  let {username, password} = req.body; // 要求当前请求需要参数，且必须的字段为username, password
  // 2. 处理请求数据
  if(!username || username !== 'curry'){
    // 3. 返回响应数据
    res.send({
      code: 502,
      data: '用户名不正确'
    })
  }else if(password !== '123456'){
    // 3. 返回响应数据
    res.send({
      code: 502,
      data: '密码不正确'
    })
  }else {
    // 3. 返回响应数据
    res.send({
      code: 200,
      data: '登录成功'
    })
  }
  
  
});


app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址： http://localhost:3001');
  }
})
