import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList:[], // 视频导航标签数据
    navId: '', // 导航标识
    videoList: [], // 视频列表数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 验证用户是否登录
    let userInfo = wx.getStorageSync('userInfo');
    if(!userInfo){
      // 提升用户未登录，请先登录
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
      // 跳转至登录
      wx.redirectTo({
        url: '/pages/login/login'
      })
      return;
    }
    
    
    // 获取导航标签数据
    let videoGroupListData = await request('/video/group/list');
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    this.getVideoList(this.data.navId);
    
  },
  // 获取视频列表数据
  async getVideoList(navId){
    let videoListData = await request(`/video/group`, {id: navId});
    console.log(videoListData);
    this.setData({
      videoList: videoListData.datas
    })
  },
  
  changeNavId(event){
    this.setData({
      // navId:+event.currentTarget.id
      // navId: event.currentTarget.id*1
      navId: event.currentTarget.id>>>0 // 强制转换成number
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
