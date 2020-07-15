const mongoose = require('mongoose');
const StudentsSchema = new mongoose.Schema({
  username: {
    type: String, // 类型
    required: true, // 必要性
    unique: true, // 唯一的
  },
  password: String
})


// 3. 创建集合 model 对象
const StudentsModel = mongoose.model('students', StudentsSchema);


// 向外暴露
module.exports = StudentsModel;
