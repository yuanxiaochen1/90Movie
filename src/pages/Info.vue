<template>
  <div class="InfoContainer">
    <van-nav-bar title="详情">
      <van-icon slot="left" @click="back">
        <img src="../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>

    <div class="box">
      <div class="imgBox">
        <div class="img">
          <img src="../assets/images/Info1.jpg" alt />
        </div>
      </div>

      <div class="main">
        <div class="top"></div>
        <div class="textBox">
          <div class="head">
            <div class="headBox" @click="open">
              <ul>
                <li><van-icon name="success" /></li>
                <li>想看</li>
                <li><van-icon name="arrow-down" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- 遮罩层 -->
    <van-overlay :show="show" @click="show = false">

    </van-overlay>
  </div>
</template>
<script>
import router from "../router/index";
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    back() {
      router.go(-1);
    },open(){
      this.show=true;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.InfoContainer {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .van-overlay{
    z-index: 999!important ;
  }
  .box {
    overflow: auto;
    height: 95%;
    width: 100%;
    .imgBox {
      position: fixed;
      height: 25%;
      width: 100%;
      z-index: 0;
      .img {
        height: 100%;
        width: 100%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .main {
      position: relative;
      z-index: 5;
      height: 95%;
      width: 100%;
      .top {
        height: 27%;
        width: 100%;
        opacity: 0;
      }
      .textBox {
        background: rgba(231, 231, 231);
        height: 73%;
        width: 100%;
        z-index: 5;
        .head {
          width: 100%;
          height: 10%;
          background: white;
          border-bottom: 0.01rem solid gray;
          padding-top: 0.2rem;
          .headBox {
            width: 25%;
            height: 70%;
            margin: 0 auto;
            border: 0.01rem solid black;
            border-radius: 0.1rem;
            ul {
              width: 100%;
              height: 100%;
              display: flex;
              li {
                width: 33%;
                height:100%;
                font-size: 0.1rem;
                color: black;
                text-align: center;
                line-height:0.65rem;
                &:nth-of-type(1){
                  font-size: 0.4rem;
                  line-height:0.8rem;
                }
                 &:nth-of-type(3){
                   font-weight: bolder;
                  font-size: 0.2rem;
                  line-height:0.7rem;
                }
              }
            }
          }
        }
      }
    }
  }

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
}
</style>