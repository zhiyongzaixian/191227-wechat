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
const NbaSchema = new mongoose.Schema({
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
const NBAStarsModel = mongoose.model('NBAStars', NbaSchema);


/*
* 通过model对象直接操作数据注意点：
*   1. 增的方法为create，区别于mongodb的insert方法
*   2. mongoose有Schema约束，添加的字段需要提前在Schema集合中声明
*
* */
// create = insert
(async function () {
  try{
    // 1. C create 增
    // let result = await NBAStarsModel.create({
    //   name: 'kobe',
    //   age: 43,
    //   hobby: ['篮球'],
    //   info: '湖人队球星'
    // })
    //
    // 2. R read 查 find() || findOne()
    // let result = await NBAStarsModel.find()
    // let result = await NBAStarsModel.find({name: 'wade'}) // 返回值是一个数组
    // let result = await NBAStarsModel.findOne({name: 'wade'}) // 返回值是一个对象
    
    
    // 3. U update updateOne() || updateMany()
    // let result = await NBAStarsModel.updateOne({name: 'curry'}, {$set: {age: 35}})
    
    // 4. 软删除
    // 动态添加的数据必须是Schema对象中声明过的
    // let result = await NBAStarsModel.updateMany({}, {$set: {deleted: false}})
    let result = await NBAStarsModel.updateOne({name: 'kobe'}, {$set: {deleted: true}})
    console.log(result);
  }catch (e) {
    console.log('保存数据失败');
    console.log(e);
  }
})()
