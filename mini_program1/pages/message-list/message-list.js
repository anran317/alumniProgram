var app = getApp();
Page({
  data: { 
    btnWidth: 260,   //按钮的宽度单位
    startX: "",      //手指触摸开始滑动的位置
    list: [{         //展示的数据
      txtStyle: "",  //定义行数据向左偏移原始位置的距离
      txt: "陈皓【计算机科学与技术】",
    },
      {
        txtStyle: "",
        txt: "张三【统计】",
      },
      {
        txtStyle: "",
        txt: "李四【软件工程】",
      }]       
  },
  onLoad: function (options) {
    // 页面初始化
    this.initEleWidth();
  },
  mpAlert1(e){
    wx.showToast({
      title: '已同意',
      icon: 'success',
      duration: 2000
    })
  },
  mpAlert2(e){
    wx.showToast({
      title: '已拒绝',
      icon: 'success',
      duration: 2000
    })
  },
  touchS: function (e) {
    console.log(e.touches.length);
    if (e.touches.length == 1) { //触摸屏上只有一个触摸点
      this.setData({
        //设置触摸起始点水平方向位置
        //clientX:距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    if (e.touches.length == 1) { // 一个触摸点
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      //按钮
      var btnWidth = this.data.btnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，说明向右滑动，文本层位置不变
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px";
        if (disX >= btnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + btnWidth + "px";
        }      
      }
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      //设置该项向左偏移的样式,并消除其他项的偏移样式
      var list = this.data.list;
      for (var ix in list) {
        ix == index ? list[ix].txtStyle = txtStyle : list[ix].txtStyle = "";
      }
      //更新列表的状态
      this.setData({
        list: list
      });
    }
  },
  touchE: function (e) {
    if (e.changedTouches.length == 1) { //一个触摸点
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = this.data.startX - endX;
      var btnWidth = this.data.btnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > btnWidth / 2 ? "left:-" + btnWidth + "px" : "left:0px";
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      //设置偏移的样式
      var list = this.data.list;
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        list: list
      });
    }
  },
  //获取元素自适应后的实际宽度
  getEleWidth: function (w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error
    }
  },
  initEleWidth: function () {
    var btnWidth = this.getEleWidth(this.data.btnWidth);
    this.setData({
      btnWidth: btnWidth
    });
  },
  //点击删除按钮事件
  delItem: function (e) {
    var that = this;
    //获取列表中要删除项的下标
    var index = e.currentTarget.dataset.index;
    var list = that.data.list;
    wx.showModal({
      title: '提示',
      content: '是否确认删除',
      success(res) {
        if (res.confirm) {
          //移除列表中下标为index的项
          list.splice(index, 1);
          //更新列表的状态
          that.setData({
            list: list
          });
        }
      }
    })
   
  }
})