
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    orders: [{
      date: {
        interval: '浙江省杭州市'
      },
      setting: {
        checked: true,
        value: 1
      }
    }, {
      date: {
        interval: '上海市普陀区'
      },
      setting: {
        checked: false,
        value: 1
      }
    }, {
      date: {
        interval: '北京市朝阳区'
      },
      setting: {
        checked: false,
        value: 1
      }
    }, {
      date: {
        interval: '福建省福州市'
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