// pages/sharing/sharing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
  jump1:function(){
    wx.navigateTo({
        url: '/pages/sharingaccuracy/sharingaccuracy',
        success: function(res){},
        fail: function(res) {},
        complete: function(res) {}
    }),
    
wx.navigateBack({
 
  delta: 1, // 回退前 delta(默认为1) 页面
  
  success: function (res) {},
  
  fail: function () {},
  
  complete: function () {}
  
  })
  },
  jump2:function(){
    wx.navigateTo({
        url: '/pages/sharingaccuracy/sharingaccuracy',
        success: function(res){},
        fail: function(res) {},
        complete: function(res) {}
    }),
    
wx.navigateBack({
 
  delta: 1, // 回退前 delta(默认为1) 页面
  
  success: function (res) {},
  
  fail: function () {},
  
  complete: function () {}
  
  })
  },
  jump3:function(){
    wx.navigateTo({
        url: '/pages/footprint/footprint',
        success: function(res){},
        fail: function(res) {},
        complete: function(res) {}
    }),
    
wx.navigateBack({
 
  delta: 1, // 回退前 delta(默认为1) 页面
  
  success: function (res) {},
  
  fail: function () {},
  
  complete: function () {}
  
  })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})