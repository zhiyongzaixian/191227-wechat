require('./db/index');
let express = require('express');
let cors = require('cors');
let md5 = require('md5');

let StudentsModel = require('./collections/students');

const app =  express();
// axios发送post请求默认的参数格式是 application/json
app.use(express.json())
app.use(cors())
// 注册登录的路由

/*
* 注册逻辑分析：
*   1. 获取请求参数以后查询数据库，判断当前用户名是否已经被注册过
*   2. 如果没有注册过的话，将当前用户信息存到数据库中
*
*
* */
app.post('/register', async (req, res) => {
  let {username, password} = req.body;
  // 判断当前用户名是否已经被注册过
  try{
    // 查询数据库, 如果没有查询到指定的数据，返回的结果就是null
    let result = await StudentsModel.findOne({username})
    console.log(result, '查询结果');
    if(result){ // 该用户名已经能被注册过
      res.send({
        code: 502,
        data: '该用户已经被注册'
      });
    }else {
      // 当前用户可以注册
      await StudentsModel.create({
        username,
        password: md5(password)// 返回值是字符串
      })
      
      res.send({
        code: 200,
        data: '注册成功'
      });
      
    }
    
  }catch (e) {
    console.log(e);
    res.send({
      code: 502,
      data: '当前无法注册，请稍后再试'
    });
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
