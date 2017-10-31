import React from 'react';
import css from './index.less';
import Main from './Main';
import Detail from './Detail';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import reqwest from 'reqwest';
import Second from './Second';
import Screen from './Screen';
import Story from './Story';
/* header */
import h1 from '../image/sec/header/1.jpg';
import h2 from '../image/sec/header/2.jpg';
import h3 from '../image/sec/header/3.jpg';
import h4 from '../image/sec/header/4.jpg';
import h5 from '../image/sec/header/5.jpg';
import h6 from '../image/sec/header/6.jpg';
import h7 from '../image/sec/header/7.jpg';
/* each cata items */
import l1 from '../image/sec/catalog/1/1.png';
import l2 from '../image/sec/catalog/1/2.png';
import l3 from '../image/sec/catalog/1/3.png';
import l4 from '../image/sec/catalog/1/4.png';
import l5 from '../image/sec/catalog/1/5.png';
import l6 from '../image/sec/catalog/1/6.png';
import l7 from '../image/sec/catalog/1/7.png';
import l8 from '../image/sec/catalog/1/8.png';
import l9 from '../image/sec/catalog/1/9.png';

import c1 from '../image/sec/catalog/2/1.png';
import c2 from '../image/sec/catalog/2/2.png';
import c3 from '../image/sec/catalog/2/3.png';
import c4 from '../image/sec/catalog/2/4.png';
import c5 from '../image/sec/catalog/2/5.png';
import c6 from '../image/sec/catalog/2/6.png';
import c7 from '../image/sec/catalog/2/7.png';
import c8 from '../image/sec/catalog/2/8.png';
import c9 from '../image/sec/catalog/2/9.png';


import p1 from '../image/sec/catalog/3/1.png';
import p2 from '../image/sec/catalog/3/2.png';
import p3 from '../image/sec/catalog/3/3.png';
import p4 from '../image/sec/catalog/3/4.png';
import p5 from '../image/sec/catalog/3/5.png';
import p6 from '../image/sec/catalog/3/6.png';
import p7 from '../image/sec/catalog/3/7.png';
import p8 from '../image/sec/catalog/3/8.png';
import p9 from '../image/sec/catalog/3/9.png';

import xx1 from '../image/sec/catalog/4/1.png';
import xx2 from '../image/sec/catalog/4/2.png';
import xx3 from '../image/sec/catalog/4/3.png';
import xx4 from '../image/sec/catalog/4/4.png';
import xx5 from '../image/sec/catalog/4/5.png';
import xx6 from '../image/sec/catalog/4/6.png';
import xx7 from '../image/sec/catalog/4/7.png';
import xx8 from '../image/sec/catalog/4/8.png';
import xx9 from '../image/sec/catalog/4/9.png';

import sw1 from '../image/sec/catalog/5/1.png';
import sw2 from '../image/sec/catalog/5/2.png';
import sw3 from '../image/sec/catalog/5/3.png';
import sw4 from '../image/sec/catalog/5/4.png';
import sw5 from '../image/sec/catalog/5/5.png';
import sw6 from '../image/sec/catalog/5/6.png';
import sw7 from '../image/sec/catalog/5/7.png';
import sw8 from '../image/sec/catalog/5/8.png';
import sw9 from '../image/sec/catalog/5/9.png';

import sc1 from '../image/sec/catalog/6/1.png';
import sc2 from '../image/sec/catalog/6/2.png';
import sc3 from '../image/sec/catalog/6/3.png';
import sc4 from '../image/sec/catalog/6/4.png';
import sc5 from '../image/sec/catalog/6/5.png';
import sc6 from '../image/sec/catalog/6/6.png';
import sc7 from '../image/sec/catalog/6/7.png';
import sc8 from '../image/sec/catalog/6/8.png';
import sc9 from '../image/sec/catalog/6/9.png';

import xp1 from '../image/sec/catalog/7/1.png';
import xp2 from '../image/sec/catalog/7/2.png';
import xp3 from '../image/sec/catalog/7/3.png';
import xp4 from '../image/sec/catalog/7/4.png';
import xp5 from '../image/sec/catalog/7/5.png';
import xp6 from '../image/sec/catalog/7/6.png';
import xp7 from '../image/sec/catalog/7/7.png';
import xp8 from '../image/sec/catalog/7/8.png';
import xp9 from '../image/sec/catalog/7/9.png';

const backToScreenInterval = 240000; //4分钟

let products = new Array(8);

const cataDatas = [
  {
    type: '拉杆箱',
    ids: ['551164061745', '545410345885', '555314905202', '543804919064', '557489349781', '548024946922', '44546724274', '44546724274', '553330888485'],
    header: h1,
    labels: ['冲上云霄系列2铝镁合金箱',
      '航天11号系列高精铝框箱',
      '无极系列无框PP箱',
      '爱尔兰竖琴系列拉丝防刮',
      '一体化拒水铝框',
      '时代新星系列磨砂防刮箱',
      '彩色瀑布系列3',
      '彩色瀑布系列1',
      '17寸登机铝框箱'],
    items: [
      [{sale: l1, price: '1899.00'},
        {sale: l2, price: '1899.00'},
        {sale: l3, price: '1899.00'}],
      [{sale: l4, price: '1899.00'},
        {sale: l5, price: '1899.00'},
        {sale: l6, price: '1899.00'}],
      [{sale: l7, price: '1899.00'},
        {sale: l8, price: '1899.00'},
        {sale: l9, price: '1899.00'}],
    ],
  },
  {
    type: '潮流女包',
    ids: ['556056797643', '556065853777', '556109934245', '556078145833', '557215253220', '551226135093', '536600745413', '559317498113', '559169336564'],
    header: h2,
    labels: ['母婴亲子系列妈咪包',
      '母婴亲子系列儿童包',
      '母婴亲子系列妈咪包',
      '母婴亲子系列妈咪包',
      '母婴亲子系列妈咪包',
      '花信年华系列拼色手提包',
      '可背可提两用校园风女包',
      '7色可选小背包',
      '超纤撞色拼接小背包'],
    items: [
      [{sale: c1, price: '1899.00'},
        {sale: c2, price: '1899.00'},
        {sale: c3, price: '1899.00'}],
      [{sale: c4, price: '1899.00'},
        {sale: c5, price: '1899.00'},
        {sale: c6, price: '1899.00'}],
      [{sale: c7, price: '1899.00'},
        {sale: c8, price: '1899.00'},
        {sale: c9, price: '1899.00'}],
    ],
  },
  {
    type: '品质男包',
    ids: ['557858175408', '557792653024', '557907763180', '557847318663', '557202857703', '557210089112', '557844678516', '547798698909', '527287256371'],
    header: h3,
    labels: ['轻奢皮质拼接拉杆搭档',
      '多功能真皮电脑双肩包',
      '男士真皮公文包',
      '可提可斜挎皮质拼接公文包',
      '安全系列防盗背包',
      '安全防盗系列小挎包',
      '皮质拼贴 科学收纳',
      '便收纳功能挎包',
      '一包多用 轻便小巧'],
    items: [
      [{sale: p1, price: '1899.00'},
        {sale: p2, price: '1899.00'},
        {sale: p3, price: '1899.00'}],
      [{sale: p4, price: '1899.00'},
        {sale: p5, price: '1899.00'},
        {sale: p6, price: '1899.00'}],
      [{sale: p7, price: '1899.00'},
        {sale: p8, price: '1899.00'},
        {sale: p9, price: '1899.00'}],
    ],
  },
  {
    type: '休闲双肩包',
    ids: ['551146509734', '551223783789', '556056797643', '545870950774', '556149163629', '535961659237', '550943645593', '557948685562', '527282393401'],
    header: h4,
    labels: ['加大版版手提肩背两用包',
      '标准版手提肩背两用包',
      '母婴亲子系列妈咪包',
      '柔软质感14寸电脑背包',
      '铝合金手把 三仓科学收纳',
      '大象图腾定制背包',
      '简约小巧大容量女包',
      '花卉系列 斜纹背包',
      '花色系列A字包'],
    items: [
      [{sale: xx1, price: '1899.00'},
        {sale: xx2, price: '1899.00'},
        {sale: xx3, price: '1899.00'}],
      [{sale: xx4, price: '1899.00'},
        {sale: xx5, price: '1899.00'},
        {sale: xx6, price: '1899.00'}],
      [{sale: xx7, price: '1899.00'},
        {sale: xx8, price: '1899.00'},
        {sale: xx9, price: '1899.00'}],
    ],
  },
  {
    type: '商务双肩包',
    ids: ['557858175408', '555258221706', '557202857703', '557249306531', '45258538832', '555270243673', '536916770723', '555143796392', '555240474431'],
    header: h5,
    labels: ['真皮拼接14寸电脑包',
      '辑盗者系列防盗背包',
      '安全系列防盗背包',
      '简约小巧防盗小背包',
      '多隔层拉杆搭档轻商务包',
      '可背可提三用电脑包',
      '三层分区 金属手提',
      '轻奢超纤拼接双肩包',
      '超纤拼接金属手提背包'],
    items: [
      [{sale: sw1, price: '1899.00'},
        {sale: sw2, price: '1899.00'},
        {sale: sw3, price: '1899.00'}],
      [{sale: sw4, price: '1899.00'},
        {sale: sw5, price: '1899.00'},
        {sale: sw6, price: '1899.00'}],
      [{sale: sw7, price: '1899.00'},
        {sale: sw8, price: '1899.00'},
        {sale: sw9, price: '1899.00'}],
    ],
  },
  {
    type: '商场同款',
    ids: ['545410345885', '545410221358', '548024946922', '545881367997', '543804919064', '557489349781', '547823631068', '545818248442', '554465516415'],
    header: h6,
    labels: ['航天11号系列高精铝框箱',
      '海浪系列PC箱',
      '时代新星系列磨砂防刮箱',
      '全密闭细铝框防泼水',
      '爱尔兰竖琴系列拉丝防刮',
      '一体化拒水铝框',
      '金属手提简约商务',
      '缓震透气多功能背包',
      '渐进式收纳斜挎包'],
    items: [
      [{sale: sc1, price: '1899.00'},
        {sale: sc2, price: '1899.00'},
        {sale: sc3, price: '1899.00'}],
      [{sale: sc4, price: '1899.00'},
        {sale: sc5, price: '1899.00'},
        {sale: sc6, price: '1899.00'}],
      [{sale: sc7, price: '1899.00'},
        {sale: sc8, price: '1899.00'},
        {sale: sc9, price: '1899.00'}],
    ],
  },
  {
    type: '新品上市',
    ids: ['555314905202', '551164061745', '557489349781', '557844897868', '557747949803', '557841746119', '556498307176', '557168772844', '555765209831'],
    header: h7,
    labels: ['无极系列无框PP箱',
      '冲上云霄系列2铝镁合金箱',
      '一体化拒水铝框',
      '4开口设计真皮背包',
      '皮质拼贴轻盈背负',
      '皮质拼贴 可背可提两用包',
      '减负儿童书包',
      '两用U型枕',
      '便携式手提旅行收纳袋'],
    items: [
      [{sale: xp1, price: '1899.00'},
        {sale: xp2, price: '1899.00'},
        {sale: xp3, price: '1899.00'}],
      [{sale: xp4, price: '1899.00'},
        {sale: xp5, price: '1899.00'},
        {sale: xp6, price: '1899.00'}],
      [{sale: xp7, price: '1899.00'},
        {sale: xp8, price: '1899.00'},
        {sale: xp9, price: '1899.00'}],
    ],
  },
];

const base = 'http://cloudbuy.ews.m.jaeapp.com/api/fetch/';
const base5 = 'http://cloudbuy.ews.m.jaeapp.com/api/fetch5/'; //另一套接口


const buriedPointUrl = 'http://cloudbuy.ews.m.jaeapp.com/api/datatrack/';

let buriedParams = {
  'accessToken': '6201512b10199e723995ZZ3ba7891270abbeda8ffac28fb287745076',
  'action': '触摸',
  'start_time': '',
  'end_time': '',
  'device_id': '74EFBAFB29', // 设备id 内屏 32402BA137 ,男屏 C66D5A7CD5 女屏 74EFBAFB29
  'store_id': '177259234',
  'item_id': ''
};

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkId: -1,  //index in single catalog
      goAhead: 'screen',
      products: [],
      variety: -1, //index with each catalog, value ranged in  [0-6, 7]
      mainData: null,  //get after did mount
    };
    this.back = this.back.bind(this);
    this.go = this.go.bind(this);
    this.goDiffCataSecond = this.goDiffCataSecond.bind(this);
    this.goDetail = this.goDetail.bind(this);
    this.restart = this.restart.bind(this);
    this.dataLoad = this.dataLoad.bind(this);
    this.dataLoad5 = this.dataLoad5.bind(this);
    this.getTime = this.getTime.bind(this);
    this.buriedPoint = this.buriedPoint.bind(this);
    this.refreshTouchDelay = this.refreshTouchDelay.bind(this);
    this.reGoScreen = this.reGoScreen.bind(this);
    this.goStory = this.goStory.bind(this);
  }

  dataLoad(productList, index) {
    const url = base + productList[index].join(','); // 每一个种类的ID凭借
    reqwest({
      url: url,
      type: 'jsonp',
      method: 'get',
      success: (data) => {
        products[index] = productList[index].map((item) => {
          let obj = {};
          obj.itemId = item;
          let oldObj = data[`item_${item}`];
          obj.productImage = oldObj.images;
          obj.subPrice = oldObj.subPrice;
          obj.title = oldObj.title;
          let skus = [];
          let skuSize = [];
          oldObj.skuProps.map((sku) => {
            if (sku.name === '尺寸' || sku.name === '包袋大小') {
              skuSize = sku.values;
            } else if (sku.name === '颜色分类') {
              skus = sku.values;
            }
          });
          obj.skuSize = skuSize.map((value) => {
            return value.name;
          });
          if (obj.skuSize.length === 0) {
            obj.skus = skus.map(sku => {
              let colorNumber = sku.vid;
              let result = null;
              oldObj.skusMapKeys.map((itemx) => {
                if (itemx.propPath.indexOf(colorNumber) > -1) {
                  let skuId = itemx.skuId;
                  //console.log(oldObj.skusMapValues[skuId]);
                  //oldObj.skusMapValues[skuId].subPrice ? '' : console.log('itemID is:', item);
                  let prize;
                  if (oldObj.skusMapValues[skuId].subPrice) {
                    prize = oldObj.skusMapValues[skuId].subPrice.priceMoney;
                    //console.log('sub', item);
                  } else {
                    prize = oldObj.skusMapValues[skuId].price.priceMoney;
                    //console.log('price', item);
                  }

                  result = {skuId, prize};
                }
              });
              return result;
            });
          } else {
            obj.skus = skus.map((sku) => {
              let colorNumber = sku.vid;
              return skuSize.map((size) => {
                let sizeNumber = size.vid;
                let result = null;
                oldObj.skusMapKeys.map((itemx) => {
                  if (itemx.propPath.indexOf(colorNumber) > -1 && itemx.propPath.indexOf(sizeNumber) > -1) {
                    let skuId = itemx.skuId;
                    let prize;
                    if (oldObj.skusMapValues[skuId].subPrice) {
                      prize = oldObj.skusMapValues[skuId].subPrice.priceMoney;
                      //console.log('sub', item);
                    } else {
                      prize = oldObj.skusMapValues[skuId].price.priceMoney;
                      //console.log('price', item);
                    }
                    result = {skuId, prize};
                  }
                });
                return result;
              });
            });
          }
          // obj.skuSize = obj.skuSize.length === 0 ? ['默认尺寸'] : obj.skuSize;
          obj.skuImage = skus.map((value) => {
            return value.image;
          });
          // obj.skuImage = obj.skuImage.length === 0 ? ['默认颜色'] : obj.skuImage;


          return obj;
        });
        console.log(`load ${index} ready`);
        console.log('----------------------');
        this.setState({
          products: products, // 解析完后的数据
        });
      },
      error: (data) => {
      }
    });
  }

  dataLoad5(productList, index) {
    const url = base5 + productList[index].join(','); // 每一个种类的ID凭借
    reqwest({
      url: url,
      type: 'jsonp',
      method: 'get',
      success: (data) => {
        products[index] = productList[index].map((item) => {
          let obj = {};
          obj.itemId = item;
          const oldObj = data[`item_${item}`];
          obj.productImage = oldObj.images;
          obj.subPrice = oldObj.subPrice;
          obj.title = oldObj.title;
          let skus = [];
          let skuSize = [];
          oldObj.skuProps.map((sku) => {
            if (sku.propName === '尺寸' || sku.propName === '包袋大小') {
              skuSize = sku.values;
            } else if (sku.propName === '颜色分类') {
              skus = sku.values;
            }
          });
          obj.skuSize = skuSize.map((value) => {
            return value.name;
          });

          if (obj.skuSize.length === 0) {
            obj.skus = skus.map(sku => {
              let colorNumber = sku.valueId;
              let result = null;
              oldObj.skusMapKeys.map((itemx) => {
                if (itemx.propPath.indexOf(colorNumber) > -1) {
                  let skuId = itemx.skuId;
                  let prize = oldObj.skusMapValues[skuId].priceUnits[0].price; //?
                  // oldObj.skusMapValues[skuId].subPrice.priceMoney
                  // : oldObj.skusMapValues[skuId].price.priceMoney;
                  result = {skuId, prize};
                }
              });
              return result;
            });
          } else {
            obj.skus = skus.map((sku) => {
              let colorNumber = sku.valueId;
              return skuSize.map((size) => {
                let sizeNumber = size.valueId;
                let result = null;
                oldObj.skusMapKeys.map((itemx) => {
                  if (itemx.propPath.indexOf(colorNumber) > -1 && itemx.propPath.indexOf(sizeNumber) > -1) {
                    let skuId = itemx.skuId;
                    // let prize = oldObj.skusMapValues[skuId].subPrice ?
                    //   oldObj.skusMapValues[skuId].subPrice.priceMoney
                    //   : oldObj.skusMapValues[skuId].price.priceMoney;

                    let prize = oldObj.skusMapValues[skuId].priceUnits[0].price;
                    result = {skuId, prize};
                  }
                });
                return result;
              });
            });
          }
          obj.skuImage = skus;
          return obj;
        });

        this.setState({
          products: products
        });
        console.log(products);
        console.log('load ready');
        console.log('----------------------');
      },
      error: (data) => {
      }
    });
  }

  componentWillMount() {
    let main1 = [
      '557489349781',
      '555314905202',
      '551164061745',
      '545410345885',
      '557489349781',
      '44546724274',
      '536945453736',
      '551009959499',
      '558484444589',
      '555650445165',
      '556440998984',
      '556056797643'];

    let main2 = [
      '557489349781',
      '555314905202',
      '551164061745',
      '545410345885',
      '557489349781',
      '44546724274',
      '523225143978',
      '556441720843',
      '536916770723',
      '555258221706',
      '557899207466',
      '557841746119'];

    let items = ['551164061745', '545410345885', '555314905202', '543804919064',
      '557489349781', '548024946922', '44546724274', '44546724274', '553330888485'];
    // 潮流
    let cl = ['556056797643', '556065853777', '556109934245', '556078145833',
      '557215253220', '551226135093', '536600745413', '559317498113', '559169336564'];
    // 品质男包
    let nb = ['557858175408', '557792653024', '557907763180', '557847318663', '557202857703', '557210089112',
      '557844678516', '547798698909', '527287256371'];
    // 休闲双肩包
    let xx = ['551146509734', '551223783789', '556056797643', '545870950774', '556149163629', '535961659237', '550943645593', '557948685562', '527282393401'];
    // 商务
    let sw = ['557858175408', '555258221706', '557202857703', '557249306531', '45258538832', '555270243673', '536916770723', '555143796392', '555240474431'];
    // 商场同款
    let tk = ['545410345885', '545410221358', '548024946922', '545881367997', '543804919064', '557489349781', '547823631068', '545818248442', '554465516415'];
    // 新品上市
    let xp = ['555314905202', '551164061745', '557489349781', '557844897868', '557747949803', '557841746119', '556498307176', '557168772844', '555765209831'];
    const productList = [items, cl, nb, xx, sw, tk, xp, main1, main2];
    let itemsUrl = items.join(',') + ',' + cl.join(',') + ',' + nb.join(',') + ',' + xx.join(',') + ',' +
      sw.join(',') + ',' + tk.join(',') + ',' + xp.join(',') + ',' + main1.join(',') + ',' + main2.join(',');
    // console.log(itemsUrl);
    // const base = 'http://cloudbuy.ews.m.jaeapp.com/api/fetch/';
    const url = base + itemsUrl;
    /*reqwest({
     url: url,
     type: 'jsonp',
     method: 'get',
     success: (data) => {
     console.log(JSON.stringify(data));
     products = productList.map((varity) => {
     return varity.map((item) => {
     let obj = {};
     obj.itemId = item;
     let oldObj = data[`item_${item}`];
     obj.productImage = oldObj.images;
     obj.subPrice = oldObj.subPrice;
     obj.title = oldObj.title;
     let skus = [];
     let skuSize = [];
     oldObj.skuProps.map((sku) => {
     if (sku.name === '尺寸' || sku.name === '包袋大小') {
     skuSize = sku.values;
     } else if (sku.name === '颜色分类') {
     skus = sku.values;
     }
     });
     obj.skuSize = skuSize.map((value) => {
     return value.name;
     });
     if (obj.skuSize.length === 0) {
     obj.skus = skus.map(sku => {
     let colorNumber = sku.vid;
     let result = null;
     oldObj.skusMapKeys.map((itemx) => {
     if (itemx.propPath.indexOf(colorNumber) > -1) {
     let skuId = itemx.skuId;
     let prize = oldObj.skusMapValues[skuId].price.priceMoney;
     result = {skuId, prize};
     }
     });
     return result;
     });
     } else {
     obj.skus = skus.map((sku) => {
     let colorNumber = sku.vid;
     return skuSize.map((size) => {
     let sizeNumber = size.vid;
     let result = null;
     oldObj.skusMapKeys.map((itemx) => {
     if (itemx.propPath.indexOf(colorNumber) > -1 && itemx.propPath.indexOf(sizeNumber) > -1) {
     let skuId = itemx.skuId;
     let prize = oldObj.skusMapValues[skuId].price.priceMoney;
     result = {skuId, prize};
     }
     });
     return result;
     });
     });
     }
     obj.skuSize = obj.skuSize.length === 0 ? ['默认尺寸'] : obj.skuSize;
     obj.skuImage = skus.map((value) => {
     return value.image;
     });
     obj.skuImage = obj.skuImage.length === 0 ? ['默认颜色'] : obj.skuImage;


     return obj;
     });
     });
     console.log('load ready');
     this.setState({
     products: products
     });
     },
     error: (data) => {
     }
     });*/
    /** test
     let data = {"item_556078145833":{"itemid":"556078145833","title":"爱华仕女包大容量多功能母婴袋独立奶瓶袋外出手拎斜挎妈咪包","price":"579","subPrice":"299","images":["http://img.alicdn.com/imgextra/i1/287745076/TB28ZGAlzqhSKJjSspnXXc79XXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2YJZ_bj7jyKJjy1XaXXblnFXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2HWRbbE.iyKJjy1XbXXc4cXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2o45ScNAlyKJjSZFyXXbm_XXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2UvISbgojyKJjy0FaXXakspXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3437109100021","propPath":"1627207:87764638"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"2"},"3437109100021":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"2"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"87764638","name":"黄色小象","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2o4INbo3iyKJjy1zeXXbxZFXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_557847318663":{"itemid":"557847318663","title":"爱华仕公文包男 商务手提包女时尚职业单肩包斜挎包男士包包3091","price":"1129","subPrice":"699","images":["http://img.alicdn.com/imgextra/i3/287745076/TB22CSIlqigSKJjSsppXXabnpXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2fUU2bo3IL1JjSZFMXXajrFXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2oKLIa.l7MKJjSZFDXXaOEpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB25JAZbEcKL1JjSZFzXXcfJXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB29akqaBUSMeJjSszeXXcKgpXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3627315295401","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"5"},"3627315295401":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"5"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2OSceaPJTMKJjSZFPXXbHUFXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_555143796392":{"itemid":"555143796392","title":"爱华仕双肩包男大容量时尚 商务电脑背包女14寸旅行书包 黑色4359","price":"599","subPrice":"299","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2r1fOauj85uJjSZFuXXcwyFXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2Sy4AwStkpuFjy0FhXXXQzFXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2aKTAwMJlpuFjSspjXXcT.pXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2KCnKwG8lpuFjy0FpXXaGrpXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2CssBwMxlpuFjy0FoXXa.lXXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3590639819316","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"47"},"3590639819316":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"47"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2ToRgbYdvt1JjSZFuXXXG0FXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_556109934245":{"itemid":"556109934245","title":"爱华仕外出大容量双肩包多功能妈咪包时尚母婴背包小号便携拎包","price":"679","subPrice":"399","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2ry_skLNNTKJjSspfXXbXIFXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2HNBmcD3myKJjSZFCXXbXxXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2JwRsbAUOyuJjy1XdXXXlkXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB22JgfbXgkyKJjSspfXXcj1XXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2B_lFcA7myKJjSZFkXXa3vVXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3602645275390","propPath":"1627207:87764638"}],"skusMapValues":{"0":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"4"},"3602645275390":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"4"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"87764638","name":"黄色小象","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2L2hocDMlyKJjSZFFXXalVFXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_556056797643":{"itemid":"556056797643","title":"爱华仕妈咪包多功能大容量双肩包外出包母婴包时尚妈咪背包手提","price":"579","subPrice":"299","images":["http://img.alicdn.com/imgextra/i4/287745076/TB24b5Jlp9gSKJjSspbXXbeNXXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2RMqsXROBJuJjy1XdXXXIXVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB25Lpfah5GJuJjSZFrXXcDYXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2asJfahOGJuJjSZFhXXav4VXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB21WldakiHJuJjSZFjXXcGvXXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3436824388362","propPath":"1627207:8583622"},{"skuId":"3436824388363","propPath":"1627207:75333506"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"30"},"3436824388362":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"17"},"3436824388363":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"13"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"8583622","name":"绿色花","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2I.ImXCv7J1JjSZFpXXaXzpXa_!!287745076.jpg","sortOrder":"0"},{"vid":"75333506","name":"桔粉色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2lO_0XyfmJKJjy0FcXXbmeFXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_555765209831":{"itemid":"555765209831","title":"爱华仕旅行收纳袋换洗衣物整理袋多隔层印花小象收纳包旅游内衣袋","price":"139","subPrice":"99","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2h8ZoaTIlyKJjSZFMXXXvVXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2_tcgaJMnyKJjSZPhXXaeZVXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2IA3ragwjyKJjy1zdXXbgZpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2jh3raXokyKJjy1zbXXXZfVXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2itclaHAlyKJjSZFwXXXtqpXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3459066273626","propPath":"1627207:80882"},{"skuId":"3459066273625","propPath":"1627207:28329"}],"skusMapValues":{"0":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"7"},"3459066273626":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"4"},"3459066273625":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"3"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"80882","name":"粉色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2aHOGXEFWMKJjSZFvXXaenFXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28329","name":"花色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2gDHvX.QIL1JjSZFhXXaDZFXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_557747949803":{"itemid":"557747949803","title":"爱华仕商务背包男士 多功能电脑包双肩14寸出差双肩包女潮流 4387","price":"1239","subPrice":"699","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2IaaGlzuhSKJjSspaXXXFgFXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB2WC5BaEl7MKJjSZFDXXaOEpXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2cUUlbKALL1JjSZFjXXasqXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2quwxbUUIL1JjSZFrXXb3xFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2u.PKbi0TMKJjSZFNXXa_1FXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3625975318765","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"6"},"3625975318765":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"6"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB20Zjpa93PL1JjSZPcXXcQgpXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_556065853777":{"itemid":"556065853777","title":"爱华仕妈咪包大容量双肩包外出包母婴包时尚妈咪背包可手提手拎包","price":"299","subPrice":"159","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2FXGcXYH8F1JjSspfXXarnXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2X8ccbgojyKJjy0FaXXakspXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2KyRcbuIPyuJjSspcXXXiApXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2uKxCcA7myKJjSZFgXXcT9XXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2pPpycrAlyKJjSZFwXXXtqpXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3602627383964","propPath":"1627207:1537153898"}],"skusMapValues":{"0":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"18"},"3602627383964":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"18"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"1537153898","name":"桔粉色【儿童款】","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2VNOEX0mgF1Jjy0FaXXX5jpXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_557907763180":{"itemid":"557907763180","title":"爱华仕男士公文包软皮 商务单肩斜挎包女出差手提包时尚黑色7046","price":"999","subPrice":"659","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2J.EOpwoQMeJjy0FoXXcShVXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2G1z3aUFWMKJjSZFvXXaenFXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB28rEDbUcKL1JjSZFzXXcfJXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2tQZtbUQIL1JjSZFhXXaDZFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2RV1SaUgQMeJjy0FfXXbddXXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3626701110965","propPath":"1627207:28341;14067173:3226348"}],"skusMapValues":{"0":{"price":{"priceMoney":"65900","priceText":"659","showTitle":"false","sugProm":"false"},"quantity":"6"},"3626701110965":{"price":{"priceMoney":"65900","priceText":"659","showTitle":"false","sugProm":"false"},"quantity":"6"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2KfMpbm3PL1JjSZPcXXcQgpXa_!!287745076.jpg","sortOrder":"0"}]},{"pid":"14067173","name":"包袋大小","values":[{"vid":"3226348","name":"大","sortOrder":"1"}]}]},"item_557792653024":{"itemid":"557792653024","title":"爱华仕商务背包男士 多功能软皮电脑包女双肩软皮出差旅行包4390","price":"1239","subPrice":"759","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2mhZepwMPMeJjy1XbXXcwxVXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2AzrwaO0TMKJjSZFNXXa_1FXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB21fr3bx3IL1JjSZPfXXcrUVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2Y_LWbEsIL1JjSZPiXXXKmpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2YILma50TMKJjSZFNXXa_1FXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3627206531960","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"75900","priceText":"759","sugProm":"false","showTitle":"false"},"quantity":"6"},"3627206531960":{"price":{"priceMoney":"75900","priceText":"759","sugProm":"false","showTitle":"false"},"quantity":"6"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","sortOrder":"0"}]}]},"item_557858175408":{"itemid":"557858175408","title":"爱华仕商务背包双肩包男出差多功能电脑包双肩女潮流14寸 4388","price":"1119","subPrice":"699","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2IjaAlqmgSKJjSspiXXXyJFXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2bw8bdlUSMeJjSszcXXbnwVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2LZvSbBcHL1JjSZJiXXcKcpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2mgrUbywIL1JjSZFsXXcXFFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2_drSbDwKL1JjSZFgXXb6aVXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3626596811360","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"4"},"3626596811360":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"4"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2K.fTa3kLL1JjSZFpXXa7nFXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_557844897868":{"itemid":"557844897868","title":"爱华仕商务背包男士 翻盖背包女多功能平板电脑包双肩皮革4386","price":"1239","subPrice":"759","images":["http://img.alicdn.com/imgextra/i1/287745076/TB209wOpwoQMeJjy0FoXXcShVXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2fuZ5a50TMKJjSZFNXXa_1FXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2p5U8aDZRMeJjSspkXXXGpXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2X3A6aBUSMeJjy1zkXXaWmpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2jOZ8aDZRMeJjSspkXXXGpXXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3462104256613","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"75900","priceText":"759","showTitle":"false","sugProm":"false"},"quantity":"6"},"3462104256613":{"price":{"priceMoney":"75900","priceText":"759","showTitle":"false","sugProm":"false"},"quantity":"6"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2jXdEbS3PL1JjSZFxXXcBBVXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_555240474431":{"itemid":"555240474431","title":"爱华仕双肩包男商务休闲背包男大学生书包 双肩电脑背包女14寸","price":"599","subPrice":"239","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2Z6SWlWigSKJjSsppXXabnpXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2nt8wwHtlpuFjSspfXXXLUpXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2N6g4BipnpuFjSZFkXXc4ZpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2cbXgBC8mpuFjSZFMXXaxpVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB23bgPBd0opuFjSZFxXXaDNVXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3589893530789","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"3000","priceText":"30","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"23900","priceText":"239","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"542"},"3589893530789":{"price":{"priceMoney":"3000","priceText":"30","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"23900","priceText":"239","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"542"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2c5zfvdhvOuFjSZFBXXcZgFXa_!!287745076.png","sortOrder":"0"}]}]},"item_536945453736":{"itemid":"536945453736","title":"变色龙 爱华仕拉杆箱男20寸 旅行箱女行李箱万向轮25寸密码箱包","price":"999-1199","subPrice":"399-499","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2H7TzkLBNTKJjy1zdXXaScpXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2m7herG8lpuFjy0FpXXaGrpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2Sq67eyRnpuFjSZFCXXX2DXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2fdRreCqJ.eBjy1zbXXbx8FXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2d07AnrsTMeJjy1zcXXXAgXXa_!!287745076.png"],"skusMapKeys":[{"skuId":"3420370168680","propPath":"21433:32102;1627207:28329"},{"skuId":"3421033057025","propPath":"21433:21373;1627207:28329"},{"skuId":"3420370168681","propPath":"21433:32102;1627207:80557"},{"skuId":"3421033057026","propPath":"21433:21373;1627207:80557"},{"skuId":"3420370168679","propPath":"21433:32102;1627207:21237631"},{"skuId":"3421033057024","propPath":"21433:21373;1627207:21237631"}],"skusMapValues":{"0":{"price":{"priceMoney":"39900","priceText":"399-499","showTitle":"false","sugProm":"false"},"quantity":"1272"},"3421033057025":{"price":{"priceMoney":"49900","priceText":"499","showTitle":"false","sugProm":"false"},"quantity":"212"},"3421033057024":{"price":{"priceMoney":"49900","priceText":"499","showTitle":"false","sugProm":"false"},"quantity":"161"},"3420370168680":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"264"},"3420370168681":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"314"},"3421033057026":{"price":{"priceMoney":"49900","priceText":"499","showTitle":"false","sugProm":"false"},"quantity":"142"},"3420370168679":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"179"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32102","name":"20寸","sortOrder":"0"},{"vid":"21373","name":"25寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"28329","name":"紫色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB23Jjof9vHfKJjSZFPXXbttpXa_!!287745076.jpg","sortOrder":"1"},{"vid":"80557","name":"墨绿色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2CHYtztBopuFjSZPcXXc9EpXa_!!287745076.jpg","sortOrder":"3"},{"vid":"21237631","name":"蓝紫色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2AbiCwR8lpuFjSspaXXXJKpXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_556498307176":{"itemid":"556498307176","title":"爱华仕减负儿童书包双肩包男女童6-12周岁学生收纳背包1-3-5年级","price":"559","subPrice":"299","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2KTOFlzuhSKJjSspaXXXFgFXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2sCqxedAmyKJjSZFGXXb.fFXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2AJHMbhf9F1JjSZFDXXXyUpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2T9vHbhr9F1JjSZPfXXawbFXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2hcxaaEafF1Jjy1XbXXaYiXXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3606788890485","propPath":"1627207:3829588"},{"skuId":"3606788890486","propPath":"1627207:19145035"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"31"},"3606788890485":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"15"},"3606788890486":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"16"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"3829588","name":"蓝色格子","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2ZYO1ehwlyKJjSZFNXXcOlpXa_!!287745076.jpg","sortOrder":"0"},{"vid":"19145035","name":"紫色格子","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2ALOZXRExEKJjSZFAXXckhpXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_536916770723":{"itemid":"536916770723","title":"爱华仕背包男双肩电脑背包女15.6寸双肩包男商务休闲大学生书包","price":"399","subPrice":"149","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2p2jGlfNNTKJjSspkXXaeWFXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2K1cIXhmI.eBjy0FlXXbgkVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2ETiybB8lpuFjy0FnXXcZyXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2WzyefHXlpuFjy1zbXXb_qpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2uAwAgQqvpuFjSZFhXXaOgXXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3596064478096","propPath":"1627207:28341"},{"skuId":"3596064478094","propPath":"1627207:28338"},{"skuId":"3596064478095","propPath":"1627207:394222004"}],"skusMapValues":{"0":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"14900","priceText":"149","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"5903"},"3596064478094":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"14900","priceText":"149","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"697"},"3596064478095":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"14900","priceText":"149","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"465"},"3596064478096":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"14900","priceText":"149","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"4741"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2S1Whad3nyKJjSZFjXXcdBXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28338","name":"蓝色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2fbJ7XVokyKJjy1zbXXXZfVXa_!!287745076.jpg","sortOrder":"1"},{"vid":"394222004","name":"麻布灰","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2dp6gaHglyKJjSZFuXXaE6FXa_!!287745076.jpg","sortOrder":"2"}]}]},"item_555314905202":{"itemid":"555314905202","title":"爱华仕飞机轮行李箱24寸商务旅行登机箱20寸PP硬箱男女时尚拉杆箱","price":"1499-1699","subPrice":"999-1199","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2G__LavL85uJjSZFyXXa93XXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB2d0hZXLAPyuJjy0FcXXbCzpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB22b6zXholyKJjSZFDXXbNfpXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2Ec_yXdUnyKJjSZFpXXb9qFXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2PJTzXk7myKJjSZFkXXa3vVXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3591453438748","propPath":"21433:32652;1627207:28341"},{"skuId":"3591453438751","propPath":"21433:47565;1627207:28341"},{"skuId":"3591453438754","propPath":"21433:3281635;1627207:28341"},{"skuId":"3591453438749","propPath":"21433:32652;1627207:28334"},{"skuId":"3591453438752","propPath":"21433:47565;1627207:28334"}],"skusMapValues":{"0":{"price":{"priceMoney":"99900","priceText":"999-1199","showTitle":"false","sugProm":"false"},"quantity":"43"},"3591453438752":{"price":{"priceMoney":"119900","priceText":"1199","showTitle":"false","sugProm":"false"},"quantity":"16"},"3591453438751":{"price":{"priceMoney":"119900","priceText":"1199","showTitle":"false","sugProm":"false"},"quantity":"1"},"3591453438754":{"price":{"priceMoney":"139900","priceText":"1399","showTitle":"false","sugProm":"false"},"quantity":"0"},"3591453438749":{"price":{"priceMoney":"99900","priceText":"999","showTitle":"false","sugProm":"false"},"quantity":"16"},"3591453438748":{"price":{"priceMoney":"99900","priceText":"999","showTitle":"false","sugProm":"false"},"quantity":"10"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"2"},{"vid":"3281635","name":"28寸","sortOrder":"3"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2Gx1_XXojyKJjy0FiXXbCrVXa_!!287745076.jpg","sortOrder":"1"},{"vid":"28334","name":"灰色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2Iux0bgMPMeJjy1XcXXXpppXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_44546724274":{"itemid":"44546724274","title":"爱华仕拉杆箱万向轮20寸女 箱包旅行箱男24寸 学生密码行李箱硬箱","price":"729-1099","subPrice":"269-439","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2afAlprsTMeJjSszhXXcGCFXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2aT5btXXXXXXkXXXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2cEoncmiJ.eBjSspfXXbBKFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2ll2ftpXXXXb5XpXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2Ph_3nwMPMeJjy1XdXXasrXXa_!!287745076.png"],"skusMapKeys":[{"skuId":"3594893839051","propPath":"21433:21375;1627207:3232483"},{"skuId":"3594893839050","propPath":"21433:21375;1627207:3232480"},{"skuId":"3594399250812","propPath":"21433:32102;1627207:28338"},{"skuId":"3594399250813","propPath":"21433:32102;1627207:28341"},{"skuId":"3594399250810","propPath":"21433:32102;1627207:28332"},{"skuId":"3594399250811","propPath":"21433:32102;1627207:28335"},{"skuId":"3594399250815","propPath":"21433:32102;1627207:90554"},{"skuId":"3429992041805","propPath":"21433:21373;1627207:28338"},{"skuId":"3429992041806","propPath":"21433:21373;1627207:28341"},{"skuId":"3429992041803","propPath":"21433:21373;1627207:28332"},{"skuId":"3429992041804","propPath":"21433:21373;1627207:28335"},{"skuId":"3429992041808","propPath":"21433:21373;1627207:90554"},{"skuId":"3429992041801","propPath":"21433:21373;1627207:28326"},{"skuId":"3429995509743","propPath":"21433:21374;1627207:28338"},{"skuId":"3429995509744","propPath":"21433:21374;1627207:28341"},{"skuId":"3429995509741","propPath":"21433:21374;1627207:28332"}],"skusMapValues":{"0":{"price":{"priceMoney":"26900","priceText":"269-439","showTitle":"false","sugProm":"false"},"quantity":"4296"},"3594893839050":{"price":{"priceMoney":"26900","priceText":"269","showTitle":"false","sugProm":"false"},"quantity":"104"},"3429995509744":{"price":{"priceMoney":"43900","priceText":"439","showTitle":"false","sugProm":"false"},"quantity":"26"},"3594893839051":{"price":{"priceMoney":"26900","priceText":"269","showTitle":"false","sugProm":"false"},"quantity":"40"},"3429995509743":{"price":{"priceMoney":"43900","priceText":"439","showTitle":"false","sugProm":"false"},"quantity":"101"},"3429995509741":{"price":{"priceMoney":"43900","priceText":"439","showTitle":"false","sugProm":"false"},"quantity":"130"},"3429992041803":{"price":{"priceMoney":"38900","priceText":"389","showTitle":"false","sugProm":"false"},"quantity":"25"},"3594399250815":{"price":{"priceMoney":"33900","priceText":"339","showTitle":"false","sugProm":"false"},"quantity":"197"},"3429992041804":{"price":{"priceMoney":"38900","priceText":"389","showTitle":"false","sugProm":"false"},"quantity":"1512"},"3429992041805":{"price":{"priceMoney":"38900","priceText":"389","showTitle":"false","sugProm":"false"},"quantity":"332"},"3429992041806":{"price":{"priceMoney":"38900","priceText":"389","showTitle":"false","sugProm":"false"},"quantity":"26"},"3594399250810":{"price":{"priceMoney":"33900","priceText":"339","showTitle":"false","sugProm":"false"},"quantity":"167"},"3594399250811":{"price":{"priceMoney":"33900","priceText":"339","showTitle":"false","sugProm":"false"},"quantity":"423"},"3429992041808":{"price":{"priceMoney":"38900","priceText":"389","showTitle":"false","sugProm":"false"},"quantity":"295"},"3594399250812":{"price":{"priceMoney":"33900","priceText":"339","showTitle":"false","sugProm":"false"},"quantity":"414"},"3594399250813":{"price":{"priceMoney":"33900","priceText":"339","showTitle":"false","sugProm":"false"},"quantity":"504"},"3429992041801":{"price":{"priceMoney":"38900","priceText":"389","showTitle":"false","sugProm":"false"},"quantity":"0"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"21375","name":"16寸横款","sortOrder":"0"},{"vid":"32102","name":"20寸","sortOrder":"3"},{"vid":"21373","name":"24寸","sortOrder":"9"},{"vid":"21374","name":"28寸","sortOrder":"11"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"3232483","name":"横款黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2yCfGvrJkpuFjy1zcXXa5FFXa_!!287745076.jpg","sortOrder":"1"},{"vid":"3232480","name":"横款银灰色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2HPK3gcPRfKJjSZFOXXbKEVXa_!!287745076.jpg","sortOrder":"2"},{"vid":"28338","name":"深蓝色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2NDLSvwFkpuFjSspnXXb4qFXa_!!287745076.jpg","sortOrder":"4"},{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2sKpQgC3PL1JjSZFxXXcBBVXa_!!287745076.jpg","sortOrder":"5"},{"vid":"28332","name":"银灰色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2gcgKzJ0opuFjSZFxXXaDNVXa_!!287745076.jpg","sortOrder":"6"},{"vid":"28335","name":"草绿色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2IKrUvC0jpuFjy0FlXXc0bpXa_!!287745076.jpg","sortOrder":"7"},{"vid":"90554","name":"玫红色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2a.oVvCFjpuFjSszhXXaBuVXa_!!287745076.jpg","sortOrder":"8"},{"vid":"28326","name":"红色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2AvtkzY4npuFjSZFmXXXl4FXa_!!287745076.jpg","sortOrder":"10"}]}]},"item_551164061745":{"itemid":"551164061745","title":"爱华仕铝镁合金拉杆箱 商务旅行登机箱20寸男女行李箱24寸出差","price":"4199-4999","subPrice":"1899-2399","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2w3KKlqagSKJjy0FcXXcZeVXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2kIkVsYlmpuFjSZFlXXbdQXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2.iTKcwMPMeJjy1XbXXcwxVXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2rNTBcwMPMeJjy1XdXXasrXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2zQvDcyIRMeJjy0FbXXbnqXXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3584475735518","propPath":"21433:32102;1627207:28330"},{"skuId":"3584475735515","propPath":"21433:21373;1627207:28330"},{"skuId":"3584475735519","propPath":"21433:32102;1627207:3348089"},{"skuId":"3584475735516","propPath":"21433:21373;1627207:3348089"},{"skuId":"3584475735520","propPath":"21433:32102;1627207:75366286"},{"skuId":"3584475735517","propPath":"21433:21373;1627207:75366286"},{"skuId":"3496993868848","propPath":"21433:32102;1627207:8561058"},{"skuId":"3496993868847","propPath":"21433:21373;1627207:8561058"}],"skusMapValues":{"0":{"price":{"priceMoney":"189900","priceText":"1899-2399","showTitle":"false","sugProm":"false"},"quantity":"115"},"3584475735518":{"price":{"priceMoney":"189900","priceText":"1899","showTitle":"false","sugProm":"false"},"quantity":"4"},"3584475735517":{"price":{"priceMoney":"239900","priceText":"2399","showTitle":"false","sugProm":"false"},"quantity":"0"},"3584475735516":{"price":{"priceMoney":"239900","priceText":"2399","showTitle":"false","sugProm":"false"},"quantity":"13"},"3584475735515":{"price":{"priceMoney":"239900","priceText":"2399","showTitle":"false","sugProm":"false"},"quantity":"11"},"3584475735520":{"price":{"priceMoney":"189900","priceText":"1899","showTitle":"false","sugProm":"false"},"quantity":"8"},"3496993868848":{"price":{"priceMoney":"189900","priceText":"1899","showTitle":"false","sugProm":"false"},"quantity":"30"},"3584475735519":{"price":{"priceMoney":"189900","priceText":"1899","showTitle":"false","sugProm":"false"},"quantity":"19"},"3496993868847":{"price":{"priceMoney":"239900","priceText":"2399","showTitle":"false","sugProm":"false"},"quantity":"30"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32102","name":"20寸","sortOrder":"0"},{"vid":"21373","name":"24寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"28330","name":"银色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB25t.9wNhmpuFjSZFyXXcLdFXa_!!287745076.jpg","sortOrder":"1"},{"vid":"3348089","name":"玫瑰金","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2NLk4sYplpuFjSspiXXcdfFXa_!!287745076.jpg","sortOrder":"3"},{"vid":"75366286","name":"香槟色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2AEUUwJ0opuFjSZFxXXaDNVXa_!!287745076.jpg","sortOrder":"4"},{"vid":"8561058","name":"金属灰","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB25NZXjzihSKJjy0FlXXadEXXa_!!287745076.jpg","sortOrder":"5"}]}]},"item_527287256371":{"itemid":"527287256371","title":"爱华仕男士胸包女韩版潮休闲斜挎包运动骑行小包情侣潮流单肩包","price":"199","subPrice":"99","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2zVXJumxjpuFjSszeXXaeMVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB27iRMtVXXXXXVXXXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2M7kytFXXXXXPXFXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2WnETtFXXXXbGXpXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2DTNItVXXXXaXXXXXXXXXXXXX_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3547179843424","propPath":"1627207:28341"},{"skuId":"3547179843423","propPath":"1627207:3232478"},{"skuId":"3547179843425","propPath":"1627207:3861844"},{"skuId":"3547179843426","propPath":"1627207:39150948"}],"skusMapValues":{"0":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"381"},"3547179843425":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"121"},"3547179843426":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"0"},"3547179843423":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"90"},"3547179843424":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"170"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2U5uyrR8lpuFjy0FnXXcZyXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"3232478","name":"深灰色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2FDtfaq3PyuJjy1zkXXcjRFXa_!!287745076.jpg","sortOrder":"1"},{"vid":"3861844","name":"海军蓝","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2uO.MXd3nyKJjSZFEXXXTTFXa_!!287745076.jpg","sortOrder":"2"},{"vid":"39150948","name":"深玫红","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2HWWjaeIPyuJjSspcXXXiApXa_!!287745076.jpg","sortOrder":"3"}]}]},"item_545410345885":{"itemid":"545410345885","title":"爱华仕铝框拉杆箱17寸空姐行李箱 拉杆登机箱女旅行箱飞机轮","price":"1499-1959","subPrice":"1099-1459","images":["http://img.alicdn.com/imgextra/i3/287745076/TB27CULXPe.6eJjSZJiXXbhDFXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB254Ttg98mpuFjSZFMXXaxpVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2C9VWgYlmpuFjSZFlXXbdQXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2TopEg9VmpuFjSZFFXXcZApXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2rVTZbutTMeFjSZFOXXaTiVXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3419501117561","propPath":"21433:21375;1627207:1653806875"},{"skuId":"3419501117562","propPath":"21433:21375;1627207:423778688"},{"skuId":"3419501117564","propPath":"21433:21375;1627207:1762314193"},{"skuId":"3419501117563","propPath":"21433:21375;1627207:1762314192"},{"skuId":"3583882850202","propPath":"21433:32652;1627207:79453756"},{"skuId":"3583882850210","propPath":"21433:47565;1627207:79453756"},{"skuId":"3583882850206","propPath":"21433:3281635;1627207:79453756"},{"skuId":"3583882850203","propPath":"21433:32652;1627207:1679108060"},{"skuId":"3583882850211","propPath":"21433:47565;1627207:1679108060"},{"skuId":"3583882850207","propPath":"21433:3281635;1627207:1679108060"},{"skuId":"3583882850201","propPath":"21433:32652;1627207:92258313"},{"skuId":"3583882850209","propPath":"21433:47565;1627207:92258313"},{"skuId":"3429590045618","propPath":"21433:3281635;1627207:92258313"},{"skuId":"3583882850204","propPath":"21433:32652;1627207:274208388"},{"skuId":"3583882850212","propPath":"21433:47565;1627207:274208388"},{"skuId":"3429590045617","propPath":"21433:3281635;1627207:274208388"}],"skusMapValues":{"0":{"price":{"priceMoney":"109900","priceText":"1099-1459","showTitle":"false","sugProm":"false"},"quantity":"95"},"3429590045617":{"price":{"priceMoney":"145900","priceText":"1459","showTitle":"false","sugProm":"false"},"quantity":"15"},"3419501117563":{"price":{"priceMoney":"109900","priceText":"1099","showTitle":"false","sugProm":"false"},"quantity":"0"},"3419501117564":{"price":{"priceMoney":"109900","priceText":"1099","showTitle":"false","sugProm":"false"},"quantity":"0"},"3419501117561":{"price":{"priceMoney":"109900","priceText":"1099","showTitle":"false","sugProm":"false"},"quantity":"4"},"3419501117562":{"price":{"priceMoney":"109900","priceText":"1099","showTitle":"false","sugProm":"false"},"quantity":"5"},"3583882850209":{"price":{"priceMoney":"129900","priceText":"1299","showTitle":"false","sugProm":"false"},"quantity":"13"},"3583882850204":{"price":{"priceMoney":"119900","priceText":"1199","showTitle":"false","sugProm":"false"},"quantity":"6"},"3583882850206":{"price":{"priceMoney":"145900","priceText":"1459","showTitle":"false","sugProm":"false"},"quantity":"3"},"3583882850207":{"price":{"priceMoney":"145900","priceText":"1459","showTitle":"false","sugProm":"false"},"quantity":"2"},"3583882850211":{"price":{"priceMoney":"129900","priceText":"1299","showTitle":"false","sugProm":"false"},"quantity":"8"},"3583882850201":{"price":{"priceMoney":"119900","priceText":"1199","showTitle":"false","sugProm":"false"},"quantity":"4"},"3583882850212":{"price":{"priceMoney":"129900","priceText":"1299","showTitle":"false","sugProm":"false"},"quantity":"14"},"3583882850202":{"price":{"priceMoney":"119900","priceText":"1199","showTitle":"false","sugProm":"false"},"quantity":"0"},"3583882850203":{"price":{"priceMoney":"119900","priceText":"1199","showTitle":"false","sugProm":"false"},"quantity":"5"},"3429590045618":{"price":{"priceMoney":"145900","priceText":"1459","showTitle":"false","sugProm":"false"},"quantity":"10"},"3583882850210":{"price":{"priceMoney":"129900","priceText":"1299","showTitle":"false","sugProm":"false"},"quantity":"6"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"21375","name":"17寸","sortOrder":"0"},{"vid":"32652","name":"20寸","sortOrder":"5"},{"vid":"47565","name":"24寸","sortOrder":"7"},{"vid":"3281635","name":"28寸","sortOrder":"8"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"1653806875","name":"横款白色拉丝","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2I7p_XHdvt1JjSZFuXXXG0FXa_!!287745076.jpg","sortOrder":"1"},{"vid":"423778688","name":"横款玫粉色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2UrUyzYJmpuFjSZFwXXaE4VXa_!!287745076.jpg","sortOrder":"2"},{"vid":"1762314193","name":"横款玫瑰金拉丝","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2G52TvR8lpuFjSspaXXXJKpXa_!!287745076.jpg","sortOrder":"3"},{"vid":"1762314192","name":"横款银灰色拉丝","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2uDPpvR4lpuFjy1zjXXcAKpXa_!!287745076.jpg","sortOrder":"4"},{"vid":"79453756","name":"白色拉丝","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2iSTUvR8kpuFjSspeXXc7IpXa_!!287745076.jpg","sortOrder":"6"},{"vid":"1679108060","name":"玫粉色拉丝","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2qBMRz.hnpuFjSZFpXXcpuXXa_!!287745076.jpg","sortOrder":"9"},{"vid":"92258313","name":"玫瑰金拉丝","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2P9dfAodnpuFjSZPhXXbChpXa_!!287745076.jpg","sortOrder":"10"},{"vid":"274208388","name":"银灰色拉丝","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2LRIDt4RDOuFjSZFzXXcIipXa_!!287745076.jpg","sortOrder":"11"}]}]},"item_545410221358":{"itemid":"545410221358","title":"海浪系列 爱华仕行李箱男 拉杆登机箱女20寸万向轮旅行箱","price":"1399-1599","subPrice":"899-999","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2l1W.kLBNTKJjSszcXXbO2VXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2_3WUfMoQMeJjy0FoXXcShVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2Kq4Phm8mpuFjSZFMXXaxpVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2ITujf3xlpuFjSszbXXcSVpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB26Dujf3xlpuFjSszbXXcSVpXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3418856184097","propPath":"21433:32652;1627207:28327"},{"skuId":"3456570133620","propPath":"21433:47565;1627207:28327"},{"skuId":"3456570133619","propPath":"21433:32652;1627207:28330"},{"skuId":"3418856184099","propPath":"21433:47565;1627207:28330"},{"skuId":"3646136411049","propPath":"21433:32652;1627207:28338"},{"skuId":"3646136411050","propPath":"21433:47565;1627207:28338"}],"skusMapValues":{"0":{"price":{"priceMoney":"89900","priceText":"899-999","showTitle":"false","sugProm":"false"},"quantity":"90"},"3646136411049":{"price":{"priceMoney":"89900","priceText":"899","showTitle":"false","sugProm":"false"},"quantity":"23"},"3646136411050":{"price":{"priceMoney":"99900","priceText":"999","showTitle":"false","sugProm":"false"},"quantity":"25"},"3456570133619":{"price":{"priceMoney":"89900","priceText":"899","showTitle":"false","sugProm":"false"},"quantity":"0"},"3418856184097":{"price":{"priceMoney":"89900","priceText":"899","showTitle":"false","sugProm":"false"},"quantity":"20"},"3418856184099":{"price":{"priceMoney":"99900","priceText":"999","showTitle":"false","sugProm":"false"},"quantity":"0"},"3456570133620":{"price":{"priceMoney":"99900","priceText":"999","showTitle":"false","sugProm":"false"},"quantity":"22"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"28327","name":"酒红色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2oi8MbI2vU1JjSZFwXXX2cpXa_!!287745076.jpg","sortOrder":"1"},{"vid":"28330","name":"银色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB24gpPbbsTMeJjy1zcXXXAgXXa_!!287745076.jpg","sortOrder":"3"},{"vid":"28338","name":"蓝色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2SzXPaKsAV1JjSZFsXXadZXXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_558484444589":{"itemid":"558484444589","title":"爱华仕行李箱万向轮20寸女箱包旅行箱男24寸拉杆箱硬箱学生密码箱","price":"789-999","subPrice":"379-439","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2F1jiaRY85uJjSZPcXXaGGpXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB2b1i8dzlxYKJjSZFuXXaYlVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2vaEpn.l7MKJjSZFDXXaOEpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2c.r9hzuhSKJjSspmXXcQDpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2asZxiLBNTKJjSszbXXaFrFXa_!!287745076.png"],"skusMapKeys":[{"skuId":"3638762766005","propPath":"21433:32652;1627207:125076417"},{"skuId":"3638762766011","propPath":"21433:47565;1627207:125076417"},{"skuId":"3638762766006","propPath":"21433:32652;1627207:468190472"},{"skuId":"3638762766012","propPath":"21433:47565;1627207:468190472"},{"skuId":"3638762766007","propPath":"21433:32652;1627207:854972478"},{"skuId":"3638762766013","propPath":"21433:47565;1627207:854972478"},{"skuId":"3638762766008","propPath":"21433:32652;1627207:1882600020"},{"skuId":"3638762766014","propPath":"21433:47565;1627207:1882600020"},{"skuId":"3638762766009","propPath":"21433:32652;1627207:787980117"},{"skuId":"3638762766015","propPath":"21433:47565;1627207:787980117"},{"skuId":"3638762766010","propPath":"21433:32652;1627207:1882600019"},{"skuId":"3638762766016","propPath":"21433:47565;1627207:1882600019"},{"skuId":"3647802922318","propPath":"21433:32652;1627207:3502073"},{"skuId":"3647802922319","propPath":"21433:47565;1627207:3502073"}],"skusMapValues":{"0":{"price":{"priceMoney":"4000","priceText":"40-50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379-439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"4125"},"3638762766007":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"376"},"3638762766006":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"190"},"3638762766005":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"415"},"3638762766016":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"43900","priceText":"439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"241"},"3638762766015":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"43900","priceText":"439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"299"},"3647802922319":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"43900","priceText":"439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"285"},"3638762766009":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"295"},"3647802922318":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"421"},"3638762766008":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"193"},"3638762766010":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"37900","priceText":"379","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"241"},"3638762766014":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"43900","priceText":"439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"194"},"3638762766013":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"43900","priceText":"439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"372"},"3638762766012":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"43900","priceText":"439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"183"},"3638762766011":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"43900","priceText":"439","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"420"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"125076417","name":"森林绿","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2gmy5htqUQKJjSZFIXXcOkFXa_!!287745076.png","sortOrder":"1"},{"vid":"468190472","name":"青金石蓝","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2Ou2.bc2vU1JjSZFwXXX2cpXa_!!287745076.jpg","sortOrder":"3"},{"vid":"854972478","name":"50°灰","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2Lh3VbvBNTKJjSszeXXcu2VXa_!!287745076.jpg","sortOrder":"4"},{"vid":"1882600020","name":"花菱草黄","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2JAcmX17EWeJjSZFMXXX00FXa_!!287745076.jpg","sortOrder":"5"},{"vid":"787980117","name":"知更鸟蓝","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2QWRNoUUIL1JjSZFrXXb3xFXa_!!287745076.jpg","sortOrder":"6"},{"vid":"1882600019","name":"聚花风铃紫","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2RPFffWagSKJjy0FhXXcrbFXa_!!287745076.jpg","sortOrder":"7"},{"vid":"3502073","name":"中国红","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB20Nh2b2MTUeJjSZFKXXagopXa_!!287745076.jpg","sortOrder":"8"}]}]},"item_548024946922":{"itemid":"548024946922","title":"爱华仕拉杆箱包 海关锁登机行李箱20寸飞机轮旅行箱男女时尚","price":"1299-1699","subPrice":"1099-1479","images":["http://img.alicdn.com/imgextra/i4/287745076/TB27oHKaqY85uJjSZFjXXb2VVXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2z2IroH8kpuFjy0FcXXaUhpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2MIGBlgxlpuFjSszgXXcJdpXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2Fi93lgJlpuFjSspjXXcT.pXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2z2KvlbtlpuFjSspfXXXLUpXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3583869102881","propPath":"21433:32652;1627207:14556076"},{"skuId":"3583869102887","propPath":"21433:47565;1627207:14556076"},{"skuId":"3583869102884","propPath":"21433:3281635;1627207:14556076"},{"skuId":"3583869102880","propPath":"21433:32652;1627207:28327"},{"skuId":"3583869102886","propPath":"21433:47565;1627207:28327"},{"skuId":"3583869102883","propPath":"21433:3281635;1627207:28327"}],"skusMapValues":{"0":{"price":{"priceMoney":"109900","priceText":"1099-1479","showTitle":"false","sugProm":"false"},"quantity":"22"},"3583869102883":{"price":{"priceMoney":"147900","priceText":"1479","showTitle":"false","sugProm":"false"},"quantity":"3"},"3583869102884":{"price":{"priceMoney":"147900","priceText":"1479","showTitle":"false","sugProm":"false"},"quantity":"3"},"3583869102881":{"price":{"priceMoney":"109900","priceText":"1099","showTitle":"false","sugProm":"false"},"quantity":"2"},"3583869102880":{"price":{"priceMoney":"109900","priceText":"1099","showTitle":"false","sugProm":"false"},"quantity":"5"},"3583869102887":{"price":{"priceMoney":"125900","priceText":"1259","showTitle":"false","sugProm":"false"},"quantity":"3"},"3583869102886":{"price":{"priceMoney":"125900","priceText":"1259","showTitle":"false","sugProm":"false"},"quantity":"6"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"2"},{"vid":"3281635","name":"28寸","sortOrder":"3"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"14556076","name":"炭灰色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2WeOFcEEIL1JjSZFFXXc5kVXa_!!287745076.jpg","sortOrder":"1"},{"vid":"28327","name":"酒红色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB27pmIcx3IL1JjSZPfXXcrUVXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_557489349781":{"itemid":"557489349781","title":"爱华仕铝框行李箱20寸女旅行登机箱飞机轮拉杆箱24寸海关锁硬箱","price":"1499-1799","subPrice":"699-799","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2wmiYlV9gSKJjSspbXXbeNXXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2wxBbXbsTMeJjy1zbXXchlVXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2CpUSXe7JL1JjSZFKXXc4KXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2nPZOXd.LL1JjSZFEXXcVmXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2KYwPXnZKL1JjSZFIXXX_DFXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3457692281145","propPath":"21433:32652;1627207:30995096"},{"skuId":"3457692281148","propPath":"21433:47565;1627207:30995096"},{"skuId":"3457692281146","propPath":"21433:32652;1627207:92258313"},{"skuId":"3457692281149","propPath":"21433:47565;1627207:92258313"},{"skuId":"3649056170867","propPath":"21433:32652;1627207:8632854"},{"skuId":"3457692281147","propPath":"21433:47565;1627207:8632854"}],"skusMapValues":{"0":{"price":{"priceMoney":"7000","priceText":"70-80","priceTitle":"定金","sugProm":"false","showTitle":"true"},"subPrice":{"priceMoney":"69900","priceText":"699-799","priceTitle":"总价","sugProm":"false","showTitle":"true"},"quantity":"1208"},"3649056170867":{"price":{"priceMoney":"7000","priceText":"70","priceTitle":"定金","sugProm":"false","showTitle":"true"},"subPrice":{"priceMoney":"69900","priceText":"699","priceTitle":"总价","sugProm":"false","showTitle":"true"},"quantity":"0"},"3457692281145":{"price":{"priceMoney":"7000","priceText":"70","priceTitle":"定金","sugProm":"false","showTitle":"true"},"subPrice":{"priceMoney":"69900","priceText":"699","priceTitle":"总价","sugProm":"false","showTitle":"true"},"quantity":"271"},"3457692281146":{"price":{"priceMoney":"7000","priceText":"70","priceTitle":"定金","sugProm":"false","showTitle":"true"},"subPrice":{"priceMoney":"69900","priceText":"699","priceTitle":"总价","sugProm":"false","showTitle":"true"},"quantity":"181"},"3457692281147":{"price":{"priceMoney":"8000","priceText":"80","priceTitle":"定金","sugProm":"false","showTitle":"true"},"subPrice":{"priceMoney":"79900","priceText":"799","priceTitle":"总价","sugProm":"false","showTitle":"true"},"quantity":"95"},"3457692281148":{"price":{"priceMoney":"8000","priceText":"80","priceTitle":"定金","sugProm":"false","showTitle":"true"},"subPrice":{"priceMoney":"79900","priceText":"799","priceTitle":"总价","sugProm":"false","showTitle":"true"},"quantity":"380"},"3457692281149":{"price":{"priceMoney":"8000","priceText":"80","priceTitle":"定金","sugProm":"false","showTitle":"true"},"subPrice":{"priceMoney":"79900","priceText":"799","priceTitle":"总价","sugProm":"false","showTitle":"true"},"quantity":"281"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"30995096","name":"银色拉丝","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2L.nQh2BNTKJjy0FdXXcPpVXa_!!287745076.jpg","sortOrder":"1"},{"vid":"92258313","name":"玫瑰金拉丝","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2HT.SXdQLL1JjSZPhXXX3gVXa_!!287745076.jpg","sortOrder":"3"},{"vid":"8632854","name":"蓝色磨砂","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2fwHvb2NNTKJjSspeXXaSwpXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_555258221706":{"itemid":"555258221706","title":"辑盗者系列爱华仕商务防盗背包男电脑包女双肩时尚背包可扩展隔层","price":"719","subPrice":"339","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2P_5OlWmgSKJjSspiXXXyJFXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB2y_lAXo3iyKJjy1zeXXbxZFXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB268FFXd3nyKJjSZFjXXcdBXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2hwCsXk7OyuJjSsplXXXqdpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2l98GXhAlyKJjSZFyXXbm_XXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3425587524092","propPath":"1627207:28341"},{"skuId":"3425587524093","propPath":"1627207:28334"}],"skusMapValues":{"0":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"33900","priceText":"339","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"135"},"3425587524092":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"33900","priceText":"339","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"39"},"3425587524093":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"33900","priceText":"339","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"96"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2mhXRXd3nyKJjSZFjXXcdBXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28334","name":"灰色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2CV8KXo3iyKJjSspnXXXbIVXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_557841746119":{"itemid":"557841746119","title":"爱华仕男士商务背包多功能软皮双肩包女牛皮电脑包出差 4391","price":"1299","subPrice":"799","images":["http://img.alicdn.com/imgextra/i3/287745076/TB285ZepwMPMeJjy1XbXXcwxVXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2piZebloHL1JjSZFwXXb6vpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2YyfVbpcJL1JjSZFOXXcWlXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2CND6awoQMeJjy0FoXXcShVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2QsFiaUgQMeJjy0FjXXaExFXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3626622146957","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"79900","priceText":"799","showTitle":"false","sugProm":"false"},"quantity":"3"},"3626622146957":{"price":{"priceMoney":"79900","priceText":"799","showTitle":"false","sugProm":"false"},"quantity":"3"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2K.z_bm3PL1JjSZFxXXcBBVXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_557202857703":{"itemid":"557202857703","title":"爱华仕男士商务背包14寸电脑包女双肩多功能简约休闲旅行双肩包","price":"839","subPrice":"359","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2KeR9l6ihSKJjy0FeXXbJtpXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB27jcZX09HJuJjSZFzXXaH6pXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2hDk0X9uFJuJjSZJiXXXC4XXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB28pw0X01HJuJjSZFkXXcC1XXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2RUfFXzvmJKJjy0FlXXXGdFXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3453680489039","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"35900","priceText":"359","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"41"},"3453680489039":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"35900","priceText":"359","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"41"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2hQ2NXATkJKJjSspbXXakTXXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_550943645593":{"itemid":"550943645593","title":"OIWAS/爱华仕新品双肩包校园书包电脑包男女新潮背包旅行背包","price":"369","subPrice":"199","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2M2sEwB0kpuFjSsppXXcGTXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2jaAksJ0opuFjSZFxXXaDNVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2lgF1q3RkpuFjy1zeXXc.6FXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2QVtOq9xjpuFjSszeXXaeMVXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2vIVkqYBkpuFjy1zkXXbSpFXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3362176636862","propPath":"1627207:28341"},{"skuId":"3597759750054","propPath":"1627207:3232484"},{"skuId":"3597759750055","propPath":"1627207:80557"}],"skusMapValues":{"0":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"58"},"3362176636862":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"1"},"3597759750055":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"26"},"3597759750054":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"31"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2Utf9aJMnyKJjSZPhXXaeZVXa_!!287745076.jpg","sortOrder":"0"},{"vid":"3232484","name":"天蓝色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2dkslakQkyKJjSspaXXc_ipXa_!!287745076.jpg","sortOrder":"1"},{"vid":"80557","name":"墨绿色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2zgRkarAPyuJjy0FjXXXhfFXa_!!287745076.jpg","sortOrder":"2"}]}]},"item_556149163629":{"itemid":"556149163629","title":"爱华仕双肩包男商务 电脑包双肩女时尚金属提手旅行包牛津布14寸","price":"499","subPrice":"199","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2_s3hbgwjyKJjSsppXXaxUpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2pF2wbgojyKJjy0FaXXakspXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2jkU_bk7OyuJjSspbXXXZuXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2auQXbo7iyKJjSszcXXavlpXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB26HcfbXgkyKJjSspoXXcOPpXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3437474821051","propPath":"1627207:28341"},{"skuId":"3437474821052","propPath":"1627207:43424019"},{"skuId":"3437474821053","propPath":"1627207:3232483"}],"skusMapValues":{"0":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"105"},"3437474821051":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"105"},"3437474821053":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"0"},"3437474821052":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"0"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2HtRiXcr_F1JjSZFoXXbVRXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"43424019","name":"靛蓝色","sortOrder":"1"},{"vid":"3232483","name":"军绿色","sortOrder":"2"}]}]},"item_545818248442":{"itemid":"545818248442","title":"新品爱华仕商务多功能双肩包男潮流电脑包双肩背包女大容量数码包","price":"499","subPrice":"279","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2f6GIlqigSKJjSsppXXabnpXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2eygih00opuFjSZFxXXaDNVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2tBhigwJlpuFjSspjXXcT.pXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2SONegrRkpuFjSspmXXc.9XXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB27yZ1gmxjpuFjSszeXXaeMVXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3584336027232","propPath":"1627207:28340"},{"skuId":"3584336027234","propPath":"1627207:28341"},{"skuId":"3584336027233","propPath":"1627207:8190863"}],"skusMapValues":{"0":{"price":{"priceMoney":"27900","priceText":"279","showTitle":"false","sugProm":"false"},"quantity":"9"},"3584336027233":{"price":{"priceMoney":"27900","priceText":"279","showTitle":"false","sugProm":"false"},"quantity":"3"},"3584336027232":{"price":{"priceMoney":"27900","priceText":"279","showTitle":"false","sugProm":"false"},"quantity":"3"},"3584336027234":{"price":{"priceMoney":"27900","priceText":"279","showTitle":"false","sugProm":"false"},"quantity":"3"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28340","name":"深蓝色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2_i4LAbBmpuFjSZFAXXaQ0pXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2RP3szYJmpuFjSZFwXXaE4VXa_!!287745076.jpg","sortOrder":"1"},{"vid":"8190863","name":"淡黄色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2yBc4z0FopuFjSZFHXXbSlXXa_!!287745076.jpg","sortOrder":"2"}]}]},"item_555270243673":{"itemid":"555270243673","title":"爱华仕双肩包男商务电脑包双肩14寸时尚潮流书包旅行背包女四用包","price":"559","subPrice":"299","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2LqrUpBUSMeJjy1zjXXc0dXXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2K_dYwMRkpuFjy1zeXXc.6FXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2aeWjBdBopuFjSZPcXXc9EpXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2CcaLBbJmpuFjSZFwXXaE4VXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB29q6LBipnpuFjSZFkXXc4ZpXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3424490576677","propPath":"1627207:28341"},{"skuId":"3424490576678","propPath":"1627207:28334"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"157"},"3424490576678":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"46"},"3424490576677":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"111"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2nEnybHdvt1JjSZFuXXXG0FXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28334","name":"灰色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2n1vSgDAKh1JjSZFDXXbKlFXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_547798698909":{"itemid":"547798698909","title":"爱华仕单肩包男 休闲斜挎包 学生运动斜挎包ipad挎包单肩商务潮流","price":"199","subPrice":"99","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2ZF_eum0jpuFjy0FlXXc0bpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2PxoQkr0kpuFjy0FjXXcBbVXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2pg6PntFopuFjSZFHXXbSlXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2gfJVh5C9MuFjSZFoXXbUzFXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2XGVbnEdnpuFjSZPhXXbChpXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3369023568059","propPath":"1627207:28341"},{"skuId":"3369023568060","propPath":"1627207:394222004"},{"skuId":"3369023568061","propPath":"1627207:43424019"}],"skusMapValues":{"0":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"270"},"3369023568061":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"11"},"3369023568060":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"55"},"3369023568059":{"price":{"priceMoney":"9900","priceText":"99","showTitle":"false","sugProm":"false"},"quantity":"204"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2VMJlxr4npuFjSZFmXXXl4FXa_!!287745076.jpg","sortOrder":"0"},{"vid":"394222004","name":"麻布灰","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2eT_5ttFopuFjSZFHXXbSlXXa_!!287745076.jpg","sortOrder":"1"},{"vid":"43424019","name":"靛蓝色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2Qu1qtBNkpuFjy0FaXXbRCVXa_!!287745076.jpg","sortOrder":"2"}]}]},"item_551146509734":{"itemid":"551146509734","title":"爱华仕时尚双肩包女潮流背包男可手提两用包包13寸电脑情侣背包","price":"479","subPrice":"219","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2woYzkLBNTKJjy1zdXXaScpXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2qFPGqwJkpuFjSszcXXXfsFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB25cuTpYFkpuFjy1XcXXclapXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2O3oXs4xmpuFjSZFNXXXrRXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2zkh9p80kpuFjSsziXXa.oVXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3365744649408","propPath":"1627207:28341"},{"skuId":"3365744649409","propPath":"1627207:3232478"},{"skuId":"3365744649412","propPath":"1627207:28340"},{"skuId":"3365744649410","propPath":"1627207:52813"}],"skusMapValues":{"0":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"28"},"3365744649412":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"9"},"3365744649410":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"0"},"3365744649409":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"10"},"3365744649408":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"9"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2ulY2p9BjpuFjSsplXXa5MVXa_!!287745076.jpg","sortOrder":"0"},{"vid":"3232478","name":"深灰色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2lWJKthtmpuFjSZFqXXbHFpXa_!!287745076.jpg","sortOrder":"1"},{"vid":"28340","name":"深蓝色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2uYaItblmpuFjSZFlXXbdQXXa_!!287745076.jpg","sortOrder":"2"},{"vid":"52813","name":"迷彩","sortOrder":"3"}]}]},"item_535961659237":{"itemid":"535961659237","title":"爱华仕背包双肩包男士时尚潮流大学生书包女休闲电脑包双肩旅行包","price":"399","subPrice":"199","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2FBblv3xlpuFjSszbXXcSVpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2SmFoamiK.eBjSZFyXXaS4pXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2YnCracIa61Bjy1zeXXX7wXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2.ACqanka61Bjy0FgXXbPpVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2Praranga61BjSspfXXadSpXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3584301015445","propPath":"1627207:28341"},{"skuId":"3584301015446","propPath":"1627207:5258695"}],"skusMapValues":{"0":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"131"},"3584301015445":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"131"},"3584301015446":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"0"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2J6oMvMxlpuFjy0FoXXa.lXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"5258695","name":"枣红色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2xLU4z.dnpuFjSZPhXXbChpXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_556441720843":{"itemid":"556441720843","title":"爱华仕万向轮拉杆箱20寸登机旅行箱金属防撞护角25寸铝框行李箱","price":"1199-1399","subPrice":"559-638","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2ZOOplWagSKJjy0FhXXcrbFXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB2eOIkiLxNTKJjy0FjXXX6yVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2y_c7adifF1Jjy0FdXXX3dpXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2cM0uXnzGK1JjSspbXXbHpFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2zJAkiLxNTKJjy0FjXXX6yVXa_!!287745076.png"],"skusMapKeys":[{"skuId":"3480393044914","propPath":"21433:32652;1627207:28330"},{"skuId":"3480393044917","propPath":"21433:47565;1627207:28330"},{"skuId":"3480393044915","propPath":"21433:32652;1627207:3348089"},{"skuId":"3480393044918","propPath":"21433:47565;1627207:3348089"},{"skuId":"3480393044916","propPath":"21433:32652;1627207:75366286"},{"skuId":"3480393044919","propPath":"21433:47565;1627207:75366286"}],"skusMapValues":{"0":{"price":{"priceMoney":"7000","priceText":"60-70","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"63800","priceText":"559-638","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"2066"},"3480393044918":{"price":{"priceMoney":"7000","priceText":"70","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"63800","priceText":"638","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"431"},"3480393044919":{"price":{"priceMoney":"7000","priceText":"70","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"63800","priceText":"638","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"358"},"3480393044914":{"price":{"priceMoney":"6000","priceText":"60","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"55900","priceText":"559","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"303"},"3480393044915":{"price":{"priceMoney":"6000","priceText":"60","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"55900","priceText":"559","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"345"},"3480393044916":{"price":{"priceMoney":"6000","priceText":"60","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"55900","priceText":"559","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"125"},"3480393044917":{"price":{"priceMoney":"7000","priceText":"70","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"63800","priceText":"638","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"504"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"25寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"28330","name":"银色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2CP2tcNOMSKJjSZFlXXXqQFXa_!!287745076.jpg","sortOrder":"1"},{"vid":"3348089","name":"玫瑰金","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2c1y9bPqhSKJjSspnXXc79XXa_!!287745076.jpg","sortOrder":"3"},{"vid":"75366286","name":"香槟色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2xmdqjoQIL1JjSZFhXXaDZFXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_555650445165":{"itemid":"555650445165","title":"爱华仕行李箱女 飞机轮拉杆箱19寸单拉杆登机旅行箱男PP硬箱24寸","price":"999-1199","subPrice":"359-449","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2Z5fal6uhSKJjSspaXXXFgFXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2VEVGa8AOyuJjy0FlXXcaxFXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2zyp8Xb_EK1JjSZFBXXa0HVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2TBxGXcrHK1Jjy1zjXXanYVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB29y0unMoQMeJjy0FoXXcShVXa_!!287745076.png"],"skusMapKeys":[{"skuId":"3481240785773","propPath":"21433:21373;1627207:605130562"},{"skuId":"3481240785772","propPath":"21433:21373;1627207:587052131"},{"skuId":"3481240785771","propPath":"21433:21373;1627207:678480192"},{"skuId":"3481240785775","propPath":"21433:21374;1627207:433936457"},{"skuId":"3481240785774","propPath":"21433:21374;1627207:710718852"},{"skuId":"3481240785776","propPath":"21433:21374;1627207:443190621"}],"skusMapValues":{"0":{"price":{"priceMoney":"5000","priceText":"40-50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"44900","priceText":"359-449","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"1709"},"3481240785774":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"44900","priceText":"449","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"25"},"3481240785775":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"44900","priceText":"449","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"319"},"3481240785776":{"price":{"priceMoney":"5000","priceText":"50","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"44900","priceText":"449","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"762"},"3481240785771":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"35900","priceText":"359","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"433"},"3481240785772":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"35900","priceText":"359","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"22"},"3481240785773":{"price":{"priceMoney":"4000","priceText":"40","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"35900","priceText":"359","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"148"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"21373","name":"19寸","sortOrder":"0"},{"vid":"21374","name":"24寸","sortOrder":"4"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"605130562","name":"单杆黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2Bm0Mcr3XS1JjSZFFXXcvupXa_!!287745076.jpg","sortOrder":"1"},{"vid":"587052131","name":"单杆红色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB26pohb_0ATuJjSZFEXXap2FXa_!!287745076.jpg","sortOrder":"2"},{"vid":"678480192","name":"单杆白色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2G1i_eqmWQ1JjSZPhXXXCJFXa_!!287745076.jpg","sortOrder":"3"},{"vid":"433936457","name":"双杆黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB274dojoQIL1JjSZFhXXaDZFXa_!!287745076.jpg","sortOrder":"5"},{"vid":"710718852","name":"双杆红色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB20KTFXe7EWeJjSZFMXXX00FXa_!!287745076.jpg","sortOrder":"6"},{"vid":"443190621","name":"双杆白色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2vn54bGmgSKJjSsphXXcy1VXa_!!287745076.jpg","sortOrder":"7"}]}]},"item_543804919064":{"itemid":"543804919064","title":"爱华仕商务旅行箱20寸铝框拉杆箱24寸男飞机轮登机箱女箱子行李箱","price":"1399-1599","subPrice":"699-799","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2H29XlzihSKJjy0FfXXbGzFXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2eIIybSRRMKJjy0FlXXXFepXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2qZQecORnpuFjSZFCXXX2DXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2IpMfcUdnpuFjSZPhXXbChpXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2pwDcdQ.HL1JjSZFuXXX8dXXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3416344881011","propPath":"21433:32652;1627207:30995096"},{"skuId":"3416344881013","propPath":"21433:47565;1627207:30995096"},{"skuId":"3416344881012","propPath":"21433:32652;1627207:92258313"},{"skuId":"3416344881014","propPath":"21433:47565;1627207:92258313"}],"skusMapValues":{"0":{"price":{"priceMoney":"69900","priceText":"699-799","showTitle":"false","sugProm":"false"},"quantity":"194"},"3416344881013":{"price":{"priceMoney":"79900","priceText":"799","showTitle":"false","sugProm":"false"},"quantity":"26"},"3416344881014":{"price":{"priceMoney":"79900","priceText":"799","showTitle":"false","sugProm":"false"},"quantity":"44"},"3416344881011":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"60"},"3416344881012":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"64"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"30995096","name":"银色拉丝","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2mPWSdUsIL1JjSZPiXXXKmpXa_!!287745076.jpg","sortOrder":"1"},{"vid":"92258313","name":"玫瑰金拉丝","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2xkykdjJTMKJjSZFPXXbHUFXa_!!287745076.jpg","sortOrder":"3"}]}]},"item_557249306531":{"itemid":"557249306531","title":"爱华仕休闲简约商务双肩包女防盗多功能旅行背包小包包时尚4356","price":"599","subPrice":"299","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2l6fLaAT85uJjSZFgXXcZvVXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2vcHQXzflJKJjSsplXXafoFXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2R25pXRGBJuJjSszhXXbQDpXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2DvYSXznlJKJjSspmXXcOQFXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2PrfQXzflJKJjSsplXXafoFXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3618221870950","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"5"},"3618221870950":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"5"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2ObZyXKvAJKJjSZFCXXbopFXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_554465516415":{"itemid":"554465516415","title":"爱华仕商务斜挎包男 时尚撞色单肩挎包 女潮流单肩包休闲斜跨包","price":"219","subPrice":"129","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2K4hJv8NkpuFjy0FaXXbRCVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2Y4BFvC0jpuFjy0FlXXc0bpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB225FhAyRnpuFjSZFCXXX2DXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2QpHhv88lpuFjy0FnXXcZyXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2bZ0Sv4dkpuFjy0FbXXaNnpXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3416053928478","propPath":"1627207:9201425"},{"skuId":"3416053928479","propPath":"1627207:29860838"},{"skuId":"3416053928480","propPath":"1627207:43424019"}],"skusMapValues":{"0":{"price":{"priceMoney":"12900","priceText":"129","showTitle":"false","sugProm":"false"},"quantity":"164"},"3416053928480":{"price":{"priceMoney":"12900","priceText":"129","showTitle":"false","sugProm":"false"},"quantity":"39"},"3416053928479":{"price":{"priceMoney":"12900","priceText":"129","showTitle":"false","sugProm":"false"},"quantity":"88"},"3416053928478":{"price":{"priceMoney":"12900","priceText":"129","showTitle":"false","sugProm":"false"},"quantity":"37"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"9201425","name":"麻黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2ZO.CtthvOuFjSZFBXXcZgFXa_!!287745076.jpg","sortOrder":"0"},{"vid":"29860838","name":"麻灰色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2MAUOvhdkpuFjy0FbXXaNnpXa_!!287745076.jpg","sortOrder":"1"},{"vid":"43424019","name":"靛蓝色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB23OlcvxXkpuFjy0FiXXbUfFXa_!!287745076.jpg","sortOrder":"2"}]}]},"item_556440998984":{"itemid":"556440998984","title":"爱华仕减负护脊儿童书包男女童6-12周岁双肩包1-3-5年级学生背包","price":"429","subPrice":"219","images":["http://img.alicdn.com/imgextra/i2/287745076/TB203eAlzqhSKJjSspnXXc79XXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2OG.2aiefF1JjSspmXXcGeXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2udHraDGGJuJjSZFvXXXqTXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2l_riXQvlJKJjy0FbXXbTcpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2PMBSavHlJuJjSZFtXXad7FXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3606778942377","propPath":"1627207:3829588"},{"skuId":"3606778942378","propPath":"1627207:19145035"}],"skusMapValues":{"0":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"11"},"3606778942378":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"11"},"3606778942377":{"price":{"priceMoney":"21900","priceText":"219","showTitle":"false","sugProm":"false"},"quantity":"0"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"3829588","name":"蓝色格子","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2v39ZebMlyKJjSZFlXXbMoFXa_!!287745076.jpg","sortOrder":"0"},{"vid":"19145035","name":"紫色格子","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2N07TckQkyKJjSspaXXc_ipXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_536600745413":{"itemid":"536600745413","title":"爱华仕双肩包校园大中学生书包女休闲时尚新潮背包旅行多隔层背包","price":"499","subPrice":"179","images":["http://img.alicdn.com/imgextra/i1/TB1ydRxRXXXXXbbaXXXXXXXXXXX_!!0-item_pic.jpg","http://img.alicdn.com/imgextra/i3/TB1WqK7LpXXXXbPXVXXXXXXXXXX_!!0-item_pic.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2tks_XhvzQeBjSZFgXXcvfVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2FXE.XlLzQeBjSZFoXXc5gFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB23fWBXR6xQeBjSszgXXXGPFXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3583830978971","propPath":"1627207:5138330"},{"skuId":"3583830978969","propPath":"1627207:3232480"},{"skuId":"3583830978972","propPath":"1627207:28327"},{"skuId":"3583830978970","propPath":"1627207:28337"}],"skusMapValues":{"0":{"price":{"priceMoney":"17900","priceText":"179","showTitle":"false","sugProm":"false"},"quantity":"178"},"3583830978969":{"price":{"priceMoney":"17900","priceText":"179","showTitle":"false","sugProm":"false"},"quantity":"81"},"3583830978972":{"price":{"priceMoney":"17900","priceText":"179","showTitle":"false","sugProm":"false"},"quantity":"44"},"3583830978971":{"price":{"priceMoney":"17900","priceText":"179","showTitle":"false","sugProm":"false"},"quantity":"29"},"3583830978970":{"price":{"priceMoney":"17900","priceText":"179","showTitle":"false","sugProm":"false"},"quantity":"24"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"5138330","name":"孔雀蓝","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2qcvEvHRkpuFjSspmXXc.9XXa_!!287745076.jpg","sortOrder":"0"},{"vid":"3232480","name":"粉红色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB26wDRgCvHfKJjSZFPXXbttpXa_!!287745076.jpg","sortOrder":"1"},{"vid":"28327","name":"酒红色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2pGv1vG8lpuFjy0FpXXaGrpXa_!!287745076.jpg","sortOrder":"2"},{"vid":"28337","name":"浅蓝色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2f8hgAipnpuFjSZFkXXc4ZpXa_!!287745076.jpg","sortOrder":"3"}]}]},"item_547823631068":{"itemid":"547823631068","title":"爱华仕男士双肩包商务 时尚电脑包双肩出差休闲旅行包金属提手","price":"499","subPrice":"299","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2Z9t.lzihSKJjy0FfXXbGzFXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB23oGSmblmpuFjSZFlXXbdQXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2vQajll0lpuFjSszdXXcdxFXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2J2Bfnt4opuFjSZFLXXX8mXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2OfCrztRopuFjSZFtXXcanpXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3419473321119","propPath":"1627207:28334"},{"skuId":"3419473321120","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"1"},"3419473321120":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"0"},"3419473321119":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"1"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28334","name":"灰色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2QhYIvHRkpuFjSspmXXc.9XXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2BzvjvR4lpuFjy1zjXXcAKpXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_557168772844":{"itemid":"557168772844","title":"OIWAS/爱华仕新品U型枕旅行配件旅行U型枕两用","price":"299","subPrice":"209","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2QzfFaxOGJuJjSZFhXXav4VXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2EP2iXRLkJKJjSspjXXXkLXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2mLjhasiGJuJjSZFsXXaqApXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2bfQWabUOJuJjSZPfXXaSqXXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2XzjlaCGFJuJjSZFwXXa.iFXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3619545947253","propPath":"1627207:28334"}],"skusMapValues":{"0":{"price":{"priceMoney":"20900","priceText":"209","showTitle":"false","sugProm":"false"},"quantity":"1"},"3619545947253":{"price":{"priceMoney":"20900","priceText":"209","showTitle":"false","sugProm":"false"},"quantity":"1"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28334","name":"灰色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2tRGaafDWJKJjSZPhXXXQ5pXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_557844678516":{"itemid":"557844678516","title":"爱华仕男士商务背包 单肩 斜挎包 竖款软皮单肩包休闲真皮 5561","price":"739","subPrice":"459","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2pwvOprsTMeJjy1zbXXchlVXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2uH8GarwTMeJjSszfXXXbtFXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB22voparwTMeJjSszfXXXbtFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2t2vHa.l7MKJjSZFDXXaOEpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2dsn0a.FWMKJjSZFvXXaenFXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3462137621256","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"45900","priceText":"459","showTitle":"false","sugProm":"false"},"quantity":"6"},"3462137621256":{"price":{"priceMoney":"45900","priceText":"459","showTitle":"false","sugProm":"false"},"quantity":"6"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2wpBbb.tWMKJjy0FaXXcCDpXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_557215253220":{"itemid":"557215253220","title":"爱华仕妈咪包单肩包大容量斜挎外出收纳包轻便手拎袋奶瓶包3090","price":"499","subPrice":"299","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2LqgukLBNTKJjy0FdXXcPpVXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2aMixah5GJuJjSZFrXXcDYXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2smW9XNeEJuJjy1XaXXXPhVXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2zP9AanGGJuJjSZFvXXXqTXXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2jnu6XSyEJuJjSszfXXcJAVXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3618365558738","propPath":"1627207:3232484"},{"skuId":"3618365558739","propPath":"1627207:3594022"}],"skusMapValues":{"0":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"24"},"3618365558739":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"10"},"3618365558738":{"price":{"priceMoney":"29900","priceText":"299","showTitle":"false","sugProm":"false"},"quantity":"14"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"3232484","name":"天蓝色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2lZcYXE6FK1Jjy1XbXXXovXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"3594022","name":"玫红色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2i7oVXsrHK1JjSszbXXXbvVXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_551223783789":{"itemid":"551223783789","title":"爱华仕双肩包女时尚拼色手提包两用包潮流女士背包逛街 小拎包","price":"459","subPrice":"199","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2VruLeYsTMeJjy1zcXXXAgXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2917js0RopuFjSZFtXXcanpXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2S34fXMsSMeJjSspdXXXZ4pXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2ezkCsY4npuFjSZFmXXXl4FXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB29mJgXUgQMeJjy0FeXXXOEVXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3598278599643","propPath":"1627207:28341"},{"skuId":"3598278599642","propPath":"1627207:28340"},{"skuId":"3598278599640","propPath":"1627207:3232478"},{"skuId":"3598278599644","propPath":"1627207:28332"},{"skuId":"3598278599641","propPath":"1627207:52813"}],"skusMapValues":{"0":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"57"},"3598278599640":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"10"},"3598278599641":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"17"},"3598278599642":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"15"},"3598278599643":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"15"},"3598278599644":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"0"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2IIRhaA.OyuJjSszhXXbZbVXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28340","name":"深蓝色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2QDMsabgjyKJjy0FbXXaCtXXa_!!287745076.jpg","sortOrder":"1"},{"vid":"3232478","name":"深灰色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB22FZcaQ7myKJjSZFgXXcT9XXa_!!287745076.jpg","sortOrder":"2"},{"vid":"28332","name":"浅灰色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2SfMXaJAmyKJjSZFGXXb.fFXa_!!287745076.jpg","sortOrder":"3"},{"vid":"52813","name":"迷彩","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2b.csabgjyKJjy0FbXXaCtXXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_523225143978":{"itemid":"523225143978","title":"爱华仕银色铝框拉杆箱万向轮20寸行李箱拉杆女旅行登机箱24寸男","price":"1259-1469","subPrice":"599-699","images":["http://img.alicdn.com/imgextra/i4/287745076/TB244L8AylnpuFjSZFgXXbi7FXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2vNkPvCFjpuFjSszhXXaBuVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2Dw2_zItnpuFjSZFKXXalFFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2XayhtXXXXXXxXXXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB28QblvHtlpuFjSspoXXbcDpXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3496773984475","propPath":"21433:32652;1627207:787610158"},{"skuId":"3496773984477","propPath":"21433:32652;1627207:361291134"},{"skuId":"3496773984478","propPath":"21433:32652;1627207:1585092489"},{"skuId":"3496773984476","propPath":"21433:32652;1627207:307509562"},{"skuId":"3496773984479","propPath":"21433:47565;1627207:787610158"},{"skuId":"3496773984481","propPath":"21433:47565;1627207:361291134"},{"skuId":"3496773984482","propPath":"21433:47565;1627207:1585092489"},{"skuId":"3496773984480","propPath":"21433:47565;1627207:307509562"}],"skusMapValues":{"0":{"price":{"priceMoney":"59900","priceText":"599-699","showTitle":"false","sugProm":"false"},"quantity":"251"},"3496773984481":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"26"},"3496773984480":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"2"},"3496773984482":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"10"},"3496773984478":{"price":{"priceMoney":"59900","priceText":"599","showTitle":"false","sugProm":"false"},"quantity":"12"},"3496773984477":{"price":{"priceMoney":"59900","priceText":"599","showTitle":"false","sugProm":"false"},"quantity":"70"},"3496773984479":{"price":{"priceMoney":"69900","priceText":"699","showTitle":"false","sugProm":"false"},"quantity":"92"},"3496773984476":{"price":{"priceMoney":"59900","priceText":"599","showTitle":"false","sugProm":"false"},"quantity":"13"},"3496773984475":{"price":{"priceMoney":"59900","priceText":"599","showTitle":"false","sugProm":"false"},"quantity":"26"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"5"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"787610158","name":"银色【升级版】","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB28fgokvMTUeJjSZFKXXagopXa_!!287745076.jpg","sortOrder":"1"},{"vid":"361291134","name":"黑色【20寸为经典版-24寸为升级版】","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2OOH4sEQIL1JjSZFhXXaDZFXa_!!287745076.jpg","sortOrder":"2"},{"vid":"1585092489","name":"孔雀绿【升级版】","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2_ubJr50TMKJjSZFNXXa_1FXa_!!287745076.jpg","sortOrder":"3"},{"vid":"307509562","name":"玫瑰金【20寸为升级版-24寸为经典版】","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2A7xpodqUQKJjSZFIXXcOkFXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_559317498113":{"itemid":"559317498113","title":"爱华仕双肩包女韩版2017新款迷你休闲学院风双肩背包淑女小包","price":"329","subPrice":"159","images":["http://img.alicdn.com/imgextra/i3/287745076/TB2SuAop3oQMeJjy0FpXXcTxpXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB2aojcjvxNTKJjy0FjXXX6yVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2WGPkobsTMeJjy1zbXXchlVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2RcWohURIWKJjSZFgXXboxXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB28EPedBE_1uJjSZFOXXXNwXXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3650022523843","propPath":"1627207:28341"},{"skuId":"3650022523844","propPath":"1627207:8588036"},{"skuId":"3650022523845","propPath":"1627207:80557"},{"skuId":"3650022523846","propPath":"1627207:641590103"},{"skuId":"3650022523847","propPath":"1627207:31014688"},{"skuId":"3650022523848","propPath":"1627207:382088458"},{"skuId":"3650022523849","propPath":"1627207:79999629"}],"skusMapValues":{"0":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"2010"},"3650022523843":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"396"},"3650022523846":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"399"},"3650022523847":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"249"},"3650022523844":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"120"},"3650022523845":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"250"},"3650022523848":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"346"},"3650022523849":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"15900","priceText":"159","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"250"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2T6.mri0TMKJjSZFNXXa_1FXa_!!287745076.png","sortOrder":"0"},{"vid":"8588036","name":"翠绿色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2mk9jmbsTMeJjSszgXXacpFXa_!!287745076.png","sortOrder":"1"},{"vid":"80557","name":"墨绿色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB23t5EgPlxYKJjSZFuXXaYlVXa_!!287745076.png","sortOrder":"2"},{"vid":"641590103","name":"浅蓝配深蓝色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2QhBXr5AKL1JjSZFoXXagCFXa_!!287745076.png","sortOrder":"3"},{"vid":"31014688","name":"红色配黑色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2Bs9whURIWKJjSZFgXXboxXXa_!!287745076.png","sortOrder":"4"},{"vid":"382088458","name":"深蓝配红色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB21SR7ntqUQKJjSZFIXXcOkFXa_!!287745076.png","sortOrder":"5"},{"vid":"79999629","name":"深蓝配浅蓝","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2yh0jax8X3KJjSZPiXXcedFXa_!!287745076.png","sortOrder":"6"}]}]},"item_557899207466":{"itemid":"557899207466","title":"爱华仕双肩包女多功能商务电脑包双肩14寸出差男士背包软皮 4389","price":"1219","subPrice":"759","images":["http://img.alicdn.com/imgextra/i1/287745076/TB25kHKaqY85uJjSZFjXXb2VVXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2Ajx9amRRMKJjy0FlXXXFepXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2QibueuEJL1JjSZFGXXa6OXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2wBgKao4WMKJjSspmXXcznpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2DmL0ayERMeJjy0FcXXc7opXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3462050385016","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"75900","priceText":"759","sugProm":"false","showTitle":"false"},"quantity":"3"},"3462050385016":{"price":{"priceMoney":"75900","priceText":"759","sugProm":"false","showTitle":"false"},"quantity":"3"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2mlddarsTMeJjSsziXXcdwXXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_45258538832":{"itemid":"45258538832","title":"爱华仕双肩包男黑色大容量商务电脑背包女15寸旅行书包潮流时尚","price":"459","subPrice":"159","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2NCDSXfAPyuJjy0FcXXbCzpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2pwxQtXXXXXc4XXXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB27tx2tXXXXXbxXXXXXXXXXXXX_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2C7TFcCqJ.eBjy1zbXXbx8FXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2q9NDtXXXXXaJXpXXXXXXXXXX_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3580718222735","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"162"},"3580718222735":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"162"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2R57FzrlmpuFjSZFlXXbdQXXa_!!287745076.jpg","sortOrder":"0"}]}]},"item_559169336564":{"itemid":"559169336564","title":"爱华仕双肩包女韩版迷你撞色双肩背包2017新款休闲学院风淑女简约","price":"359","subPrice":"179","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2SMvZlfBNTKJjSszbXXaFrFXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2dW68obsTMeJjSszhXXcGCFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB24Gb0XK285uJjSZFwXXc.cVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2NpP8XIH85uJjSZFqXXa4tpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2Ui1CmgoQMeJjy1XaXXcSsFXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3649334858497","propPath":"1627207:381384195"},{"skuId":"3649334858498","propPath":"1627207:382178479"},{"skuId":"3649334858499","propPath":"1627207:899608304"},{"skuId":"3649334858500","propPath":"1627207:624362876"},{"skuId":"3649334858501","propPath":"1627207:1063682310"},{"skuId":"3649334858502","propPath":"1627207:1391053166"}],"skusMapValues":{"0":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"17900","priceText":"179","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"1292"},"3649334858502":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"17900","priceText":"179","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"150"},"3649334858497":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"17900","priceText":"179","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"349"},"3649334858498":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"17900","priceText":"179","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"149"},"3649334858499":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"17900","priceText":"179","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"346"},"3649334858500":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"17900","priceText":"179","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"148"},"3649334858501":{"price":{"priceMoney":"2000","priceText":"20","priceTitle":"定金","showTitle":"true","sugProm":"false"},"subPrice":{"priceMoney":"17900","priceText":"179","priceTitle":"总价","showTitle":"true","sugProm":"false"},"quantity":"150"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"381384195","name":"黑配深灰","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2AbiAh2MTUeJjSZFKXXagopXa_!!287745076.jpg","sortOrder":"0"},{"vid":"382178479","name":"深蓝配白","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2WRG0bkGj11JjSZFMXXXnRVXa_!!287745076.jpg","sortOrder":"1"},{"vid":"899608304","name":"藏蓝配裸粉","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB28kXuk3oQMeJjy0FpXXcTxpXa_!!287745076.jpg","sortOrder":"2"},{"vid":"624362876","name":"裸粉配米白","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2ZAXckYsTMeJjy1zbXXchlVXa_!!287745076.jpg","sortOrder":"3"},{"vid":"1063682310","name":"酒红配裸粉","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2.dJQb2nW1eJjSZFqXXa8sVXa_!!287745076.jpg","sortOrder":"4"},{"vid":"1391053166","name":"深绿配浅灰","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2fzVrpEl7MKJjSZFDXXaOEpXa_!!287745076.jpg","sortOrder":"5"}]}]},"item_553330888485":{"itemid":"553330888485","title":"爱华仕万向轮行李箱17寸 商务旅行箱登机箱密码箱出差电脑拉箱","price":"1259","subPrice":"559","images":["http://img.alicdn.com/imgextra/i4/287745076/TB2bG6.pwoQMeJjy0FnXXb8gFXa-287745076.png","http://img.alicdn.com/imgextra/i3/287745076/TB2x19CtSFjpuFjSszhXXaBuVXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2BpmwxrBnpuFjSZFGXXX51pXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2m2sAtw0kpuFjSspdXXX4YXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB29rmSlY_0UKFjy1XaXXbKfXXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3398881280214","propPath":"21433:21375;1627207:28330"},{"skuId":"3398881280215","propPath":"21433:21375;1627207:3348089"},{"skuId":"3398881280216","propPath":"21433:21375;1627207:75366286"}],"skusMapValues":{"0":{"price":{"priceMoney":"55900","priceText":"559","showTitle":"false","sugProm":"false"},"quantity":"151"},"3398881280214":{"price":{"priceMoney":"55900","priceText":"559","showTitle":"false","sugProm":"false"},"quantity":"59"},"3398881280215":{"price":{"priceMoney":"55900","priceText":"559","showTitle":"false","sugProm":"false"},"quantity":"61"},"3398881280216":{"price":{"priceMoney":"55900","priceText":"559","showTitle":"false","sugProm":"false"},"quantity":"31"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"21375","name":"17寸","sortOrder":"0"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"28330","name":"银色","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2ecFrtMRkpuFjy1zeXXc.6FXa_!!287745076.jpg","sortOrder":"1"},{"vid":"3348089","name":"玫瑰金","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2ZheegSB0XKJjSZFsXXaxfpXa_!!287745076.jpg","sortOrder":"2"},{"vid":"75366286","name":"香槟色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2z0prtMRkpuFjy1zeXXc.6FXa_!!287745076.jpg","sortOrder":"3"}]}]},"item_551009959499":{"itemid":"551009959499","title":"爱华仕箱包拉杆箱万向轮20寸女登机旅行箱男24寸学生行李箱硬箱","price":"789-999","subPrice":"349-399","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2YBV2lqagSKJjy0FaXXb0dpXa-287745076.png","http://img.alicdn.com/imgextra/i2/287745076/TB2vS7uvUhnpuFjSZFpXXcpuXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2fhknsmFjpuFjSszhXXaBuVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2g9ZAvJFopuFjSZFHXXbSlXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2AHRlXCr85uJjSZPiXXbOBFXa_!!287745076.png"],"skusMapKeys":[{"skuId":"3432552968689","propPath":"21433:21374;1627207:1536069811"},{"skuId":"3432552968692","propPath":"21433:32650;1627207:1536069811"},{"skuId":"3432552968690","propPath":"21433:21374;1627207:1577959566"},{"skuId":"3432552968693","propPath":"21433:32650;1627207:1577959566"},{"skuId":"3441399184857","propPath":"21433:21374;1627207:1338829879"},{"skuId":"3432552968691","propPath":"21433:32650;1627207:1338829879"}],"skusMapValues":{"0":{"price":{"priceMoney":"34900","priceText":"349-399","showTitle":"false","sugProm":"false"},"quantity":"1841"},"3432552968689":{"price":{"priceMoney":"34900","priceText":"349","showTitle":"false","sugProm":"false"},"quantity":"461"},"3441399184857":{"price":{"priceMoney":"34900","priceText":"349","showTitle":"false","sugProm":"false"},"quantity":"33"},"3432552968693":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"379"},"3432552968692":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"571"},"3432552968691":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"229"},"3432552968690":{"price":{"priceMoney":"34900","priceText":"349","showTitle":"false","sugProm":"false"},"quantity":"168"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"21374","name":"20寸","sortOrder":"0"},{"vid":"32650","name":"24寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"1536069811","name":"岛屿天堂蓝","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2ESPpX4f9F1JjSZFDXXXyUpXa_!!287745076.jpg","sortOrder":"1"},{"vid":"1577959566","name":"淡山茱萸粉","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2XdFXXXokyKJjy1zbXXXZfVXa_!!287745076.jpg","sortOrder":"3"},{"vid":"1338829879","name":"尼加拉蓝","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2wsfnX969F1JjSZFOXXXK.VXa_!!287745076.jpg","sortOrder":"4"}]}]},"item_551226135093":{"itemid":"551226135093","title":"爱华仕女士单肩包 潮流时尚手提包包拼色斜挎包逛街小拎包两用包","price":"329","subPrice":"139","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2P5RPxbBnpuFjSZFGXXX51pXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2LYL9s5pnpuFjSZFIXXXh2VXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB20M28s5pnpuFjSZFIXXXh2VXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2OdZos9FmpuFjSZFrXXayOXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2XIGwp3xlpuFjSszbXXcSVpXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3365861985950","propPath":"1627207:3232478"},{"skuId":"3365861985951","propPath":"1627207:28335"},{"skuId":"3365861985952","propPath":"1627207:384552448"},{"skuId":"3365861985953","propPath":"1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"13900","priceText":"139","showTitle":"false","sugProm":"false"},"quantity":"109"},"3365861985951":{"price":{"priceMoney":"13900","priceText":"139","showTitle":"false","sugProm":"false"},"quantity":"35"},"3365861985950":{"price":{"priceMoney":"13900","priceText":"139","showTitle":"false","sugProm":"false"},"quantity":"35"},"3365861985953":{"price":{"priceMoney":"13900","priceText":"139","showTitle":"false","sugProm":"false"},"quantity":"35"},"3365861985952":{"price":{"priceMoney":"13900","priceText":"139","showTitle":"false","sugProm":"false"},"quantity":"4"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"3232478","name":"深灰色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2hJX.ql0kpuFjy1zdXXXuUVXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28335","name":"绿色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB29KmcqmxjpuFjSszeXXaeMVXa_!!287745076.jpg","sortOrder":"1"},{"vid":"384552448","name":"灰配粉","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2kwSIql0kpuFjSsppXXcGTXXa_!!287745076.jpg","sortOrder":"2"},{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2__aAqbVkpuFjSspcXXbSMVXa_!!287745076.jpg","sortOrder":"3"}]}]},"item_557210089112":{"itemid":"557210089112","title":"防盗系列 爱华仕时尚单肩包男女多隔层斜挎包 商务出差小跨包5555","price":"369","subPrice":"199","images":["http://img.alicdn.com/imgextra/i3/287745076/TB239djX1YCK1JjSZFtXXbcCVXa-287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB2K2QcXAblJKJjSszeXXaAYXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB29sBiX3YDK1JjSZFCXXX.vXXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2m2g3XzS_LeJjSZFxXXaP8XXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2dUadXmR8LKJjSsppXXXhtVXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3618866303438","propPath":"1627207:28341"},{"skuId":"3618866303439","propPath":"1627207:43424019"}],"skusMapValues":{"0":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"1"},"3618866303438":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"0"},"3618866303439":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"1"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2LuwgXzjmJKJjy0FjXXcLnFXa_!!287745076.jpg","sortOrder":"0"},{"vid":"43424019","name":"靛蓝色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2dKofXyHmJKJjy0FfXXb9aVXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_557948685562":{"itemid":"557948685562","title":"爱华仕背包小包双肩 迷你两用双肩包小清新逛街包学生书包韩1689","price":"459","subPrice":"199","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2RRkpceALL1JjSZFjXXasqXXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2O6.och3IL1JjSZPfXXcrUVXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB20x3ra3oQMeJjy0FpXXcTxpXa-287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2sC8aa.tWMKJjy0FaXXcCDpXa-287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2_pMAck.HL1JjSZFlXXaiRFXa-287745076.jpg"],"skusMapKeys":[{"skuId":"3464474321995","propPath":"1627207:3232480"},{"skuId":"3464474321996","propPath":"1627207:3267936"}],"skusMapValues":{"0":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"32"},"3464474321996":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"13"},"3464474321995":{"price":{"priceMoney":"19900","priceText":"199","showTitle":"false","sugProm":"false"},"quantity":"19"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"3232480","name":"粉红色","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2SG3jcm3PL1JjSZFtXXclRVXa_!!287745076.jpg","sortOrder":"0"},{"vid":"3267936","name":"粉蓝色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2iV_Tcm3PL1JjSZPcXXcQgpXa_!!287745076.jpg","sortOrder":"1"}]}]},"item_545870950774":{"itemid":"545870950774","title":"商场同款爱华仕新品双肩背包英伦风背包时尚潮流双肩包","price":"499","subPrice":"399","images":["http://img.alicdn.com/imgextra/i2/287745076/TB2EluIlp9gSKJjSspbXXbeNXXa-287745076.png","http://img.alicdn.com/imgextra/i1/287745076/TB2vxZ2klUSMeJjy1zjXXc0dXXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2O0FMgGagSKJjy0FaXXb0dpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2uolegCFjpuFjSspbXXXagVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB28hBPhHBmpuFjSZFAXXaQ0pXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3583853986573","propPath":"1627207:5927770"},{"skuId":"3583853986574","propPath":"1627207:28341"},{"skuId":"3583853986575","propPath":"1627207:41916056"}],"skusMapValues":{"0":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"9"},"3583853986573":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"2"},"3583853986575":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"7"},"3583853986574":{"price":{"priceMoney":"39900","priceText":"399","showTitle":"false","sugProm":"false"},"quantity":"0"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"5927770","name":"树叶纹","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB21kZInY_0UKFjy1XaXXbKfXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2VvJTAhlmpuFjSZPfXXc9iXXa_!!287745076.jpg","sortOrder":"1"},{"vid":"41916056","name":"几何纹","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2m4NtAmFmpuFjSZFrXXayOXXa_!!287745076.jpg","sortOrder":"2"}]}]},"item_527282393401":{"itemid":"527282393401","title":"爱华仕印花双肩包女 学院风大中学生书包时尚潮流迷你背包男","price":"259-319","subPrice":"129-159","images":["http://img.alicdn.com/imgextra/i3/287745076/TB21agzbNxmpuFjSZFNXXXrRXXa-287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2qGVppypnpuFjSZFIXXXh2VXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2bTezbr8kpuFjy0FcXXaUhpXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i2/287745076/TB29SQTbxaK.eBjSZFwXXXjsFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2u67WbyGO.eBjSZFEXXcy9VXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3369598769782","propPath":"1627207:415372113"},{"skuId":"3369598769775","propPath":"1627207:432097602"},{"skuId":"3369598769770","propPath":"1627207:432097601"},{"skuId":"3369598769783","propPath":"1627207:835654595"},{"skuId":"3369598769780","propPath":"1627207:432097604"},{"skuId":"3369598769784","propPath":"1627207:1180138526"},{"skuId":"3369598769768","propPath":"1627207:432097607"},{"skuId":"3369598769773","propPath":"1627207:432097605"},{"skuId":"3369598769776","propPath":"1627207:1342688573"},{"skuId":"3369598769772","propPath":"1627207:1342688574"},{"skuId":"3369598769777","propPath":"1627207:1390978632"},{"skuId":"3369598769769","propPath":"1627207:432097606"},{"skuId":"3369598769779","propPath":"1627207:432097608"}],"skusMapValues":{"0":{"price":{"priceMoney":"12900","priceText":"129-159","showTitle":"false","sugProm":"false"},"quantity":"944"},"3369598769777":{"price":{"priceMoney":"12900","priceText":"129","showTitle":"false","sugProm":"false"},"quantity":"85"},"3369598769776":{"price":{"priceMoney":"12900","priceText":"129","showTitle":"false","sugProm":"false"},"quantity":"145"},"3369598769775":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"18"},"3369598769784":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"48"},"3369598769773":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"143"},"3369598769783":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"25"},"3369598769772":{"price":{"priceMoney":"12900","priceText":"129","showTitle":"false","sugProm":"false"},"quantity":"189"},"3369598769782":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"33"},"3369598769770":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"170"},"3369598769780":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"18"},"3369598769769":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"12"},"3369598769768":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"3"},"3369598769779":{"price":{"priceMoney":"15900","priceText":"159","showTitle":"false","sugProm":"false"},"quantity":"55"}},"skuProps":[{"pid":"1627207","name":"颜色分类","values":[{"vid":"415372113","name":"标准版中国红","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2lSQjtyRnpuFjSZFCXXX2DXXa_!!287745076.jpg","sortOrder":"0"},{"vid":"432097602","name":"标准版深石灰","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2p13ztxhmpuFjSZFyXXcLdFXa_!!287745076.jpg","sortOrder":"1"},{"vid":"432097601","name":"标准版钻石纹","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2SGv6tElnpuFjSZFjXXXTaVXa_!!287745076.jpg","sortOrder":"2"},{"vid":"835654595","name":"标准版海军蓝","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB2NjfpnxRDOuFjSZFzXXcIipXa_!!287745076.jpg","sortOrder":"3"},{"vid":"432097604","name":"标准版十字纹","image":"//gw.alicdn.com/bao/uploaded/i1/287745076/TB24LZztC0mpuFjSZPiXXbssVXa_!!287745076.jpg","sortOrder":"4"},{"vid":"1180138526","name":"标准版星空","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2HTW4XZPRfKJjSZFOXXbKEVXa_!!287745076.jpg","sortOrder":"5"},{"vid":"432097607","name":"标准版冰川蓝","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2tSwmtt0opuFjSZFxXXaDNVXa_!!287745076.jpg","sortOrder":"6"},{"vid":"432097605","name":"标准版树叶纹","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2i413nthvOuFjSZFBXXcZgFXa_!!287745076.jpg","sortOrder":"7"},{"vid":"1342688573","name":"小版树叶纹","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2LNNqqrplpuFjSspiXXcdfFXa_!!287745076.jpg","sortOrder":"8"},{"vid":"1342688574","name":"小版钻石纹","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2Sto0ql0kpuFjy1zdXXXuUVXa_!!287745076.jpg","sortOrder":"9"},{"vid":"1390978632","name":"小版枫叶纹","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB21B7rqmXlpuFjy0FeXXcJbFXa_!!287745076.jpg","sortOrder":"10"},{"vid":"432097606","name":"标准版几何色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2Eu7fttFopuFjSZFHXXbSlXXa_!!287745076.jpg","sortOrder":"11"},{"vid":"432097608","name":"标准版碎梦花","image":"//gw.alicdn.com/bao/uploaded/i2/287745076/TB2VNIztC0mpuFjSZPiXXbssVXa_!!287745076.jpg","sortOrder":"12"}]}]},"item_545881367997":{"itemid":"545881367997","title":"爱华仕铝框行李箱20寸 登机旅行箱男女铝合金飞机轮拉杆箱24寸","price":"1999-2199","subPrice":"1759-1959","images":["http://img.alicdn.com/imgextra/i1/287745076/TB2bRp.lzihSKJjy0FiXXcuiFXa-287745076.png","http://img.alicdn.com/imgextra/i4/287745076/TB2qaT6gbFlpuFjy0FgXXbRBVXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i3/287745076/TB2YAEVgmtkpuFjy0FhXXXQzFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i1/287745076/TB2zLcVgl0lpuFjSszdXXcdxFXa_!!287745076.jpg","http://img.alicdn.com/imgextra/i4/287745076/TB2bfbkaj7jyKJjy1XaXXblnFXa_!!287745076.jpg"],"skusMapKeys":[{"skuId":"3583875558050","propPath":"21433:32652;1627207:28321"},{"skuId":"3583875558054","propPath":"21433:47565;1627207:28321"},{"skuId":"3583875558052","propPath":"21433:32652;1627207:14556076"},{"skuId":"3583875558055","propPath":"21433:47565;1627207:28341"}],"skusMapValues":{"0":{"price":{"priceMoney":"175900","priceText":"1759-1959","sugProm":"false","showTitle":"false"},"quantity":"15"},"3583875558055":{"price":{"priceMoney":"195900","priceText":"1959","sugProm":"false","showTitle":"false"},"quantity":"3"},"3583875558054":{"price":{"priceMoney":"195900","priceText":"1959","sugProm":"false","showTitle":"false"},"quantity":"5"},"3583875558052":{"price":{"priceMoney":"175900","priceText":"1759","sugProm":"false","showTitle":"false"},"quantity":"3"},"3583875558050":{"price":{"priceMoney":"175900","priceText":"1759","sugProm":"false","showTitle":"false"},"quantity":"4"}},"skuProps":[{"pid":"21433","name":"尺寸","values":[{"vid":"32652","name":"20寸","sortOrder":"0"},{"vid":"47565","name":"24寸","sortOrder":"2"}]},{"pid":"1627207","name":"颜色分类","values":[{"vid":"28321","name":"乳白色","image":"//gw.alicdn.com/bao/uploaded/i4/287745076/TB2B.8eAilnpuFjSZFgXXbi7FXa_!!287745076.jpg","sortOrder":"1"},{"vid":"14556076","name":"炭灰色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2pkBsAm0mpuFjSZPiXXbssVXa_!!287745076.jpg","sortOrder":"3"},{"vid":"28341","name":"黑色","image":"//gw.alicdn.com/bao/uploaded/i3/287745076/TB2ozcfjmB0XKJjSZFsXXaxfpXa_!!287745076.jpg","sortOrder":"4"}]}]}}
     products = productList.map((varity) => {
      return varity.map((item) => {
        let obj = {};
        obj.itemId = item;
        let oldObj = data[`item_${item}`];
        obj.productImage = oldObj.images;
        obj.subPrice = oldObj.subPrice;
        obj.title = oldObj.title;
        let skus = [];
        let skuSize = [];
        oldObj.skuProps.map((sku) => {
          if (sku.name === '尺寸' || sku.name === '包袋大小') {
            skuSize = sku.values;
          } else if (sku.name === '颜色分类') {
            skus = sku.values;
          }
        });
        obj.skuSize = skuSize.map((value) => {
          return value.name;
        });
        if (obj.skuSize.length === 0) {
          obj.skus = skus.map(sku => {
            let colorNumber = sku.vid;
            let result = null;
            oldObj.skusMapKeys.map((itemx) => {
              if (itemx.propPath.indexOf(colorNumber) > -1) {
                let skuId = itemx.skuId;
                let prize = oldObj.skusMapValues[skuId].price.priceMoney;
                result = {skuId, prize};
              }
            });
            return result;
          });
        } else {
          obj.skus = skus.map((sku) => {
            let colorNumber = sku.vid;
            return skuSize.map((size) => {
              let sizeNumber = size.vid;
              let result = null;
              oldObj.skusMapKeys.map((itemx) => {
                if (itemx.propPath.indexOf(colorNumber) > -1 && itemx.propPath.indexOf(sizeNumber) > -1) {
                  let skuId = itemx.skuId;
                  let prize = oldObj.skusMapValues[skuId].price.priceMoney;
                  result = {skuId, prize};
                }
              });
              return result;
            });
          });
        }
        // obj.skuSize = obj.skuSize.length === 0 ? ['默认尺寸'] : obj.skuSize;
        obj.skuImage = skus.map((value) => {
          return value.image || "";
        });
        // obj.skuImage = obj.skuImage.length === 0 ? ['默认颜色'] : obj.skuImage;
        return obj;
      });
    });
     **/
    for (let i = 0; i < productList.length - 1; ++i) {
      this.dataLoad5(productList, i);
    }
    // this.setState({
    //   products: products
    // });

  }

  componentDidMount() {
    //load main datas;
    const mainTwDataIds = [
      '557489349781', '555314905202', '551164061745', '545410345885', '557489349781', '44546724274',
      '536945453736', '551009959499', '558484444589', '555650445165', '556440998984', '556056797643'
    ];

    let urlMain = base5 + mainTwDataIds.join(',');
    reqwest({
      url: urlMain,
      type: 'jsonp',
      method: 'get',
      success: (data) => {
        this.setState({
          mainData: data,
        });
      },
      error: (data) => {
        console.log(data);
      }
    });

    //Automatically back to the screen;
    this.screen = setTimeout(this.reGoScreen, backToScreenInterval);

  }

  shouldComponentUpdate(nextProps, nextStates) {
    return this.state.goAhead !== nextStates.goAhead;
  }

  reGoScreen() {
    this.go('screen');
    this.screen = setTimeout(this.reGoScreen, backToScreenInterval);
  }

  refreshTouchDelay() {
    if (this.screen) {
      console.log('clear screen');
      clearTimeout(this.screen);
      this.screen = setTimeout(this.reGoScreen, backToScreenInterval);
    }
  }


  go(witch) {
    this.setState({
      goAhead: witch,
    });
  }

  goDiffCataSecond(ccatalogIndex) {
    let cataData = cataDatas[ccatalogIndex - 1];
    this.setState({
      cataData: cataData,
      variety: ccatalogIndex - 1
    });
    this.go('second');
  }

  goDetail(id, mainCatalogIndex = '') {
    let {products, variety} = this.state;
    this.setState({
      checkId: id
    });
    this.go('detail');

    const time = this.getTime();

    if (id !== -1) {
      if (mainCatalogIndex === '') { /*mainCatalogIndex is either '' or 7*/
        const itemId = products[variety][id].itemId;
        console.log('varity is:', variety);
        console.log('trackID is:', itemId);
        this.buriedPoint({time, itemId});
      } else if (mainCatalogIndex === 7) {
        const itemId = products[7][id].itemId;
        console.log('varity is: 7');
        console.log('trackID is:', itemId);
        this.buriedPoint({time, itemId});
      }
    }
  }

  goStory() {
    if (this.state.variety === 0) {
      this.go('story');
    }
  }

  getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day, hour, minutes, second].reduce((previousValue, currentValue, currentIndex) => {
      const operator = ['-', '-', ' ', ':', ':'];
      currentValue = currentValue < 10 ? '0' + currentValue : currentValue;
      return previousValue + operator[currentIndex - 1] + currentValue;
    });
    //return like '2017-10-25-04:25:33'
  }

  buriedPoint({time, itemId}) {
    buriedParams.start_time = time;
    buriedParams.end_time = time;
    buriedParams.item_id = itemId;
    const data = JSON.stringify(buriedParams);
    reqwest({
      url: buriedPointUrl + data,
      type: 'jsonp',
      method: 'get',
/*      success: (data) => {
        console.log('buried OK:', data);
      },
      error: (data) => {
        console.log('buried falied:', data);
      },*/
    });
  }

  back() {
    this.go('main');
  }

  restart() {
    window.location.reload();
  }

  render() {
    console.log('enter in :', this.state.goAhead);
    console.log('Product[0]:', this.state.products[0]);
    let renderProxy = null;
    switch (this.state.goAhead) {
      case 'main' : {
        renderProxy =
          <Main mainData={this.state.mainData} goDiffCataSecond={this.goDiffCataSecond} goDetail={this.goDetail}
                key="main"/>;
        break;
      }
      case 'second' : {
        renderProxy = <Second products={this.state.products[this.state.variety]} go={this.go} goDetail={this.goDetail} goStory={this.goStory}
                              cataData={this.state.cataData} key="second"/>;
        break;
      }
      case 'detail' : {
        renderProxy =
          <Detail back={this.back} itemId={this.state.checkId} products={this.state.products[this.state.variety]}
                  key="detail"/>;
        break;
      }
      case 'screen' : {
        renderProxy = <Screen go={this.go}/>;
        break;
      }
      case 'story' : {
        renderProxy = <Story go={this.go}/>;
        break;
      }
    }

    return (
      <div className={css.layout} onTouchEnd={this.refreshTouchDelay}>
        <div className={css.restart} onClick={this.restart.bind(this)}/>
        <ReactCSSTransitionGroup transitionName="example"
                                 transitionEnterTimeout={1500}
                                 transitionLeaveTimeout={1000}>
          {renderProxy}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Layout;
