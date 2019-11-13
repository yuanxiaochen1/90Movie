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
        <p class="p" v-html="$store.state.user?$store.state.user.userName:'游客'"></p>
        <router-link to="/user">
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem; margin-left:2.7rem; margin-top:.6rem"
        />
        </router-link>
      </div>

      <!-- 信息列表 -->

      <div class="information">
        <img class="img" src="../../assets/images/mine-xx.png" alt srcset />
        <p class="p" style="color:gray">我的消息</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:4.2rem; margin-top:.2rem"
        />
      </div>
      <router-link to="/loveMovies">
        <span class="likemove">
          <img class="img" src="../../assets/images/02.png" alt srcset />
          <p class="p" style="color:gray">我喜欢的影单</p>
          <img
            src="../../assets/images/01.png"
            style="width:.6rem; height:.6rem;margin-left:3.6rem; margin-top:.2rem"
          />
        </span>
      </router-link>
      <div class="Contribute">
        <img class="img" src="../../assets/images/mine-xx.png" alt srcset />
        <p class="p" style="color:gray">我投稿的影单</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.6rem; margin-top:.2rem"
        />
      </div>
      <router-link to="/loveCards">
        <div class="Contribute">
          <img class="img" src="../../assets/images/mine-kp.png" alt srcset />
          <p class="p" style="color:gray">我喜欢的电影卡片</p>
          <img
            src="../../assets/images/01.png"
            style="width:.6rem; height:.6rem;margin-left:3rem; margin-top:.2rem"
          />
        </div>
      </router-link>
      <!-- 第二个信息列表 -->
      <span class="likemove">
        <img class="img" src="../../assets/images/mine-yq.png" alt srcset />
        <p class="p" style="color:gray">邀请好友使用</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.6rem; margin-top:.2rem"
        />
      </span>
      <div class="Contribute">
        <img class="img" src="../../assets/images/mine-pf.png" alt srcset />
        <p class="p" style="color:gray">给我们评分吧</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.5rem; margin-top:.2rem"
        />
      </div>
      <div class="Contribute">
        <img class="img" src="../../assets/images/mine-tc.png" alt srcset />
        <p class="p" style="color:gray">向我们吐槽</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:3.8rem; margin-top:.2rem"
        />
      </div>
      <div class="information">
        <img class="img" src="../../assets/images/mine-gy.png" alt srcset />
        <p class="p" style="color:gray">关于</p>
        <img
          src="../../assets/images/01.png"
          style="width:.6rem; height:.6rem;margin-left:4.6rem; margin-top:.2rem"
        />
      </div>
      <button class="button1" @click="xiugai">修改密码</button>
      <button class="button" @click="goOut">退出登录</button>
      <!-- <router-link to="/password">修改密码</router-link> -->
    </div>
    <van-overlay :show="show" class="over">
      <!-- 头部 -->
      <van-nav-bar title="修改密码" class="top">
        <van-icon slot="left" @click="back">
          <img src="../../assets/images/return.png" alt />
        </van-icon>
      </van-nav-bar>

      <div class="logo">
        <img src="../../assets//images/about_logo.png" alt="">
      </div>
      <!-- 注册子页面 -->
      <div class="login">
        <!-- 输入框 -->
        <van-cell-group>
          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            @focus="qingchu1"
          />
          <van-field
            v-model="passwordTwo"
            type="password"
            label="确认密码"
            placeholder="请再次输入密码"
            required
            :error-message="ErrorPassWord"
            @focus="qingchu1"
          />
        </van-cell-group>
        <!-- 按钮 -->
        <button class="button3" @click="xg">提交</button>
      </div>
    </van-overlay>
    <!-- 遮罩层结束 -->
    <nav-link></nav-link>
  </div>
</template>
<script>
import md5 from "blueimp-md5";
import { Dialog,Toast } from "vant";
import { tuichu, xiugai } from "../../api/index";
import NavLink from "../../components/NavLink.vue";
export default {
  data() {
    return {
      show: false,
      password: "",
      passwordTwo: "",
      ErrorPassWord: ""
    };
  },
  components: {
    NavLink
  },
  methods: {
    goOut() {
      if (this.$store.state.user) {
        Dialog.confirm({
          title: "提示",
          message: "确定要退出吗？"
        })
          .then(() => {
            tuichu().then(result => {
              if (result.code == 0) {
                location.href = location.origin;
              }
            });
          })
          .catch(() => {});
        return;
      }
      Dialog.confirm({
        title: "标题",
        message: "请你先登录"
      })
        .then(() => {
          location.href = location.origin;
        })
        .catch(() => {});
    },
    yz() {
      //表单验证
      if (this.password == "") {
        this.ErrorPassWord = "密码不能为空";
        this.qingchu2();
        return false;
      }
      if (!/^\w{6,16}$/.test(this.password)) {
        this.ErrorPassWord = "密码格式不正确";
        this.qingchu2();
        return false;
      }
      if (this.password !== this.passwordTwo) {
        this.ErrorPassWord = "两次密码不一样";
        this.qingchu2();
        return false;
      }
      return true;
    },
    xiugai() {
       if(!this.$store.state.user){
         Dialog.confirm({
        title: "提示",
        message: "您还为登陆，请登陆后重试！"
      })
        .then(() => {
            location.href=location.origin+'#/'
        })
        return
      }
      this.show = true;
    },
    back() {
      this.qingchu1();
      this.qingchu2();
      this.show = false;
    },
    qingchu1() {
      this.ErrorPassWord = "";
    },
    qingchu2() {
      this.password = "";
      this.passwordTwo = "";
    },
    xg() {
      if (!this.yz()) {
        return;
      }
      let a = md5(this.password);
      Dialog.confirm({
        title: "提示",
        message: "确定要修改密码吗？"
      })
        .then(() => {
          xiugai(a) .then(result => {
              if (result.code == 0) {
                this.qingchu2();
                this.show = false;
                Toast.success('修改成功');
                return;
              }
              return Promise.reject();
            })
            .catch(() => {
              Toast.fail("修改密码失败！");
              this.qingchu1();
              this.qingchu2();
            });
        });
    }
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
    color: black;
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
  .button1 {
    width: 100%;
    height: 1rem;
    background-color: white;
    margin-top: 0.2rem;
    color: red;
    font-size: 0.35rem;
    border: none;
  }
  .button {
    width: 100%;
    height: 1rem;
    background-color: white;
    margin-top: 0.2rem;
    color: red;
    font-size: 0.35rem;
    margin-bottom: 0.5rem;
    border: none;
  }
  .over {
    background: rgba(189, 187, 187, 0.8);
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
    .logo{
      height: 20%;
      width: 30%;
      margin: 30% auto 0;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .login {
      width: 70%;
      margin: 2rem auto;
      .button3 {
        width: 4rem;
        height: 1rem;
        margin: 0.5rem auto 0;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.2rem;
        color: black;
        border: 0.03rem black solid;
      }
    }
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