let mongoose = require('mongoose');

/*
* 1. 链接指定的数据库, 如果指定的数据库存在就链接，如果不存在就新建
* 2. 创建Schema对象，对集合数据进行约束
* 3. 创建集合对象
* 4. 创建文档对象
* 5. 将文档对象数据保存至指定集合的数据库中
*
* */

// 1. 链接指定的数据库
mongoose.connect('mongodb://localhost:27017/class1227_mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// 2. 创建Schema对象，对集合数据进行约束
const studentsSchema = new mongoose.Schema({
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
  info: mongoose.SchemaTypes.Mixed // 任意类型
})


// 3. 创建集合 model 对象
const StudentsModel = mongoose.model('students', studentsSchema);

// 4. 创建文档对象
const studentA = new StudentsModel({
  name: '岳云鹏',
  age: 33,
  hobby: ['相声'],
  info: '德云社相声演员'
});

// 5. 将文档对象数据保存至指定集合的数据库中
studentA.save()
  .then((res) => {
    console.log('保存数据成功');
  })
  .catch((err) => {
    console.log('保存数据失败');
    console.log(err);
  })
