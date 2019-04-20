// pages/Image/image.js

const movies = require('../../sevices/api.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ListALL:[],
    ImageList:[],
    num:49,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    movies.getMovieImageList(id, (res) => {
      console.log(res)
      this.setData({
        ListALL: res.data.images,
        ImageList: res.data.images.splice(0,24)
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
    this.setData({
      num: this.data.num + 24,
      ImageList: this.data.ListALL.splice(0, this.data.num),
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})