import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
<template>
  <div class="container" >
    <van-nav-bar title="我的电影" />
    <van-tabs v-model="active" color='#000'>
      <van-tab title="想看" to="/myMovies/xiangSee" ></van-tab>
      <van-tab title="已看" to="/myMovies/yiSee"></van-tab>
      <van-tab title="影单" to="/myMovies/movies"></van-tab>
    </van-tabs>
    <nav-link></nav-link>
   <div style="height:80%;  overflow:auto;"><router-view></router-view></div>
  </div>
</template>
<script>
import NavLink from "../../components/NavLink.vue";
export default {
  data() {
    return { active: 0 };
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
  .van-nav-bar__title {
    font-size: 20px;
  }
}
.container{
  width: 100%;
  height: 100%;
  overflow:hidden;
}
</style>