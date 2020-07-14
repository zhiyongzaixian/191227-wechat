const mongoose = require('mongoose');
const StudentsSchema = new mongoose.Schema({
  name: {
    type: String, // 类型
    required: true, // 必要性
    unique: true, // 唯一的
  },
  age: Number,
  sex: {
    type: Number,
    default: 1 // 男
  },
  // hobby: Array,
  hobby: [String], // 字符串类型的数组
  info: mongoose.SchemaTypes.Mixed, // 任意类型
  deleted: {
    type: Boolean,
    default: false, // 默认未被删除
  }
})


// 3. 创建集合 model 对象
const StudentsModel = mongoose.model('students', StudentsSchema);


// 向外暴露
module.exports = StudentsModel;
