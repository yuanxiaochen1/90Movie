<template>
  <div>
    <van-nav-bar>
      <van-icon slot="title">
        <div :class="{'cinema-title-box':true, active:flag==0?true:false}" @click="go(0)">
          <router-link to="/yingyuan/re" class="cinema-title" >
            <p>热映</p>
          </router-link>
        </div>
        <div class="cinema-title-line"></div>
        <div :class="{'cinema-title-box':true, active:flag==1?true:false}" @click="go(1)">
          <router-link to="/yingyuan/dai" class="cinema-title"  >
            <p>待映</p>
          </router-link>
        </div>
      </van-icon>
      <van-icon slot="left" @click="back">
        <img src="../../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <router-view />
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
      router.push('/home');
    },go(i){
      this.flag=i
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
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