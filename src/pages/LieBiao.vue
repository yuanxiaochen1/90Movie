<template>
  <div class="container">
    <van-nav-bar :title="this.$route.query.type">
      <van-icon slot="left" @click="back">
        <img src="../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>

    <div class="tables-container" v-if="flag">

      <div class="tables-routers"  v-for="item in movies" :key='item.movieId'>
        <p class="tables-text" v-html="item.text"></p>
        <div class="tables-prefer">
          <div @click="Choice(item)" :class="{active:item.loveState==1?true:false}"></div>
          <p v-html="item.loveNum"></p>
        </div>
        <router-link :to ="{path:'/info',query:{movieId:item.movieId}}">
          <img class="tables-cards" :src="item.logo" alt />
        </router-link>
      </div>

      
    </div>
<div class="noMoviesBox" v-if="!flag">
      <div class="box">
        <img src="../assets/images/about_logo.png" alt="">
        <p >暂无此类型电影</p>
      </div>
      <div class="text">
        <p>暂无此类型电影</p>
      </div>
    </div>

  </div>
</template>
<script>
import { Dialog } from 'vant';
import { addLoveMvie, yanzheng, deleteMovies } from "../api/index";
import router from "../router/index";
export default {
  data() {
    return {
    };
  },
  methods: {
    back() {
      router.go(-1);
    },
    Choice(item) {
     /* 先验证是否登陆，为登陆直接跳转到登录页 */
      yanzheng().then(result => {
        if (result.code == 0) {
          /* 已经登陆 */
          if (item.loveState == 0) {
            /* 未收藏则派发请求收藏 */
            addLoveMvie(item.movieId, item.title)
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                alert(sea);
              });
          } else {
            /* 已收藏则派发请求取消收藏 */
            deleteMovies(item.movieId, "love")
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                alert(sea);
              });
          }
          return;
        }
        /* 未登录则直接跳转到登录页 */
        Dialog.alert({
          message: "未登录，请登陆重试"
        }).then(() => {
          location.href = location.origin;
        });
      });
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies.filter(item=>{
      return item.type.includes(this.$route.query.type)==1
    })
    },
    flag() {
      let a = this.$store.state.movies.filter(item=>{
      return item.type.includes(this.$route.query.type)==1
    })
      return a.length == 0 ? false : true;
    }
  },
  
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
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
  .tables-container{
    overflow: auto;
    width: 100%;
    height: 92.5%;
  .tables-routers {
    width: 100%;
    height: 3rem;
    margin-top: 0.2rem;
    position: relative;
    .tables-text {
      width: 88%;
      height: 0.4rem;
      position: absolute;
      top: 80%;
      left: 6%;
      font-size: 0.3rem;
      color: white;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .tables-prefer {
      position: absolute;
      width: 0.7rem;
      height: 0.95rem;
      margin-left: 83%;
      background-color: rgba(0, 0, 0, 0.507);
      border-radius: 0.1rem;
      p {
        font-size: 0.29rem;
        color: white;
        margin-top: 0.03rem;
      }
      div {
        width: 0.5rem;
        height: 0.5rem;
        background: url("../assets/images/lineredheart.png");
        margin: 0 auto;
        background-size: 100%;
      }
      .active {
        background: url("../assets/images/redheart.png");
        background-size: 100%;
      }
    }
    .tables-cards {
      width: 94%;
      height: 3rem;
      margin: 0 auto;
      border-radius: 0.1rem;
    }
  }
  }
   .noMoviesBox {
    height: 100%;
    width: 100%;
    padding-top: 40%;
    padding-left: 35%;
    .box {
      height: 20%;
      width: 30%;
      img{
        height: 50%;
    width: 60%;
      }
      p{
        font-weight: 600;
        margin-top: 10%;
        text-align: center;
        font-size: 0.3rem;
      }
    }
    .text{
       height: 6%;
      width: 80%;
      margin-top: 10%;
      margin-left: -25%;
       background: rgba(170, 167, 167,0.2);
       border-radius: 0.1rem;
      padding-top: 2.5%;
      p{
        height: 100%;
    width: 100%;
    text-align: center;
  font-size: 0.4rem;
      }
    }
  }
}
</style>