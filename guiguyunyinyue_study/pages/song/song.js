import PubSub from 'pubsub-js'
import request from '../../utils/request'
// 获取全局app实例
let appInstance = getApp();


Page({
  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 标识音乐是否播放
    song: {}, // 歌曲信息的对象
    musicId: '', // 音乐id
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
    // console.log(songData);
    this.setData({
      song: songData.songs[0],
      musicId
    })
    
    // 修改窗口标题
    wx.setNavigationBarTitle({
      title: this.data.song.name
    })
    
    
    // 判断当前页面音乐是否在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === this.data.musicId){
      // 当前页面在播放
      this.setData({
        isPlay: true
      })
    }
  
  
    // 生成背景音乐实例
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    
    // 部署监听(播放，暂停，停止)
    this.backgroundAudioManager.onPlay(() => {
      console.log('play');
      this.setData({
        isPlay: true
      })
      // 修改全局的状态
      appInstance.globalData.isMusicPlay = true;
      appInstance.globalData.musicId = musicId;
    })
    
    
    this.backgroundAudioManager.onPause(() => {
      console.log('pause');
      this.setData({
        isPlay: false
      })
      // 修改全局的状态
      appInstance.globalData.isMusicPlay = false;
      // appInstance.globalData.musicId = musicId;
    })
    
    
    this.backgroundAudioManager.onStop(() => {
      console.log('stop');
      this.setData({
        isPlay: false
      })
  
      // this.backgroundAudioManager.stop();
      appInstance.globalData.isMusicPlay = false;
    })
  },
  
  // 音乐播放/暂停点击事件的回调
  musicPlay(){
    
    let isPlay = !this.data.isPlay;
    this.setData({
      isPlay
    })
    
    let {musicId} = this.data;
    
    this.musicControl(isPlay, musicId);
  },
  
  // 封装控制音乐播放/暂停的功能函数
  async musicControl(isPlay, musicId){
    if(isPlay){ // 音乐播放
      // 通过musicId获取音乐播放链接
      let musicLinkData = await request(`/song/url`, {id: musicId})
      let musicLink = musicLinkData.data[0].url;
      // sconsole.log(musicLink);
     
      this.backgroundAudioManager.src = musicLink;
      
      // 注意： title属性必填，否则无法播放
      this.backgroundAudioManager.title = this.data.song.name;
      
  
    }else { // 音乐暂停
      this.backgroundAudioManager.pause();
      
      // appInstance.globalData.isMusicPlay = false;
    }
  },
  
  // 点击切歌的回调
  handleSwitch(event){
    let type = event.currentTarget.id;
    console.log(type);
    
    // 发布消息给recommendSong
    PubSub.publish('switchType', type)
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
