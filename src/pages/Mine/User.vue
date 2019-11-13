<template>
  <div class="container">
    <van-nav-bar title="账号管理">
      <van-icon slot="left" @click="back">
        <img src="../../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="box">
      <div class="item">
        <span class="left">头像</span>
        <span class="right">
          <van-image width="80%" height="80%" cover round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </span>
      </div>
      <div class="item1">
        <span class="left">昵称</span>
        <span class="right">
          {{$store.state.user?$store.state.user.userName:'游客'}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="item1">
        <span class="left">账号</span>
        <span class="right">
          {{$store.state.user?$store.state.user.userAccount:'请登陆'}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="item1">
        <span class="left">手机号</span>
        <span class="right">
          {{$store.state.user?$store.state.user.userPhone:'请登陆'}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </span>
      </div>
    </div>

    <p style="colre:black;font-size:0.3rem;text-align:left;height:2%;line-height:0.5rem;padding-left:0.1rem;">绑定第三方可以直接登录 <strong>90 Movie</strong></p>

     <div class="box1">
      
      <div class="item">
        <span class="left">微信</span>
        <span class="right">
         <van-switch v-model="checked1" active-color="#07c160" size='0.5rem'/>
        </span>
      </div>
      <div class="item">
        <span class="left">QQ</span>
        <span class="right">
         <van-switch v-model="checked2" active-color="#07c160" size='0.5rem'/>
        </span>
      </div>
      <div class="item">
        <span class="left">微博</span>
        <span class="right">
          <van-switch v-model="checked3" active-color="#07c160" size='0.5rem'/>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../../router/index";
export default {
  data() {
    return {
        checked1:false,
        checked2:false,
        checked3:false,
    };
  },
  methods: {
    back() {
      router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(241, 238, 238);
  .van-nav-bar {
    background: white;
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
  .box {
    margin-top: 5%;
    height: 35%;
    width: 100%;
    .item {
      height: 30%;
      width: 100%; 
      background: white;
      border-bottom: 0.01rem solid #9999;
      .left {
        height: 100%;
        width: 20%;
        float: left;
        text-align: center;
        line-height: 1.5rem;
        font-size: 0.3rem;
        color: gray;
      }
      .right {
        padding-right: 0.1rem;
        height: 100%;
        width: 20%;
        float: right;
        .van-image{
            margin-top: 10%;
        }
      }
    }
    .item1 {
      height: 23%;
      width: 100%;
      background: white;
      border-bottom: 0.01rem solid #9999;
      .left {
        height: 100%;
        width: 20%;
        float: left;
        text-align: center;
        line-height: 1rem;
        font-size: 0.3rem;
        color: gray;
      }
      .right {
        padding-right: 0.15rem;
        height: 100%;
        width: 50%;
        float: right;
        text-align: right;
        line-height: 1rem;
        font-size: 0.35rem;
        color: gray;
      }
    }
  }
  .box1 {
    margin-top: 5%;
    height: 35%;
    width: 100%;
     .item {
      height: 23%;
      width: 100%;
      background: white;
     border-bottom: 0.01rem solid #9999;
      .left {
        height: 100%;
        width: 20%;
        float: left;
        text-align: center;
        line-height: 1rem;
        font-size: 0.3rem;
        color: gray;
      }
      .right {
        height: 100%;
        width: 50%;
        float: right;
        .van-switch{
            float: right;
            margin: 7% 5% 0 0;
        }
      }
    }
    }
}
</style>