<template>
  <div class="container">
    <van-nav-bar title="账号">
      <van-icon slot="right">
        <img src="../../assets/images/setup.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="center">
      <div class="heard">
        <div class="heard-left">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <p class="p">王者荣耀</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem; margin-left:2.7rem; margin-top:.6rem"
        />
      </div>

      <!-- 信息列表 -->

      <div class="information">
        <img class="img" src="../../assets/images/mine-xx.png" alt srcset />
        <p class="p">我的消息</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:4.2rem; margin-top:.2rem"
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
        <img class="img" src="../../assets/images/mine-xx.png" alt srcset />
        <p class="p">我投稿的影单</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.6rem; margin-top:.2rem"
        />
      </div>
      <router-link to="/loveCards">
        <div class="Contribute">
          <img class="img" src="../../assets/images/mine-kp.png" alt srcset />
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
          <img class="img" src="../../assets/images/mine-yq.png" alt srcset />
          <p class="p">邀请好友使用</p>
          <img
            src="../../assets/images/01.png"
            style="width:.6rem; height:.6rem;margin-left:3.6rem; margin-top:.2rem"
          />
        </span>
      </router-link>
      <div class="Contribute">
        <img class="img" src="../../assets/images/mine-pf.png" alt srcset />
        <p class="p">给我们评分吧</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.5rem; margin-top:.2rem"
        />
      </div>
      <router-link to="/loveCards">
        <div class="Contribute">
          <img class="img" src="../../assets/images/mine-tc.png" alt srcset />
          <p class="p">向我们吐槽</p>
          <img
            src="../../assets/images/01.png"
            style="width:.6rem; height:.6rem;margin-left:3.8rem; margin-top:.2rem"
          />
        </div>
      </router-link>
      <div class="information">
        <img class="img" src="../../assets/images/mine-gy.png" alt srcset />
        <p class="p">关于</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:4.6rem; margin-top:.2rem"
        />
      </div>
      <button class="button">退出登录</button>
      <!-- <router-link to="/password">修改密码</router-link> -->
    </div>
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
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(189, 187, 187, 0.356);
  .container-top {
    height: 1.2rem;
    border-bottom: 0.1rem solid #9999;
    display: flex;
    background-color: white;
  }
  .center {
    overflow: auto;
    width: 100%;
    height: 88%;
  }
  .van-nav-bar__title {
    width: 2rem;
    color: rgba(56, 56, 56, 0.459);
    margin-left: 2.8rem;
  }
  .container-top > img {
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 1.6rem;
    margin-top: 0.3rem;
  }

  .heard {
    width: 100%;
    height: 2.5rem;
    background-color: white;
    display: flex;
    .p {
      font-size: 0.4rem;
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
    border-bottom: 0.01rem solid #9999;
    .img {
      width: 0.4rem;
      height: 0.4rem;
      float: left;
      margin-top: 0.3rem;
      margin-left: 0.5rem;
    }
    .p {
      font-size: 0.3rem;
      margin-top: 0.28rem;
      margin-left: 0.2rem;
    }
  }
  .likemove {
    width: 100%;
    height: 1rem;
    margin-top: 0.3rem;
    background: white;
    display: flex;
    border-bottom: 0.01rem solid #9999;
    .img {
      width: 0.4rem;
      height: 0.4rem;
      float: left;
      margin-top: 0.25rem;
      margin-left: 0.5rem;
    }
    .p {
      font-size: 0.3rem;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
  }
  .Contribute {
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    border-bottom: 0.01rem solid #9999;
    .img {
      width: 0.4rem;
      height: 0.4rem;
      float: left;
      margin-top: 0.2rem;
      margin-left: 0.5rem;
    }
    .p {
      font-size: 0.3rem;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
  }
  .button {
    width: 100%;
    height: 1rem;
    background-color: white;
    margin-top: 0.2rem;
    color: red;
    font-size: 0.4rem;
    margin-bottom: 1rem;
    border: none;
    
  }
}
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