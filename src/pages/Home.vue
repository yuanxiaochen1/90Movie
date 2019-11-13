<template>
  <div class="container">
    <van-nav-bar title="发现">
      <van-icon slot="right">
        <router-link to="/sousuo">
          <img src="../assets/images/search.png" alt />
        </router-link>
      </van-icon>
    </van-nav-bar>
    <div class="Navigation-box">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgs" :key="item.movieId">
          <img :src="item" alt class="img" />
        </van-swipe-item>
      </van-swipe>
      <div class="Navigation">
        <div>
          <router-link to="/fenlei" class="Navigation-name">
            <div>
              <img src="../assets/images/classification.png" alt />
            </div>
            <p>分类查找</p>
          </router-link>
        </div>
        <div>
          <router-link to="/cards" class="Navigation-name">
            <div>
              <img src="../assets/images/findcards.png" alt />
            </div>
            <p>每日电影卡片</p>
          </router-link>
        </div>
        <div>
          <router-link to="/yingyuan" class="Navigation-name">
            <div>
              <img src="../assets/images/findcinema.png" alt />
            </div>
            <p>影院热映</p>
          </router-link>
        </div>
      </div>

      <!-- 循环数据 -->
      <div class="find-card" v-for="(item) in $store.state.movies" :key="item.movieId">
        <router-link :to ="{path:'/info',query:{movieId:item.movieId}}">
          <div class="card-img">
            <img :src="item.logo" alt />
          </div>
        </router-link>
        <p v-html="item.text"></p>
        <div class="card-heart">
          <div @click="Choice(item)" :class="{active:item.loveState==1?true:false}"></div>
          <p v-html="item.loveNum"></p>
        </div>
      </div>

    </div>
    <nav-link></nav-link>
  </div>
</template>
<script>
import { Dialog } from 'vant';
import NavLink from "../components/NavLink.vue";
import { addLoveMvie, yanzheng, deleteMovies } from "../api/index";
export default {
  data() {
    return {
      imgs:['https://s2.ax1x.com/2019/11/12/M32Pwq.jpg','https://s2.ax1x.com/2019/11/12/M32bjJ.md.png','https://s2.ax1x.com/2019/11/12/M3gsy9.md.png','https://s2.ax1x.com/2019/11/12/M32m6J.md.png']
    };
  },
  methods: {
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
  components: {
    NavLink
  },
  beforeMount() {
    this.$store.dispatch("change");
    this.$store.dispatch('changeCards');
    this.$store.dispatch('changeNewMovies')
  }
};
</script>
<style lang="less" scoped>
.container {
  overflow: hidden;
  height: 100%;
  width: 100%;
   background-color: rgba(189, 187, 187, 0.356);
  .Navigation-box {
    overflow: auto;
    width: 100%;
    height: 85.5%;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .van-nav-bar {
    height: 1rem;
    line-height: 1rem;
    .van-nav-bar__right img {
      width: 0.6rem;
    }
    .van-nav-bar__title {
      font-size: 20px;
    }
  }
  .van-swipe {
    height: 3.6rem;
  }
  .Navigation {
    width: 100%;
    height: 2.2rem;
    display: flex;
    div {
      width: 33.3%;
      background-color: white;
      div {
        margin: 0 auto;
        margin-top: 0.4rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 1px solid #515151;
        img {
          width: 0.6rem;
          margin: 0 auto;
          margin-top: 0.2rem;
        }
      }
      p {
        font-size: 0.26rem;
        font-weight: 600;
        margin: 0 auto;
        margin-top: 0.15rem;
        color: black;
      }
    }
  }
  .find-card {
    width: 100%;
    height: 4.85rem;
    background-color: white;
    margin-top: 0.2rem;
    .card-img {
      width: 100%;
      height: 3.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin: 0 auto;
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }

    .card-heart {
      height: 0.4rem;
      display: flex;
      width: 18%;
      margin: 0 auto;
      margin-top: 0.2rem;
      line-height: 0.4rem;
      div {
        height: 0.4rem;
        width: 0.4rem;
        background: url("../assets/images/grayheart.png");
        background-size: 100%;
      }
      .active {
        background: url("../assets/images/redheart.png");
        background-size: 100%;
      }
      p {
        display: block;
        margin-top: 0;
      }
    }
  }
}
</style>