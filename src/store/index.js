import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myMovies:[{
      "movieId": 1,
      "title": "笑傲江湖2：东方不败",
      "text":'最美的武侠梦！',
      "poster": "https://s2.ax1x.com/2019/11/06/MPJmtO.jpg",
      "logo":"https://s2.ax1x.com/2019/11/06/MPJAn1.jpg",
      "loveNum":1,
      "loveState":0,
      "wantSee":0,
      "seeDown":1

  },
  {
      "movieId": 2,
      "title": "倩女幽魂",
      "text":'美女如云，日鬼专场',
      "poster": "https://s2.ax1x.com/2019/11/06/MPJV76.jpg",
      "logo":"https://s2.ax1x.com/2019/11/06/MPJFXR.md.jpg",
      "loveNum":22,
      "loveState":1,
      "wantSee":1,
      "seeDown":0
  },
  {
      "movieId": 3,
      "title": "小丑 Joker",
      "text":'以暴制暴！年度最让人心碎的灵魂悲剧',
      "poster": "https://s2.ax1x.com/2019/11/06/MPJM1H.md.jpg",
      "logo":"https://s2.ax1x.com/2019/11/06/MPJeAK.jpg",
      "loveNum":44,
      "loveState":1,
      "wantSee":0,
      "seeDown":1
  },
  {
      "movieId": 4,
      "score": 1,
      "title": "分裂 Split",
      "text":'叹为惊止，一人拥有24重性格！',
      "poster": "https://s2.ax1x.com/2019/11/06/MPJK9e.jpg",
      "logo":"https://s2.ax1x.com/2019/11/06/MPJnhD.jpg",
      "loveNum":444,
      "loveState":0,
      "wantSee":1,
      "seeDown":1
  }],movies:[{
    "movieId": 1,
    "score": 3.5,
    "type": "剧情/爱情/武侠/古装",
    "runtime": "107",
    "language": "粤语",
    "title": "笑傲江湖2：东方不败",
    "text":'最美的武侠梦！',
    "poster": "https://s2.ax1x.com/2019/11/06/MPJmtO.jpg",
    "logo":"https://s2.ax1x.com/2019/11/06/MPJAn1.jpg",
    "writers": "徐克/邓碧燕/陈天璇",
    "directors": "程小东",
    "actors": "李连杰/林青霞/关之琳/李嘉欣/李子雄/余安安/袁洁莹/刘洵/任世官/钱嘉乐",
    "year": "1992",
    "country": "中国",
    "releaseTime": "1992-06-26",
    "loveNum":1,
    "loveState":0
},
{
    "movieId": 2,
    "score": 2.5,
    "type": "爱情/奇幻/武侠/古装",
    "runtime": "98",
    "language": "粤语",
    "title": "倩女幽魂",
    "text":'美女如云，日鬼专场',
    "poster": "https://s2.ax1x.com/2019/11/06/MPJV76.jpg",
    "logo":"https://s2.ax1x.com/2019/11/06/MPJFXR.md.jpg",
    "writers": "阮继志",
    "directors": "程小东",
    "actors": "张国荣/王祖贤/午马/刘兆铭/林威/薛芷伦/胡大为/王晶",
    "year": "1989",
    "country": "中国香港",
    "releaseTime": "1987-07-18",
    "loveNum":22,
    "loveState":0
},
{
    "movieId": 3,
    "score": 4.5,
    "type": "剧情/惊悚/犯罪",
    "runtime": "122",
    "language": "英语",
    "title": "小丑 Joker",
    "text":'以暴制暴！年度最让人心碎的灵魂悲剧',
    "poster": "https://s2.ax1x.com/2019/11/06/MPJM1H.md.jpg",
    "logo":"https://s2.ax1x.com/2019/11/06/MPJeAK.jpg",
    "writers": "托德·菲利普斯/斯科特·西尔弗",
    "directors": "托德·菲利普斯",
    "actors": "杰昆·菲尼克斯/罗伯特·德尼罗/马克·马龙/莎姬·贝兹",
    "year": "2019",
    "country": "加拿大/美国",
    "releaseTime": "2019-08-31",
    "loveNum":44,
    "loveState":1
},
{
    "movieId": 4,
    "score": 1,
    "type": "悬疑/惊悚/犯罪",
    "runtime": "117",
    "language": "英语",
    "title": "分裂 Split",
    "text":'叹为惊止，一人拥有24重性格！',
    "poster": "https://s2.ax1x.com/2019/11/06/MPJK9e.jpg",
    "logo":"https://s2.ax1x.com/2019/11/06/MPJnhD.jpg",
    "writers": "M·奈特·沙马兰",
    "directors": "M·奈特·沙马兰",
    "actors": "詹姆斯·麦卡沃伊/安雅·泰勒-乔伊/贝蒂·巴克利/海莉·露·理查森",
    "year": "2016",
    "country": "美国",
    "releaseTime": "2016-12-26",
    "loveNum":444,
    "loveState":0
}

  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
