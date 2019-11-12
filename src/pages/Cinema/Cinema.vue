<template>
  <div class="containner">
    <van-nav-bar>
      <van-icon slot="title">
        <div :class="{'cinema-title-box':true, active:flag==0?true:false}" @click="go(0)">
          <router-link to="/yingyuan/re" class="cinema-title">
            <p>热映</p>
          </router-link>
        </div>
        <div class="cinema-title-line"></div>
        <div :class="{'cinema-title-box':true, active:flag==1?true:false}" @click="go(1)">
          <router-link to="/yingyuan/dai" class="cinema-title">
            <p>待映</p>
          </router-link>
        </div>
      </van-icon>
      <van-icon slot="left" @click="back">
        <img src="../../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <div style="height:90%;over-flow:auto;">
       <!-- 动画路由 -->
     <transition name="movies" mode="out-in">
      <router-view />
     </transition>
    </div>
  </div>
</template>
<script>
import router from "../../router/index";
export default {
  data() {
    return {
      flag: 0
    };
  },
  methods: {
    back() {
      router.push("/home");
    },
    go(i) {
      this.flag = i;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.movies-enter-active,
.movies-leave-active {
  transition:  0.1s ease;
}
.movies-enter{
transform: translateX(100%);
}
.movies-enter-to{
  transform: translateX(0%);
}
.movies-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
}
.containner {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.van-nav-bar {
  height: 1rem;
  .van-nav-bar__title i {
    top: -0.04rem;
    line-height: 1rem;
    height: 100%;
  }
  .cinema-title-line {
    display: inline-block;
    height: 0.3rem;
    border-left: 1px solid black;
  }
  //   设置标题
  .cinema-title-box {
    padding: 0 0.15rem;
    height: 100%;
    display: inline-block;
  }
  .active {
    border-bottom: 0.03rem solid black;
  }
  .cinema-title p {
    font-size: 20px;
    color: black;
  }
  .van-nav-bar__left img {
    width: 0.4rem;
  }
}
</style>