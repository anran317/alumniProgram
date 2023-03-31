const app = getApp()

Page({
  data: {},
  onReady:function(){
  },

  handleTap: function(evt) {
    console.log(evt);
  },

  mpAlert(e){
    wx.showToast({
      title: 'Coming soon ...',
      icon: 'success',
      duration: 2000
    })
  },

  uploading:function(){
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData:{
            'user': 'test'
          },
          success: function(res){
            var data = res.data
            //do something
          }
        })
      }
    })
  },

  jump:function(){
    wx.navigateTo({
        url: '/pages/edit-mine/edit-mine',
        success: function(res){},
        fail: function() {},
        complete: function() {}
    })
  },

  scanCode(e){
    wx.scanCode({
        success (res) {
            console.log(res)
        }
    });
},
})
