/*
* 封装函数：
*   1. 功能点明确
*   2. 函数内部保留静态的数据
*   3. 将动态的数据抽取出来作为形参，由使用者根据场景不同动态传入实参
*
*
*
* 封装组件：
*   1. 功能点明确 || 呈现效果
*   2. UI组件 || js组件
*   3. 组件内部保留静态的数据
*   4. 将动态的数据抽取出来作为 props属性，由使用者根据场景不同动态以标签属性的形式导入
*   5. 封装良好的组件应该规定传入props数据的必要性还有数据类型 propsType
*   6. 示例： <Button type='danger'>
*
* */

// promise + async 用同步的流程表达异步的行为
import config from './config';
// 功能： 发请求
export default (url, data={}, method='GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method: method,
      header: {
        cookie: JSON.parse(wx.getStorageSync('cookies')).toString()
      },
      success: (res) => {
        // console.log(res.cookies);
        /*
        * 思路：
        *   1. 判断当前的请求是否是登录
        *     1) 如果是登录，获取res中的cookies保存至本地
        *     2) 如果不是登录请求，直接返回res.data
        * */
        if(data.isLogin){ // 登录请求
          wx.setStorage({
            key: 'cookies',
            data: JSON.stringify(res.cookies)
          })
        }
        resolve(res.data);
      },
      fail: (err) => {
        console.log('请求失败', err);
        reject(err)
      }
    })
  })
}
