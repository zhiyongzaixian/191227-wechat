import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList:[], // 视频导航标签数据
    navId: '', // 导航标识
    videoList: [], // 视频列表数据
    videoContext: ''
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
    
    // 关闭消息提示
    wx.hideLoading();
    
    this.setData({
      videoList: videoListData.datas
    })
  },
  
  // 点击导航的回调
  changeNavId(event){
    this.setData({
      // navId:+event.currentTarget.id
      // navId: event.currentTarget.id*1
      navId: event.currentTarget.id>>>0, // 强制转换成number
      videoList: [], // 清空之前视频数
    })
    
    // 显示加载提示信息
    wx.showLoading({
      title: '正在加载'
    })
    
    this.getVideoList(this.data.navId);
    
  },
  
  // video播放/继续播放的回调
  handlePlay(event){
    /*
    * 思路：
    *   1. 点击新的video视频的时候关掉之前播放的视频
    *   2. 如何控制视频播放/停止？ wx.createVideoContext(videoId)
    *   3. 需要找到上一个video的上下文对象
    *
    * */
    let vid = event.currentTarget.id;
    /*if(!this.data.videoContext){
      let videoContext = wx.createVideoContext(vid);
      console.log(videoContext);
      this.setData({
        videoContext
      })
    }else {
      this.data.videoContext.stop();
      let videoContext = wx.createVideoContext(vid);
      this.setData({
        videoContext
      })
    }*/
    this.vid !== vid && this.videoContext && this.videoContext.stop();
   /*
    if(this.vid !== vid){
      if(this.videoContext){
        this.videoContext.stop();
      }
    }*/
    
    this.vid = vid;
    this.videoContext = wx.createVideoContext(vid);
  
    // videoContext.stop();
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
