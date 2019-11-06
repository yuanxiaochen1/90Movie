
<template>
  <div>
    <van-nav-bar title="我喜欢的电影卡片">
      <van-icon slot="left" @click="back">
        <img src="../../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="cards-img">
      <div class="cards">
        <img src="../../assets/images/feiwu.jpeg" alt />
        <div class="cards-span">
          <span>我想有一天和你去旅行，去那没有过的地方，没有行李和没有手机</span>
        </div>
        <div>
          <span>————《飞屋环游记》</span>
        </div>
      </div>
      <div class="cards">
        <img src="../../assets/images/feiwu.jpeg" alt />
        <div class="cards-span">
          <span>我想有一天和你去旅行，去那没有过的地方，没有行李和没有手机</span>
        </div>
        <div>
          <span>————《飞屋环游记》</span>
        </div>
      </div>
      <div class="cards">
        <img src="../../assets/images/feiwu.jpeg" alt />
        <div class="cards-span">
          <span>我想有一天和你去旅行，去那没有过的地方，没有行李和没有手机</span>
        </div>
        <div>
          <span>————《飞屋环游记》</span>
        </div>
      </div>
      <div class="cards">
        <img src="../../assets/images/feiwu.jpeg" alt />
        <div class="cards-span">
          <span>我想有一天和你去旅行，去那没有过的地方，没有行李和没有手机</span>
        </div>
        <div>
          <span>————《飞屋环游记》</span>
        </div>
      </div>
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
.cards-img {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .cards {
    margin: 2% 2%;
    width: 42%;
    height: 3.5rem;
    border: 1px solid gray;
    box-shadow: 0.02rem 0.02rem 0.02rem #888888;
    .cards-span {
      width: 100%;
      height: 0.7rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      span {
        font-size: 0.2rem;
      }
    }
    img {
      width: 100%;
      height: 70%;
    }
  }
}
</style>