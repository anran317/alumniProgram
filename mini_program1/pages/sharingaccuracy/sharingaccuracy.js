// pages/footprint-a/footprint-a.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value: 'town', name: '精确到区县'},
      {value: 'city', name: '精确到城市', checked: 'true'},
      {value: 'province', name: '精确到省份'},
      {value: 'country', name: '精确到国家'},
    ]
  }
})
