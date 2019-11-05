<template>
  <div class="container">
    <van-nav-bar title="发现">
      <van-icon slot="right">
        <img src="../assets/images/search.png" alt="">
      </van-icon>
    </van-nav-bar>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>首页
    <router-link to="/fenlei">分类查找</router-link>
    <router-link to="/cards">每日卡片</router-link>
    <router-link to="/yingyuan">影院热映</router-link>
    <nav-link></nav-link>
  </div>
</template>
<script>
import NavLink from "../components/NavLink.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavLink
  }
};
</script>
<style lang="less" scoped>
.van-nav-bar{
  height: 1rem;
  line-height: 1rem;
  .van-nav-bar__right img{
    width: 0.6rem;
  }
  .van-nav-bar__title {
    font-size: 20px;
  }
}
.van-swipe {
  height: 3rem;
}
</style>