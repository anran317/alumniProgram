// js
Page({
    jump:function(){
        wx.redirectTo({
            url: '/pages/mine/mine',
            success: function(res){},
            fail: function() {},
            complete: function() {}
        })
    }
}
)