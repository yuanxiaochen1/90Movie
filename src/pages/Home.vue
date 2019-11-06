<template>
  <div class="container">
    <van-nav-bar title="发现">
      <van-icon slot="right">
        <img src="../assets/images/search.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="Navigation-box">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item style="background:blue">1</van-swipe-item>
        <van-swipe-item style="background:red">2</van-swipe-item>
        <van-swipe-item style="background:yellow">3</van-swipe-item>
        <van-swipe-item style="background:pink">4</van-swipe-item>
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
      <div class="find-card">
        <div class="card-img">
          <img src="../assets/images/findcardimg.jpg" alt />
        </div>
        <p>此处省略一万字。。。</p>
        <div class="card-heart">
          <div @click="Choice" :class="{active:background_num==1?true:false}"></div>
          <p>99</p>
        </div>
      </div>
      <div class="find-card">
        <div class="card-img">
          <img src="../assets/images/findcardimg.jpg" alt />
        </div>
        <p>此处省略一万字。。。</p>
        <div class="card-heart">
          <div @click="Choice" :class="{active:background_num==1?true:false}"></div>
          <p>99</p>
        </div>
      </div>
    </div>
    <nav-link></nav-link>
  </div>
</template>
<script>
import NavLink from "../components/NavLink.vue";
export default {
  data() {
    return {
      background_num: 0
    };
  },
  methods: {
    Choice() {
      this.background_num == 0
        ? (this.background_num = 1)
        : (this.background_num = 0);
    }
  },
  components: {
    NavLink
  }
};
</script>
<style lang="less" scoped>
.container {
  overflow: hidden;
  height: 100%;
  width: 100%;
  .Navigation-box{
    overflow: auto;
    width: 100%;
    height: 88%
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
      background-color: red;
      overflow: hidden;
      img {
        width: 100%;
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
      width: 15%;
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