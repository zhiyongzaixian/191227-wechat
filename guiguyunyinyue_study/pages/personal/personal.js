import request from '../../utils/request'
let startY = 0; // 起始坐标
let moveY = 0; // 移动实时坐标
let distance = 0; // 实时移动的距离


Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: '',
    coverTransition: '',
    userInfo: {}, // 用户信息
    recentPlayList: [], // 用户播放记录
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 判断本地是否有用户登录的信息数据
    let userInfo = wx.getStorageSync('userInfo');
    console.log(userInfo);
    if(userInfo){
      this.setData({
        userInfo: JSON.parse(userInfo)
      })
      
      
      // 获取用户播放 记录
      let recentPlayListData = await request(`/user/record?uid=${this.data.userInfo.userId}&type=0`)
      this.setData({
        recentPlayList: recentPlayListData.allData
      })
    }
  },
  
  handleTouchStart(event){
    this.setData({
      coverTransition: ''
    })
    // 获取手指的起始坐标
    startY = event.touches[0].clientY;
  },
  handleTouchMove(event){
    // 获取手指移动实时坐标
    moveY = event.touches[0].clientY;
    // 计算实时距离
    distance = moveY - startY;
    
    if(distance <= 0){
      return;
    }
  
    if(distance >= 80){
      distance = 80;
    }
    
    // 动态更新coverTransform的状态
    this.setData({
      coverTransform: `translateY(${distance}px)`
    })
  },
  handleTouchEnd(){
    this.setData({
      coverTransform: `translateY(0px)`,
      coverTransition: 'transform 1s linear'
    })
  },

  // 跳转至登录界面
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login'
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
