<template>
  <div class="container">
    <div class="header">
      <span class="span1">
        <img class="imgd" src="../assets/images/返回.png" alt /> 每日电影推荐
      </span>
      <span class="span2">如何制作</span>
    </div>
    <div class="main">
      <div class="main-img">
        <van-image width="95%" height="50%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <span class="span3">
        Some people are worth melting for.
        <br />有的人值得你去融化
      </span>
      <span class="span4">——冰雪奇缘</span>
    </div>
    <div class="footer">
      <img class="imga" src="../assets/images/电影.png" alt />
      <span class="span5">看电影</span>
      <img class="imgb" src="../assets/images/喜欢.png" alt />
      <img class="imgc" src="../assets/images/分享.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
.container {
  height: 13.5rem;
  width: 100%;
  position: relative;
  .header {
    position: absolute;
    height: 0.5rem;
    width: 100%;
    border-bottom: 0.001rem solid gray;
    .imgd {
      top: 0rem;
      left: -0.5rem;
      position: absolute;
      height: 0.4rem;
      width: 0.4rem;
    }
    .span1 {
      position: absolute;
      left: 0.5rem;
      font-size: 0.15rem;
      margin-left: 0.5rem;
    }
    .span2 {
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
    }
  }
  .main {
    position: absolute;
    top: 0.8rem;
    height: 10rem;
    width: 90%;
    left: 5%;
    border: 0.01rem solid gray;
    box-shadow: 0.04rem 0.04rem 0.04rem #888888;
    .main-img {
      padding-top: 0.1rem;
    }
    .span3 {
      font-size: 0.15rem;
    }
    .span4 {
      position: absolute;
      top: 9.5rem;
      right: 0.2rem;
      font-size: 0.15rem;
    }
  }
  .footer {
    position: absolute;
    bottom: 0.5rem;
    height: 1.5rem;
    width: 100%;
    right: 0.1rem;
    .imga {
      position: absolute;
      top: 0.3rem;
      left: 0.5rem;
      height: 0.7rem;
      width: 0.7rem;
    }
    .span5 {
      position: absolute;
      top: 0.5rem;
      left: 1.2rem;
      font-size: 0.15rem;
    }
    .imgb {
      left: 5rem;
      position: absolute;
      top: 0.3rem;
      height: 0.5rem;
      width: 0.5rem;
    }
    .imgc {
      position: absolute;
      top: 0.3rem;
      left: 6.5rem;
      height: 0.5rem;
      width: 0.5rem;
    }
  }
}
</style>