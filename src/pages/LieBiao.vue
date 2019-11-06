<template>
  <div class="container">
    <van-nav-bar title="科幻">
      <van-icon slot="left" @click="back">
        <img src="../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="tables-routers">
      <p class="tables-text">这个里面有一段话哈哈哈哈卧槽这个里面有一段话哈哈哈哈卧槽这个里面有一段话哈哈哈哈卧槽</p>
      <div class="tables-prefer">
        <div @click="Choice()" :class="{active:background_num==1?true:false}"></div>
        <p>99</p>
      </div>
      <router-link to="/info">
        <img class="tables-cards" src="https://s2.ax1x.com/2019/11/06/MPJnhD.jpg" alt />
      </router-link>
    </div>
  </div>
</template>
<script>
import router from "../router/index";
export default {
  data() {
    return {
      background_num: 0
    };
  },
  methods: {
    back() {
      router.go(-1);
    },
    Choice() {
      this.background_num == 0
        ? (this.background_num = 1)
        : (this.background_num = 0);
    }
  },
  components: {}
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
</style>