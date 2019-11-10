<template>
  <div class="FenLei">
    <van-nav-bar title="分类查找">
      <van-icon slot="left" @click="back">
        <img src="../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="box">
      <div class="One">
        <li class="OneLi">
          <ul>
            <div class="logo"><img src="../assets/images/type.png" alt="" srcset=""></div>类型
          </ul>

          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'科幻'}}" class="a">科幻</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'爱情'}}" class="a">爱情</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'动作'}}" class="a">动作</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'喜剧'}}" class="a">喜剧</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'悬疑'}}" class="a">悬疑</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'动画'}}" class="a">动画</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'记录'}}" class="a">记录</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'剧情'}}" class="a">剧情</router-link>
          </ul>
          <ul></ul>
          <ul></ul>
        </li>
      </div>
      <div class="Two">
        <li class="TwoLi">
          <ul>
            <div class="logo"><img src="../assets/images/earth.png" alt="" srcset=""> </div>地区
          </ul>

          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'大陆'}}" class="a">大陆</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'香港'}}" class="a">香港</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'英国'}}" class="a">英国</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'日本'}}" class="a">日本</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'韩国'}}" class="a">韩国</router-link>
          </ul>
          <ul>
            <router-link to="/liebiao"  class="a"></router-link>
          </ul>
        </li>
      </div>

      <div class="Three">
        <li class="ThreeLi">
          <ul>
            <div class="logo"> <img src="../assets/images/label.png" alt="" srcset=""> </div>标签
          </ul>

          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'热门'}}" class="a">热门</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'话题'}}" class="a">话题</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'每周一部'}}" class="a">每周一部</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'心情'}}" class="a">心情</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'演员'}}" class="a">演员</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'导演'}}" class="a">导演</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'文艺'}}" class="a">文艺</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'青春'}}" class="a">青春</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'励志'}}" class="a">励志</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'犯罪'}}" class="a">犯罪</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'惊悚'}}" class="a">惊悚</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'魔幻'}}" class="a">魔幻</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'战争'}}" class="a">战争</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'音乐'}}" class="a">音乐</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'影院'}}" class="a">影院</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'同性'}}" class="a">同性</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'灾难'}}" class="a">灾难</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'爱情'}}" class="a">爱情</router-link>
          </ul>
        </li>
      </div>

      <div class="Four">
        <li class="FourLi">
          <ul>
            <div class="logo"><img src="../assets/images/list.png" alt="" srcset=""> </div>榜单
          </ul>

          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'帝国杂志'}}" class="a">帝国杂志</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'IMDb'}}" class="a">IMDb</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'电影旬报'}}" class="a">电影旬报</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'BBC'}}" class="a">BBC</router-link>
          </ul>
          <ul>
            <router-link to="/liebiao"  class="a"></router-link>
          </ul>
          <ul>
            <router-link  to="/liebiao" class="a"></router-link>
          </ul>
        </li>
      </div>

      <div class="Five">
        <li class="FiveLi">
          <ul>
            <div class="logo"><img src="../assets/images/trophy.png" alt="" srcset=""></div>获奖
          </ul>

          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'奥斯卡'}}" class="a">奥斯卡</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'柏林电影节'}}" class="a">柏林电影节</router-link>
          </ul>
          <ul>
            <router-link :to ="{path:'/liebiao',query:{type:'戛纳电影节'}}" class="a">戛纳电影节</router-link>
          </ul>
          <ul>
            <router-link to="/liebiao" class="a"></router-link>
          </ul>
          <ul>
            <router-link to="/liebiao" class="a"></router-link>
          </ul>
          <ul>
            <router-link to="/liebiao" class="a"></router-link>
          </ul>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router/index";
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      router.go(-1);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.FenLei {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .van-nav-bar {
    height: 1rem;
    line-height: 1rem;
    //   设置标题
    .van-nav-bar__title {
      font-size: 20px;
    }
    .van-nav-bar__left img {
      width: 0.4rem;
    }
  }
  .box {
    overflow: auto;
    width: 100%;
    height: 95%;
    padding-top: 0.3rem;
    .One {
      box-sizing: border-box;
      width: 94%;
      height: 20%;
      margin: 0 auto;
      background: white;
      li {
        width: 100%;
        height: 100%;
        list-style: none;
        margin-bottom:-1px ;
        ul {
           margin:0px -1px -1px 0px ;
          list-style: none;
          font-size: 0.16rem;
          text-align: center;
          line-height: 0.8rem;
          color: gray;
          padding: 0;
          box-sizing: border-box;
          float: left;
          border: 0.001rem gray solid;
          width: 25%;
          height: 33.33%;
          &:nth-of-type(1) {
            line-height: 0.01rem;
            width: 25%;
            height: 65.5%;
          }
          .a {
            color: gray;
          }
          .logo {
            width: 60%;
            height: 60%;
          
            margin: 0.2rem auto;
            img{
              margin: 20% auto;
              height: 60%;
              width: 60%;
            }
          }
        }
      }
    }
    .Two {
      box-sizing: border-box;
      width: 94%;
      height: 13%;
      margin: 0.5rem auto;
      background: white;
      li {
        width: 100%;
        height: 100%;
        list-style: none;
         margin-bottom:-1px ;
        ul {
          margin:0px -1px -1px 0px ;
          list-style: none;
          font-size: 0.16rem;
          text-align: center;
          line-height: 0.8rem;
          color: gray;
          padding: 0;
          box-sizing: border-box;
          float: left;
          border: 0.001rem gray solid;
          width: 25%;
          height: 50%;
          &:nth-of-type(1) {
            line-height: 0.01rem;
            width: 25%;
            height: 98.5%;
          }
          .a {
            color: gray;
          }
          .logo {
            width: 60%;
            height: 60%;
        
            margin: 0.2rem auto;
             img{
              margin: 20% auto;
              height: 60%;
              width: 60%;
            }
          }
        }
      }
    }

    .Three {
      box-sizing: border-box;
      width: 94%;
      height: 34%;
      margin: 0.5rem auto;
      background: white;
      li {
        width: 100%;
        height: 100%;
        list-style: none;
         margin-bottom:-1px ;
        ul {
          margin:0px -1px -1px 0px ;
          box-sizing: border-box;
          list-style: none;
          font-size: 0.16rem;
          text-align: center;
          line-height: 0.8rem;
          color: gray;
          padding: 0;
          box-sizing: border-box;
          float: left;
          border: 0.001rem gray solid;
          width: 25%;
          height: 20%;
          &:nth-of-type(1) {
            box-sizing: border-box;
            line-height: 0.01rem;
            width: 25%;
            height: 39.2%;
          }
          .a {
            color: gray;
          }
          .logo {
            width: 60%;
            height: 60%;
      
            margin: 0.2rem auto;
             img{
               margin: 20% auto;
              height: 60%;
              width: 60%;
            }
          }
        }
      }
    }

    .Four {
      box-sizing: border-box;
      width: 94%;
      height: 13%;
      margin: 0.5rem auto;
      background: white;
      li {
        width: 100%;
        height: 100%;
        list-style: none;
         margin-bottom:-1px ;
        ul {
          margin:0px -1px -1px 0px ;
          list-style: none;
          font-size: 0.16rem;
          text-align: center;
          line-height: 0.8rem;
          color: gray;
          padding: 0;
          box-sizing: border-box;
          float: left;
          border: 0.001rem gray solid;
          width: 25%;
          height: 50%;
          &:nth-of-type(1) {
            line-height: 0.01rem;
            width: 25%;
            height: 98.5%;
          }
          .a {
            color: gray;
          }
          .logo {
            width: 60%;
            height: 60%;
         
            margin: 0.2rem auto;
             img{
               margin: 20% auto;
              height: 60%;
              width: 60%;
            }
          }
        }
      }
    }

    .Five {
      box-sizing: border-box;
      width: 94%;
      height: 13%;
      margin: 0.5rem auto 0.5rem;
      margin-bottom: 1rem;
      background: white;
      li {
        width: 100%;
        height: 100%;
        list-style: none;
       margin-bottom:-1px ;
        ul {
          margin:0px -1px -1px 0px ;
         
          list-style: none;
          font-size: 0.16rem;
          text-align: center;
          line-height: 0.8rem;
          color: gray;
          padding: 0;
          box-sizing: border-box;
          float: left;
          border: 0.001rem gray solid;
          width: 25%;
          height: 50%;
          &:nth-of-type(1) {
            line-height: 0.01rem;
            width: 25%;
            height: 98.5%;
          }
          .a {
            color: gray;
          }
          .logo {
            width: 60%;
            height: 60%;
            margin: 0.2rem auto;
             img{
              margin: 20% auto;
              height: 60%;
              width: 60%;
            }
          }
        }
      }
    }
  }
}
</style>