<template>
  <div class="container">
    <!-- LOGO -->
    <div class="img">
      <img src="../assets/images/about_logo.png" alt srcset />
    </div>

    <!-- 登陆输入栏 -->
    <div class="box">
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        :error-message="ErrorUsername"
        @focus="qingchu1"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        @focus="qingchu1"
        :error-message="ErrorPassWord"
      />
    </div>
    <!-- 按钮 -->
    <button class="button1" @click="denglu">账户登陆</button>
    <button class="button2" @click="zhuce">手机注册</button>
    <router-link to="/home">
      <div class="button3">跳过</div>
    </router-link>
    <!-- 注册 遮罩层 -->
    <van-overlay :show="show" class="over">
      <!-- 头部 -->
      <van-nav-bar title="用户注册" class="top">
        <van-icon slot="left" @click="back">
          <img src="../assets/images/return.png" alt />
        </van-icon>
      </van-nav-bar>
      <!-- 注册子页面 -->
      <div class="login">
        <!-- 输入框 -->
        <van-cell-group>
          <van-field
            v-model="name"
            required
            clearable
            label="昵称"
            placeholder="请输入昵称"
            @focus="qingchu1"
          />
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
            :error-message="ErrorUsername"
            @focus="qingchu1"
          />
          <van-field
            v-model="phone"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
            :error-message="ErrorPhone"
            @focus="qingchu1"
          />

          <van-cell-group>
            <van-field v-model="yzm" center clearable label="验证码" required placeholder="请输入验证码">
              <van-button slot="button" size="small" type="primary" @click="fs" :text="button"></van-button>
            </van-field>
          </van-cell-group>

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
        <button class="button3" @click="zc">注册</button>
      </div>
    </van-overlay>
    <!-- 遮罩层结束 -->
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
import { denglu, zhuce, zcyanzheng } from "../api/index";
import md5 from "blueimp-md5";
Vue.use(Toast);
export default {
  data() {
    return {
      show: false,
      username: "",
      password: "",
      passwordTwo: "",
      ErrorUsername: "",
      ErrorPassWord: "",
      ErrorPhone: "",
      name: "",
      phone: "",
      yzm: "",
      button: "发送"
    };
  },
  components: {},
  methods: {
    zhuce() {
      this.qingchu2();
      this.qingchu1();
      this.show = true;
    },
    yz() {
      //表单验证
      if (this.username == "") {
        this.ErrorUsername = "用户名不能为空";
        this.qingchu2();
        return false;
      }
      if (this.password == "") {
        this.ErrorPassWord = "密码不能为空";
        this.qingchu2();
        return false;
      }
      if (!/^[a-zA-Z0-9]{6,12}$/.test(this.username)) {
        this.ErrorUsername = "用户名应为6-12位的字母或数字";
        this.qingchu2();
        return false;
      }
      if (!/^\w{6,16}$/.test(this.password)) {
        this.ErrorPassWord = "密码格式不正确";
        this.qingchu2();
        return false;
      }
      return true;
    },
    zc() {
      if (this.password !== this.passwordTwo) {
        this.ErrorPassWord = "两次密码不一致";
        this.qingchu2();
        return false;
      }
      if (!this.yz()) {
        return;
      }
      let a = md5(this.password);
      zhuce(this.name, this.username, a, this.phone)
        .then(result => {
          if (result.code == 0) {
            this.show = false;
            this.qingchu2();
            Toast.success("注册成功");
            return;
          }
          return Promise.reject();
        })
        .catch(() => {
          Toast.erroe("注册失败");
        });
    },
    fs() {
      //表单验证
      if (this.username == "") {
        this.ErrorUsername = "用户名不能为空";
        return;
      }
      if (!/^[a-zA-Z0-9]{6,12}$/.test(this.username)) {
        this.ErrorUsername = "用户名应为6-12位的字母或数字";
        return;
      }
      if (this.phone == "" || !/^1\d{10}$/.test(this.phone)) {
        this.ErrorPhone = "手机号格式不正确";
        return;
      }
      zcyanzheng(this.username, this.phone)
        .then(result => {
          if (result.code == 0) {
            let a = 60;
            let timer = setInterval(() => {
              a--;
              this.button = a.toString();
              if (a < 55) {
                this.button = "发送";
                this.yzm = result.codeText;
                clearInterval(timer);
              }
            }, 1000);
            return;
          }
          return Promise.reject(result.codeText)
        })
        .catch(codeText => {
          Toast({
            message: codeText,
            icon: "warning"
          });
        });
    },
    qingchu1() {
      this.ErrorUsername = "";
      this.ErrorPassWord = "";
      this.ErrorPhone = "";
    },
    qingchu2() {
      this.name = "";
      this.username = "";
      this.password = "";
      this.passwordTwo = "";
      this.phone = "";
      this.yzm=''
    },
    back() {
      this.qingchu1();
      this.qingchu2();
      this.show = false;
    },
    denglu() {
      if (!this.yz()) {
        return;
      }
      let a = md5(this.password);
      denglu(this.username, a)
        .then(result => {
          if (result.code == 0) {
            this.qingchu2();
            this.$store.dispatch("changeUser", {
              userId: result.userId,
              userName: result.userName,
              userPhone:result.phone,
              userAccount:result.account
            });
            window.location.href = location.origin + "/#/home";
            return;
          }
          return Promise.reject();
        })
        .catch(() => {
          Toast.fail("账号密码不对！");
          this.qingchu1();
          this.qingchu2();
        });
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  background-image: url(../assets/images/222.jpg);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
  .img {
    width: 80%;
    height: 30%;
    margin: 0 auto;
    padding-top: 50%;
    img {
      height: 30%;
      width: 30%;
      margin: 1rem auto 0;
    }
  }
  .box {
    width: 70%;
    margin: -0.5rem auto 0;
    .van-cell {
      background: rgba(255, 255, 255, 0.4);
      border-radius: 0.1rem;
    }
  }
  .button1 {
    width: 6rem;
    height: 1rem;
    margin: 0.5rem auto 0;
    background: rgba(255, 255, 255, 0);
    border-radius: 0.2rem;
    color: #fff;
    font-size: 0.3rem;
    border: 0.03rem white solid;
  }
  .button2 {
    width: 6rem;
    height: 1rem;
    margin: 0.5rem auto 0;
    background: rgba(255, 255, 255, 0);
    border-radius: 0.2rem;
    color: #fff;
    font-size: 0.3rem;
    border: 0.03rem white solid;
  }
  .button3 {
    width: 3rem;
    height: 0.5rem;
    margin: 0.4rem auto 0;
    text-align: center;
    line-height: 0.5rem;
    color: black;
    text-decoration: underline;
  }
  .over {
    background-image: url(../assets/images/111.jpg);
    background-size: 100% 100%;
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
    .login {
      width: 70%;
      margin: 5rem auto;
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
</style>