// pages/detail/detail.js

const movies = require('../../sevices/api.js')
const date = require('../../utils/DateFormate.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail:'',
    time:'',
    isFold: true,
    actors:[]
  },
  // 文章下拉
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },
  // 视频播放
  VideoClick(e){
    const id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '../video/video?id=' + id,
    })
  },
  // 演员列表
  showAllActors(e){
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../actors/actor?id=' + id,
    })
  },
  // 图片列表
  showAllImage(e){
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../Image/image?id=' + id,
    })
  },

  // 影评
  showAllComment(e){
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../comments/comments?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log(options)
    const id=options.id
   // console.log(id)
    movies.getMovieDetail(id,(res) => {
      console.log(res)
      this.setData({
        movieDetail:res.data.data,
        time: date.DateFormate(res.data.data.basic.releaseDate),
        actors: res.data.data.basic.actors.slice(0,4)
      })
      wx.setNavigationBarTitle({
        title: res.data.data.basic.name
      })
      
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