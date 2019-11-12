<template>
  <div class="container">
    <van-nav-bar title="我的电影" />
    <van-tabs v-model="active" color="#000">
      <van-tab to="/myMovies/xiangSee">
        <div slot="title">
          <van-icon name="eye-o" style="margin-right:0.1rem" />想看
        </div>
      </van-tab>
      <van-tab  to="/myMovies/yiSee">
      <div slot="title">
          <van-icon name="eye" style="margin-right:0.1rem" />已看
        </div>
      </van-tab>
      <van-tab to="/myMovies/movies">
      <div slot="title">
          <van-icon name="like" style="margin-right:0.1rem" />收藏
        </div>
      </van-tab>
    </van-tabs>
    <nav-link></nav-link>
    <div style="height:80%;  overflow:auto;">
      <!-- 动画路由 -->
      <transition name="movies" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
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
.movies-enter-active,
.movies-leave-active {
  transition: 0.1s ease;
 
}
.movies-enter {
  transform: translateX(100%);
}
.movies-enter-to {
  transform: translateX(0%);
}
.movies-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
}
.van-nav-bar {
  height: 1rem;
  line-height: 1rem;
  .van-nav-bar__title {
    font-size: 20px;
  }
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>