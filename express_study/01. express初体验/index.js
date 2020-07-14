// 引入
let express = require('express');

/*
* 1. 生成应用实例
* 2. 绑定监听(设置当前项目的端口号)
* 3. 注册路由
*   1. 参数： request, respone
*   2. request: 请求头信息对象
*   3. response:  响应头信息对象
* 4. 注意点：
*   1. 每次修改完服务器的内容应该重新启动服务器
* */

// 1. 生成应用实例
const app = new express(); // app: application 代表整个应用

// 3. 注册路由
app.get('/', (request, respone) => {
  console.log('1111');
  // 返回数据
  respone.end('success data');
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
