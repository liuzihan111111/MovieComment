// pages/list/index.js

const movies = require('../../sevices/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[],
    floorstatus: false
  },
  // 点击事件
  DetailPage(e){
    //console.log(e)
    //console.log(e.currentTarget.dataset.id)
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },

  // 监听滚动条坐标
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    // 控制滚动
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(movies)
    movies.getMovieHot((res)=>{
      console.log(res)
      this.setData ({
        movieList: res.data.ms,
        
      })
      console.log(this.movieList)
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