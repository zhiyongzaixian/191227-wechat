let mongoose = require('mongoose');

// 1. 链接指定的数据库
mongoose.connect('mongodb://localhost:27017/1227_express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// 绑定事件，可以知晓链接库是否成功
mongoose.connection.once('open', (err) => {
  if(err){ // 错误优先机制
    console.log('链接数据库失败');
    console.log(err);
  }else {
    console.log('链接数据库成功');
  }
});
