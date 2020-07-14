// 1. 链接数据库
require('./db/index');

// 2. 引入model对象
let StudentsModel = require('./collections/students');
let TeachersModel = require('./collections/teachers');


StudentsModel.create({
  name: '小明',
  age: 33,
  hobby: ['代码'],
  info: '程序开发工程师'
})

TeachersModel.create({
  name: '晓飞',
  age: 38,
  hobby: ['代码'],
  info: '程序开发工程师'
})
