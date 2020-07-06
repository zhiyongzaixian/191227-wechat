// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'abc'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('--- onLoad 页面加载----');
    // 只会执行一次
    // debugger;
    // 通常在此发送ajax请求
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('--- onReady 页面初次渲染完成----');
    // 只会执行一次

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('--- onShow 页面显示----');
    // 会执行多次
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})