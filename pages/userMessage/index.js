// pages/userMessage/index.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name:'',
    mobile:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getUserMessages()
  },
  // 获取个人资料
  getUserMessages:function(){
    let _this = this;
    App._get('user/detail', {}, function (result) {
      _this.setData({
        user_name: result.data && result.data.userInfo ? result.data.userInfo.user_name : '暂无',
        mobile: result.data && result.data.userInfo ? result.data.userInfo.mobile : '暂无'
      });
    });
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

  },
  toModify:function(){
    wx.navigateTo({
      url: '/pages/userMessageModify/index'
    })
  }
})