// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js'); //bmap-wx.js文件存放路径
var wxMarkerData = []; 
Page({ 
    data: {
        BMap: null,
        searchKeyword: '',
        markers: [], 
        latitude: '', 
        longitude: '', 
        rgcData: {} 
    }, 
    onLoad: function() { 
        // 新建百度地图对象 
        this.data.BMap = new bmap.BMapWX({ 
            ak: 'UzYbGwa3Yv4FZDqL1MAe7eiBMIqCClVN' //百度地图密钥
        }); 
        this.toSearch("华东师范大学普陀校区第五宿舍")
    },
    handleInputChange: function (e) {
      this.data.searchKeyword = e.detail.value
    },
    search: function () {
        this.toSearch(this.data.searchKeyword)
    },
    toSearch: function (keyword) {
        let that = this;//重要，必须
        let fail = function(data) { 
            console.log(data)
        };
        let success = function(data) { 
            wxMarkerData = data.wxMarkerData; 
            that.setData({ 
                markers: wxMarkerData 
            }); 
            that.setData({ 
                latitude: wxMarkerData[0].latitude 
            }); 
            that.setData({ 
                longitude: wxMarkerData[0].longitude 
            }); 
        } 
        // 发起geocoding检索请求 
        that.data.BMap.geocoding({ 
            address: keyword, 
            fail: fail, 
            success: success, 
            iconPath: '/icons/avatar.jpg', 
            iconTapPath: '/icons/cat.jpg' 
        }); 
    }
})
