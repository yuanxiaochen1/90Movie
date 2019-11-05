<template>
  <div>
    <van-nav-bar title="每日电影卡片推荐">
      <van-icon slot="left" @click="back">
        <img src="../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
  </div>
</template>
<script>
import router from "../router/index";
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
</style>