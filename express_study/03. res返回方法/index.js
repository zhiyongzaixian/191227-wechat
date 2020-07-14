// 引入
let express = require('express');

// 1. 生成应用实例
const app = new express(); // app: application 代表整个应用



// query参数
app.get('/login',  (req, res) => {
  res.set({
    'content-type' : 'text/html;charset=utf-8'
  })
  res.end('登录成功');
  // res.send('登录成功');
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
