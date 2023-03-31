// pages/sharingtime/sharingtime.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    orders: [{
      date: {
        interval: '1分钟'
      },
      setting: {
        checked: true,
        value: 1
      }
    }, {
      date: {
        interval: '10分钟'
      },
      setting: {
        checked: false,
        value: 1
      }
    }, {
      date: {
        interval: '30分钟'
      },
      setting: {
        checked: false,
        value: 1
      }
    }, {
      date: {
        interval: '1小时'
      },
      setting: {
        checked: false,
        value: 1
      }
    }, {
      date: {
        interval: '1天'
      },
      setting: {
        checked: false,
        value: 1
      }
    }, {
      date: {
        interval: '1星期'
      },
      setting: {
        checked: false,
        value: 1
      }
    }, {
      date: {
        interval: '1'
      },
      setting: {
        checked: false,
        value: 1
      }
    }]
  },
 
  // 点击单选
  select: function (e) {
    let type = e.currentTarget.dataset.type;
    let currentIndex = e.currentTarget.dataset.index;
    let orders = this.data.orders;
    let total = 0;
    orders.map((item, index) => {
      if (index === currentIndex) {
        item[type].checked = !item[type].checked;
      }
    });
    orders.map((item, index) => {
      if (item[type].checked) {
        total = total + 1;
      }
    });
    let status = orders.length == total ? true : false;
    switch (type) {

      case 'setting':
        this.setData({
          settingAll: status
        });
        break;
    }
    this.setData({
      orders
    });
    // console.log(orders)
  }
})