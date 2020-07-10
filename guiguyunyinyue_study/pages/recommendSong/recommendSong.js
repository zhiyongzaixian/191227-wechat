import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    month: '',
    day: '',
    recommendList: [], // 推荐列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })
    
    // 发请求获取recommendList数据
    let recommendListData = await request('/recommend/songs')
    console.log(recommendListData);
    
    this.setData({
      recommendList: recommendListData.recommend
    })
  },
  
  // 跳转至song页面的回调
  toSong(event){
    let {song, id} = event.currentTarget.dataset;
    console.log(song);
    
    // 路由传参： query---> url?key=value&key1=value1
    // 注意： url的长度是有限制的
    wx.navigateTo({
      url: '/pages/song/song?musicId=' + id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
