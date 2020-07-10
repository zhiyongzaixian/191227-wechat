import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 标识音乐是否播放
    song: {}, // 歌曲信息的对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // options: 默认是空对象，用来接收路由跳转传参的参数
    // console.log(options.song); // 因为url长度的限制，被截取了部分出来
    let musicId = options.musicId;
    
    // 发请求获取音乐响应数据
    let songData = await request('/song/detail', {ids: musicId})
    console.log(songData);
    this.setData({
      song: songData.songs[0]
    })
  },
  
  // 音乐播放/暂停的回调
  musicPlay(){
    
    let isPlay = !this.data.isPlay;
    this.setData({
      isPlay
    })
    
    this.musicControl(isPlay);
  },
  
  // 封装控制音乐播放/暂停的功能函数
  musicControl(isPlay){
    if(isPlay){ // 音乐播放
    
    }else { // 音乐暂停
    
    }
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
