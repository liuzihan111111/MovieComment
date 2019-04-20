
// 引入qs
// const qs = require('qs')



//index.js
//获取应用实例
const app = getApp()

const tools = require('../../utils/tools.js')

Page({
  data: {
    imgUrls: [
      '../../assets/images/lunbo1.jpg',
      '../../assets/images/lunbo2.jpg',
      '../../assets/images/lunbo3.jpg',
      '../../assets/images/lunbo4.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorDots:true
  },
  //事件处理函数
  navToPage(event){
   // console.log(event)
    const tag = event.currentTarget.dataset.tag
    if(tag ==='hot'){
      // 如果要跳转到tab上的页面，需要使用switchTab
      wx.switchTab({
        url: '../list/index',
      })
    }else {
      wx.navigateTo({
        url: '../logs/logs',
      })
      
    }
  },


  onLoad: function () {

    const obj = {name:'tom',age:16}

  //  console.log(qs.stringify(obj))


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
