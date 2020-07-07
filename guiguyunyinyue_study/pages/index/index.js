// pages/index/index.js
import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], // banner轮播图
    recommendList: [], // 推荐歌曲
    topList: [], // 排行榜数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取banner的数据
    let bannerListData = await request('/banner', {type: 2});
    this.setData({
      bannerList: bannerListData.banners
    })
    
    
    // 获取推荐歌曲的数据
    let recommendListData = await request('/personalized');
    this.setData({
      recommendList: recommendListData.result
    })
    
    // 获取排行榜数据
    /*
    * 需求：
    *   1. 根据idx取不同的数据
    *   2. idx的取值范围 0-4
    *   3. 请求地址： /top/list
    *
    * */
    
    let idx = 0;
    let resultArr = [];
    while (idx < 5){
      let result = await request('/top/list', {idx: idx++});
      // 对获取的进行过滤，
      /*
      * 1. splice： 对数组进行增删改查，会影响原数组
      * 2. slice： 截取并返回数组中指定的元素，不会影响原数组
      * 3. filter：对数组进行过滤，返回条件为true的元素，不会影响原数组
      * */
      let obj = {name: result.playlist.name, tracks: result.playlist.tracks.slice(0, 3)}
      resultArr.push(obj);
      
      // 每次发请求获取数据之后都会更新，页面内容内容的时机要更早，发送的请求次数多，有点像数据懒加载，适合板块内容多
      // this.setData({
      //   topList: resultArr
      // })
    }
  
    // 发送5次请求以后，统一更新页面，页面要么是白屏，要么一下全部显示， 不适合板块内容特别多。。。
    this.setData({
      topList: resultArr
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
