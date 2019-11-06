<template>
  <div class="container">
    <van-nav-bar title="我喜欢的电影">
      <van-icon slot="left" @click="back">
        <img src="../../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="main">
      <div class="mian-content">
        <img src="../../assets/images/xihuan.png" alt />
        <br />
        <span class="span1">39</span>
      </div>
      <span class="span2">泪目！一代人终将长大，但总有人正少年</span>
    </div>
    <div class="main">
      <div class="mian-content">
        <img src="../../assets/images/xihuan.png" alt />
        <br />
        <span class="span1">39</span>
      </div>
      <span class="span2">泪目！一代人终将长大，但总有人正少年</span>
    </div>
    <div class="main">
      <div class="mian-content">
        <img src="../../assets/images/xihuan.png" alt />
        <br />
        <span class="span1">39</span>
      </div>
      <span class="span2">泪目！一代人终将长大，但总有人正少年</span>
    </div>
    
  </div>
</template>
<script>
import router from "../../router/index";
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
.container {
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
  .main {
    margin-top: 0.2rem;
    width: 90%;
    height: 2.6rem;
    margin-left: 5%;
    background-image: url("../../assets/images/shaonian.png");
    background-size: 100% 120%;
    .span2 {
      display: block;
      margin-top: 1.1rem;
      margin-left: -0.8rem;
      color: white;
      font-size: 0.3rem;
    }
    .mian-content {
      width: 1rem;
      height: 1rem;
      margin-left: 5.2rem;
      background-color: rgba(0, 0, 0, 0.493);
      .span1 {
        opacity: 1;
        color: white;
        font-size: 0.3rem;
        padding-top: 0.2rem;
      }
    }
    img {
      top: 1.2rem;
      left: 5.8rem;
      height: 0.5rem;
      width: 0.5rem;
    }
  }
}
</style>