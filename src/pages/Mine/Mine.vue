<template>
  <div class="container">
    <div class="container-top">
      <van-nav-bar title="账号" left-text></van-nav-bar>
      <img src="../../assets/images/topright.png" alt srcset />
    </div>
    <div class="heard">
      <div class="heard-left">
        <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <p class="p">王者荣耀</p>
      <img
        src="../../assets/images/01.png"
        style="width:.6rem; height:.6rem; margin-left:2.5rem; margin-top:.6rem"
      />
    </div>

    <!-- 信息列表 -->
    <div class="information">
      <img class="img" src="../../assets/images/02.png" alt srcset />
      <p class="p">我的消息</p>
      <img
        src="../../assets/images/01.png"
        style="width:.6rem; height:.6rem;margin-left:4rem; margin-top:.2rem"
      />
    </div>
    <router-link to="/loveMovies">
      <span class="likemove">
        <img class="img" src="../../assets/images/02.png" alt srcset />
        <p class="p">我喜欢的影单</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.6rem; margin-top:.2rem"
        />
      </span>
    </router-link>
    <div class="Contribute">
      <img class="img" src="../../assets/images/02.png" alt srcset />
      <p class="p">我的消息</p>
      <img
        src="../../assets/images/01.png"
        style="width:.6rem; height:.6rem;margin-left:4.2rem; margin-top:.2rem"
      />
    </div>
    <router-link to="/loveCards">
      <div class="Contribute">
      <img class="img" src="../../assets/images/02.png" alt srcset />
      <p class="p">我喜欢的电影卡片</p>
      <img
        src="../../assets/images/01.png"
        style="width:.6rem; height:.6rem;margin-left:3rem; margin-top:.2rem"
      />
    </div>
    </router-link>
    <!-- 第二个信息列表 -->
    <router-link to="/loveMovies">
      <span class="likemove">
        <img class="img" src="../../assets/images/02.png" alt srcset />
        <p class="p">邀请好友使用</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.6rem; margin-top:.2rem"
        />
      </span>
    </router-link>
    <div class="Contribute">
      <img class="img" src="../../assets/images/02.png" alt srcset />
      <p class="p">给我们评分吧</p>
      <img
        src="../../assets/images/01.png"
        style="width:.6rem; height:.6rem;margin-left:3.5rem; margin-top:.2rem"
      />
    </div>
    <router-link to="/loveCards">
      <div class="Contribute">
      <img class="img" src="../../assets/images/02.png" alt srcset />
      <p class="p">向我们吐槽</p>
      <img
        src="../../assets/images/01.png"
        style="width:.6rem; height:.6rem;margin-left:3.8rem; margin-top:.2rem"
      />
    </div>
    </router-link>
    <!-- <router-link to="/password">修改密码</router-link> -->
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
.container {
  width: 100%;
  background-color: rgba(189, 187, 187, 0.356);

  .container-top {
    height: 1.2rem;
    line-height: 1rem;
    border-bottom: .001rem solid #9999;
    display: flex;
    background-color: white;
  }
  .van-nav-bar__title {
    width: 2rem;
    font-size: .2rem;
    color: rgba(56, 56, 56, 0.459);
    margin-left: 2.8rem;
    margin-top: 0.2rem;
  }
  .container-top > img {
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 1.6rem;
    margin-top: 0.4rem;
  }

  .heard {
    width: 100%;
    height: 2.5rem;
    background-color: white;
    display: flex;
    .p {
      font-size: .2rem;
      margin-top: 0.8rem;
      margin-left: 0.3rem;
    }
    .heard-left {
      width: 1.6rem;
      height: 1.5rem;
      margin-left: 0.5rem;
      margin-top: 0.4rem;
      border-radius: 15%;
      .heard-left > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .information {
    width: 100%;
    height: 1rem;

    margin-top: 0.3rem;
    background: white;
    display: flex;
    .img {
      width: 0.6rem;
      height: 0.6rem;
      float: left;
      margin-top: 0.2rem;
      margin-left: 0.5rem;
    }
    .p {
      font-size: 18px;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
  }
  .likemove {
    width: 100%;
    height: 1rem;
    margin-top: 0.3rem;
    background: white;
    display: flex;
    .img {
      width: 0.6rem;
      height: 0.6rem;
      float: left;
      margin-top: 0.2rem;
      margin-left: 0.5rem;
    }
    .p {
      font-size: .3rem;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
  }
  .Contribute {
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    .img {
      width: 0.6rem;
      height: 0.6rem;
      float: left;
      margin-top: 0.2rem;
      margin-left: 0.5rem;
    }
    .p {
      font-size: .3rem;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
  }
}
</style>