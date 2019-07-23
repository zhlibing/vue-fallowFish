import axios from 'axios'

export const HOST = 'https://www.easy-mock.com/mock/5b596a1c2d340a0cf1673504/fallowfish'

export const HOST_LOCAL = '/BBLServer/'

export const HOST_FILE_LOCAL = '/BBLFiLeServer/'

export const PERFIX_IMAGE = 'http://127.0.0.1:8080/BBLFiLeServer/upload/'

export const ERR_OK = 200;

export function getSearchresult() {
  const url = HOST + '/search/results'
  return axios.get(url)
}

export function getCategory() {
  const url = HOST + '/category'
  return axios.get(url)
}

export function getIndexbanner() {
  const url = HOST + '/indexbanner'
  return axios.get(url)
}

export function getIconlist() {
  const url = HOST + '/iconlist'
  return axios.get(url)
}

export function getTypelist() {
  const url = HOST + '/typelist'
  return axios.get(url)
}

export function getSmBanner() {
  const url = HOST + '/smallbanner'
  return axios.get(url)
}

export function getIndexNav() {
  const url = HOST + '/indexnav'
  return axios.get(url)
}

export function getBanner() {
  const url = HOST + '/banner'
  return axios.get(url)
}

export function getInterests() {
  const url = HOST + '/interests'
  return axios.get(url)
}

export function getQuestions() {
  const url = HOST + '/questions'
  return axios.get(url)
}

export function getTuhao() {
  const url = HOST + '/tuhao'
  return axios.get(url)
}

export function getChina() {
  const url = HOST + '/china'
  return axios.get(url)
}

export function getLists() {
  const url = HOST + '/lists'
  return axios.get(url)
}

export function doLogin(params, params1) {
  const url = HOST_LOCAL + 'login.do'
  //第一种写法
  console.log(params, 'params***')
  //第二种写法
  console.log(params1, 'params%%%%')
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',//重点在这里，加上这个属性就可以跨域请求了
    }
  })
}

export function doRegist(params) {
  const url = HOST_LOCAL + 'regsiter.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

export function doFindcheckphoto(params) {
  const url = HOST_LOCAL + 'findcheckphoto.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

export function doFindcomplanitpagelist(params) {
  const url = HOST_LOCAL + 'findcomplanitpagelist.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

//上传图片保存路径
export function doUpheadimage(params) {
  const url = HOST_LOCAL + 'upheadimage.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

//上传图片
export function doUpload(params, file) {
  const url = HOST_FILE_LOCAL + 'fileupload.do'
  var formdata = new FormData();// 创建form对象
  formdata.append('img', file, params.name);// 通过append向form对象添加数据,可以通过append继续添加数据
  console.log(params.name, '>>>name')
  let config = {
    headers: {'Content-Type': 'multipart/form-data'}
  };
  return axios.post(url, formdata, config)
}

export const news = [
  {
    "id": "0",
    "avatar": "./static/1.png",
    "name": "天涯海角",
    "time": "12分钟前来过",
    "price": "￥125.10",
    "img": ["./static/01.png"],
    "desc": "小番茄定制2017新款显瘦竖条纹半生裙高腰纽扣开叉雪纺中长款半裙",
    "add": "来自郑州",
    "kind": "鱼塘|网红衣服鱼塘",
    "star": "点赞",
    "num": "15",
    "freight": "0"
  }, {
    "id": "1",
    "avatar": "./static/1.png",
    "name": "天涯海角",
    "time": "12分钟前来过",
    "price": "￥125.10",
    "img": ["./static/01.png", "./static/01.png"],
    "desc": "小番茄定制2017新款显瘦竖条纹半生裙高腰纽扣开叉雪纺中长款半裙",
    "add": "来自郑州",
    "kind": "鱼塘|网红衣服鱼塘",
    "star": "点赞",
    "num": "15",
    "freight": "0"
  }, {
    "id": "2",
    "avatar": "./static/2.png",
    "name": "糖果xt90",
    "time": "1小时前来过",
    "price": "￥80",
    "img": ["./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png"],
    "desc": "买一送一：欧洲力淑女包，感兴趣的给我留言哟",
    "add": "来自北京",
    "kind": "鱼塘|给闲置的衣服寻找有缘",
    "freight": "10"
  }, {
    "id": "3",
    "avatar": "./static/2.png",
    "name": "糖果xt90",
    "time": "1小时前来过",
    "price": "￥80",
    "img": ["./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png", "./static/02.png"],
    "desc": "买一送一：欧洲力淑女包，感兴趣的给我留言哟",
    "add": "来自北京",
    "kind": "鱼塘|给闲置的衣服寻找有缘",
    "freight": "10"
  }]

export const iconlist = [
  {
    "id": "1",
    "src": "../../static/phone.png",
    "title": "闲鱼精选",
    "desc": "这里有好东西"
  },
  {
    "id": "2",
    "src": "../../static/jingang.png",
    "title": "拍卖",
    "desc": "变形金刚5"
  },
  {
    "id": "3",
    "src": "../../static/car.png",
    "title": "同城",
    "desc": "选闲置更靠谱"
  },
  {
    "id": "4",
    "src": "../../static/house.png",
    "title": "我要租房",
    "desc": "三分钟租到房"
  }
]

export const typelist = [
  {
    "id": "1",
    "title": "奢侈品",
    "desc": "1890个新宝贝入塘",
    "src": "./static/shechi.jpg"
  },
  {
    "id": "2",
    "title": "法院卖货",
    "desc": "手机数码真心便宜",
    "src": "./static/car.jpg"
  },
  {
    "id": "3",
    "title": "奢电脑发烧友",
    "desc": "262个新宝贝入塘",
    "src": "./static/computer.jpg"
  },
  {
    "id": "4",
    "title": "距开始9小时",
    "desc": "蔡氏古琴制作技艺",
    "src": "./static/guqin.jpg"
  },
  {
    "id": "5",
    "title": "[技能]会摄影",
    "desc": "爱宠的写真，约吗",
    "src": "./static/pet.jpg"
  },
  {
    "id": "6",
    "title": "实拍穿搭",
    "desc": "今日实拍已上新",
    "src": "./static/cloth.jpg"
  }
]

export const smallbanner = [
  {
    "id": "1",
    "src": "./static/ad1.webp"
  },
  {
    "id": "2",
    "src": "./static/ad2.png"
  }
]

export const indexbanner = [
  {
    "id": "1",
    "src": "./static/banner1.jpg"
  },
  {
    "id": "2",
    "src": "./static/banner2.jpg"
  },
  {
    "id": "3",
    "src": "./static/banner3.jpg"
  },
  {
    "id": "4",
    "src": "./static/banner4.jpg"
  }
]

export const recoms = [
  {
    "title": "长江学院鱼塘",
    "members": 393,
    "num": 16,
    "produ": "想要宝贝置顶的可以私聊我",
    "destance": 291,
    "images": [
      {
        "img": "./static/img1.png"
      },
      {
        "img": "./static/img2.png"
      },
      {
        "img": "./static/img3.png"
      }
    ]
  },
  {
    "title": "华瑞锦城鱼塘",
    "members": 60,
    "num": 3,
    "produ": "[专治各种疑问]鱼塘是什么？",
    "destance": 319,
    "images": [
      {
        "img": "./static/img4.png"
      },
      {
        "img": "./static/img5.png"
      },
      {
        "img": "./static/img6.png"
      }
    ]
  },
  {
    "title": "范家新村鱼塘",
    "members": 91,
    "num": 6,
    "produ": "想要宝贝置顶的可以私聊我",
    "destance": 418,
    "images": [
      {
        "img": "./static/img7.png"
      },
      {
        "img": "./static/img8.png"
      },
      {
        "img": "./static/img9.png"
      }
    ]
  }
]

export const nears = [
  {
    "avatar": "./static/3.png",
    "name": "流浪在天际",
    "time": "7小时前来过",
    "price": "￥100",
    "img": "./static/03.png",
    "desc": "席梦思床垫1.8米x2米 95新，换了乳胶，上门自提",
    "add": "来自南昌",
    "kind": "鱼塘|塘山镇",
    "star": "点赞",
    "num": "2"
  },
  {
    "avatar": "./static/4.png",
    "name": "万莉佳",
    "time": "8小时前来过",
    "price": "￥80",
    "img": "./static/04.png",
    "desc": "绑带细跟真皮凉鞋，清鞋柜，300多买来的，穿过两次，9.5新，34码，鞋跟10厘米左右，鞋子多，便宜处理",
    "add": "来自南昌",
    "kind": "鱼塘|众鑫城上城"
  }
]

export const interests = [
  {
    "id": "1",
    "img": "./static/oushili.png",
    "title": "欧时力欧",
    "desc": "正在举办塘主安利活动"
  },
  {
    "id": "2",
    "img": "./static/jk.png",
    "title": "JK红领巾广场",
    "desc": "天啊~这鱼塘怎么火爆"
  },
  {
    "id": "3",
    "img": "./static/dog.png",
    "title": "爱狗狗",
    "desc": "塘主推送了好东西"
  },
  {
    "id": "4",
    "img": "./static/hanfu.png",
    "title": "汉服",
    "desc": "塘主推送了好多美腻的汉服"
  }
]

export const questions = [
  {
    "id": "1",
    "title": "杭州有什么好玩的？求介绍",
    "img": "./static/hangzhou.png",
    "answer": "现在不适合去，要秋天或夏天去，冬天，夏天太晒了！因为主要是赏湖，好大太阳",
    "yutang": "青年路社区鱼塘"
  },
  {
    "id": "2",
    "title": "这个是什么品种，会分支出去吗？",
    "img": "./static/duorou.png",
    "answer": "多肉植物",
    "yutang": "多肉花盆鱼塘"
  },
  {
    "id": "3",
    "title": "鱼塘是什么",
    "answer": "其实塘主养的就是那些鱼，人鱼",
    "yutang": "中塘镇鱼塘"
  }
]

export const tuhao = [
  {
    "id": "1",
    "img": "./static/sky.png",
    "title": "METALBUILD",
    "desc": "主打metalbuild系列，当然其他系列也有哟"
  },
  {
    "id": "2",
    "img": "./static/wawa.png",
    "title": "珍妮娃娃",
    "desc": "天啊，这鱼塘什么也没有介绍····"
  },
  {
    "id": "3",
    "img": "./static/hangpai.png",
    "title": "多轴航拍FPV",
    "desc": "多轴航拍FPV鱼塘是各类航模的聚集地"
  },
  {
    "id": "4",
    "title": "更多",
    "desc": "玩具收藏"
  }
]

export const chinas = [
  {
    "id": "1",
    "img": "./static/gongfu.png",
    "title": "武术",
    "desc": "天啊~这鱼塘什么介绍都没有"
  },
  {
    "id": "2",
    "img": "./static/guqin.png",
    "title": "缦学古琴",
    "desc": "缦学堂，一个互联网古琴学堂"
  },
  {
    "id": "3",
    "img": "./static/zihua.png",
    "title": "子画收藏",
    "desc": "天啊~这个鱼塘什么介绍都没介绍"
  },
  {
    "id": "4",
    "img": "./static/minzu.png",
    "title": "民族风穿搭girl",
    "desc": "时尚、趣味、精巧、别致--民族style"
  },
  {
    "id": "5",
    "title": "更多",
    "desc": "最炫国风"
  }
]

export const discusslists = [
  {
    "id": "1",
    "img": "./static/fugu.png",
    "level": "LV.8",
    "title": "复古胶片机",
    "desc": "给胶片爱好者一片自留地，以摄会友，欢迎大家来逛逛！！！",
    "renqi": 454659,
    "fabu": 3035
  },
  {
    "id": "2",
    "img": "./static/cat.png",
    "level": "LV.7",
    "title": "咪咪哒の幸福喵生",
    "desc": "塘主推送了八字脸大眼睛超呆萌 小奶猫 免费领养 仅限上海，快去领取",
    "renqi": 535994,
    "fabu": 4134
  },
  {
    "id": "3",
    "img": "./static/shoes.png",
    "level": "LV.30",
    "title": "公主鞋",
    "desc": "塘主推送了迪奥Dior新款单鞋凉鞋字母鞋34-40，快去看看吧",
    "renqi": 673208,
    "fabu": 23607
  },
  {
    "id": "4",
    "img": "./static/zara.png",
    "level": "LV.11",
    "title": "ZARA 潮流前线",
    "desc": "塘主送了#其他品牌#男朋友风 破洞牛仔九分裤",
    "renqi": 1967730,
    "fabu": 55948
  },
  {
    "id": "5",
    "img": "./static/cat.png",
    "level": "LV.7",
    "title": "咪咪哒の幸福喵生",
    "desc": "塘主推送了八字脸大眼睛超呆萌 小奶猫 免费领养 仅限上海，快去领取",
    "renqi": 535994,
    "fabu": 4134
  },
  {
    "id": "6",
    "img": "./static/shoes.png",
    "level": "LV.30",
    "title": "公主鞋",
    "desc": "塘主推送了迪奥Dior新款单鞋凉鞋字母鞋34-40，快去看看吧",
    "renqi": 673208,
    "fabu": 23607
  },
  {
    "id": "7",
    "img": "./static/zara.png",
    "level": "LV.11",
    "title": "ZARA 潮流前线",
    "desc": "塘主送了#其他品牌#男朋友风 破洞牛仔九分裤",
    "renqi": 1967730,
    "fabu": 55948
  }
]

export const yutangbanner = [
  {
    "id": "1",
    "src": "./static/banner1.jpg"
  },
  {
    "id": "2",
    "src": "./static/ad1.webp"
  },
  {
    "id": "3",
    "src": "./static/ad2.png"
  }
]

export const friendCircel = [
  {
    "commit": [
      {
        "commit": [],
        "content": "你家的",
        "headimg": "",
        "id": 68,
        "nickname": "你真逗丶",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-19 18:06:29",
        "type": "",
        "username": "asdfg",
        "zan": []
      },
      {
        "commit": [],
        "content": "哈哈哈",
        "headimg": "",
        "id": 70,
        "nickname": "你真逗丶",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-19 19:46:53",
        "type": "",
        "username": "asdfg",
        "zan": []
      }
    ],
    "content": "随缘。。。",
    "headimg": "2017tiaozhan201702171754275427.jpg",
    "id": 156,
    "nickname": "锅盖头",
    "photo": ["2017tiaozhan2017021717545154518074380.jpg"],
    "replayuser": "",
    "sex": "女",
    "time": "2017-02-17 17:54:52",
    "type": "1",
    "username": "2017tiaozhan",
    "zan": [
      {
        "commit": [],
        "content": "",
        "headimg": "",
        "id": 96,
        "nickname": "你真逗丶",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-19 18:06:21",
        "type": "",
        "username": "asdfg",
        "zan": []
      },
      {
        "commit": [],
        "content": "",
        "headimg": "",
        "id": 95,
        "nickname": "锅盖头",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-17 17:56:47",
        "type": "",
        "username": "2017tiaozhan",
        "zan": []
      }
    ]
  },
  {
    "commit": [],
    "content": "将来和你一起到这里看看风景！",
    "headimg": "xiaowang201907191230213021.jpg",
    "id": 155,
    "nickname": "思君如痴",
    "photo": ["xiaowang201702070927062763595510.jpg", "xiaowang201702070927062765254771.jpg", "xiaowang201702070927062769747742.jpg", "xiaowang201702070927062760326443.jpg", "xiaowang201702070927062765369204.jpg", "xiaowang201702070927062765699945.jpg", "xiaowang201702070927062769471056.jpg", "xiaowang201702070927062768518887.jpg", "xiaowang201702070927062766514308.jpg"],
    "replayuser": "",
    "sex": "男",
    "time": "2017-02-07 09:27:08",
    "type": "1",
    "username": "xiaowang",
    "zan": [
      {
        "commit": [],
        "content": "",
        "headimg": "",
        "id": 92,
        "nickname": "思君如痴",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-07 09:28:45",
        "type": "",
        "username": "ysdn",
        "zan": []
      }
    ]
  },
  {
    "commit": [
      {
        "commit": [],
        "content": "会的！",
        "headimg": "",
        "id": 66,
        "nickname": "思君如痴",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-07 09:22:40",
        "type": "",
        "username": "xiaowang",
        "zan": []
      }
    ],
    "content": "好想遇到心目中的他，你在这里吗？",
    "headimg": "35745804652747820170207003307337.jpg",
    "id": 154,
    "nickname": "情定三生",
    "photo": ["357458046527478201702070053075376851040.jpg", "357458046527478201702070053075370001511.jpg", "357458046527478201702070053075374604622.jpg", "357458046527478201702070053075372139983.jpg", "357458046527478201702070053075373745044.jpg", "357458046527478201702070053075376130915.jpg", "357458046527478201702070053075371255236.jpg", "357458046527478201702070053075372139367.jpg", "357458046527478201702070053075377758048.jpg"],
    "replayuser": "",
    "sex": "女",
    "time": "2017-02-07 00:53:10",
    "type": "1",
    "username": "357458046527478",
    "zan": [
      {
        "commit": [],
        "content": "",
        "headimg": "",
        "id": 93,
        "nickname": "思君如痴",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-07 09:28:51",
        "type": "",
        "username": "ysdn",
        "zan": []
      },
      {
        "commit": [],
        "content": "",
        "headimg": "",
        "id": 90,
        "nickname": "思君如痴",
        "photo": "",
        "replayuser": "",
        "sex": "",
        "time": "2017-02-07 09:22:20",
        "type": "",
        "username": "xiaowang",
        "zan": []
      }
    ]
  }
]
