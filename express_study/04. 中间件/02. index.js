let express = require('express');

// 1. 生成应用实例
const app = new express(); // app: application 代表整个应用


// 全局中间键


app.get('/', (req, res, next) => {
  console.log('get()');
  res.send('get请求返回的数据');
  next();
});

app.use((req, res, next) => {
  console.log('11111');
  // res.send('服务器返回的内容11111');
  // next();
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
