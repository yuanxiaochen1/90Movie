<template>
  <div class="container">
    <van-nav-bar title="账号">
      <van-icon slot="right">
        <img src="../../assets/images/setup.png" alt />
      </van-icon>
    </van-nav-bar>个人中心
    <router-link to="/loveMovies">喜欢的影单</router-link>
    <router-link to="/loveCards">喜欢的卡片</router-link>
    <router-link to="/password">修改密码</router-link>
    <nav-link></nav-link>
  </div>
</template>
<script>
import NavLink from "../../components/NavLink.vue";
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
.van-nav-bar {
  height: 1rem;
  line-height: 1rem;
  .van-nav-bar__right img {
    width: 0.4rem;
  }
  .van-nav-bar__title {
    font-size: 20px;
  }
}
</style>