import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList:[], // 视频导航标签数据
    navId: '', // 导航标识
    videoList: [], // 视频列表数据
    videoContext: '',
    videoId: '',
    triggered: false, // 标识下拉刷新是否被触发
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
      triggered: false,
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
    
    // 性能优化：一个页面一次只有一个video标签，其余的使用image代替, 在开发中遇到的问题及解决方案
    let vid = event.currentTarget.id;
    this.setData({
      videoId: vid
    })
  
    this.videoContext = wx.createVideoContext(vid);
    this.videoContext.play();
    
    
    // 没有性能优化之前，多个video同时播放问题
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
    // this.vid !== vid && this.videoContext && this.videoContext.stop();
   /*
    if(this.vid !== vid){
      if(this.videoContext){
        this.videoContext.stop();
      }
    }*/
    
    // this.vid = vid;
    // this.videoContext = wx.createVideoContext(vid);
    //
    // videoContext.stop();
  },
  
  // 自定义下拉刷新回调
  handleRefresher(){
    // console.log('scrollView ***  下拉刷新。。。');
    // 发送请求获取最新的数据
    
    this.getVideoList(this.data.navId)
  },
  
  // scrollView的触底回调
  handleToLower(){
    console.log('scrollView ****  触底事件');
    // 发请求获取数据 || 从原有大的数组中截取新的数据
    /*
    * 分页：
    *   1. 前端分页：一次性获取所有数据，处理数据的动作发生前端
    *   2. 后端分页：一次只能获取当前页数据，需要发送多次请求获取每一页的数据，根据参数的不同获取不同的数据
    *
    * */
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
    console.log('页面 ***  下拉刷新。。。');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面 ****  触底事件');
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('---onShareAppMessage---');
    return {
      title: '我是自定义转发的内容',
      page: '/pages/video/video',
      imageUrl: '/static/images/nvsheng.jpg'
    }
  }
})
