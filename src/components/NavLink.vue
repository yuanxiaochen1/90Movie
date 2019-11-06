<template>
  <div class="tab">
    <router-link to="/home" class="aaa">
      <a class="link">
        <i class="icon1"></i>
        <span>发现</span>
      </a>
    </router-link>
    <router-link to="/myMovies" class="aaa">
      <a class="link">
        <i class="icon2"></i>
        <span>我的电影</span>
      </a>
    </router-link>
    <router-link to="/mine" class="aaa">
      <a class="link">
        <i class="icon3"></i>
        <span>账号</span>
      </a>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavLink",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.tab {
  box-sizing: border-box;
  position: fixed;
  border-top: 0.01px solid gray;
  bottom: 0;
<<<<<<< HEAD
=======
=======
  border-top: 0.1px solid gray;
  bottom: 0px;
>>>>>>> 08d0abbd318b4988687b33464a16d73868bde261
>>>>>>> d445dedfa7eaee811233938a7ee3ee9c3e4dbf8a
  left: 0;
  z-index: 10;
  width: 100%;
  height: 6%;
  background-color: rgb(255, 255, 255);
  padding-top: 0.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  .aaa {
    height: 100%;
    text-decoration: none;
  }
  .link {
    display: flex;
    position: relative;
    text-decoration: none;
    .icon1 {
      position: absolute;
      left: 0.1rem;
      flex-direction: row;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../assets/images/faxian.png") no-repeat;
      background-size: 0.5rem;
    }
    .icon2 {
      position: absolute;
      left: 0.1rem;
      flex-direction: row;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../assets/images/电影.png") no-repeat;
      background-size: 0.5rem;
    }
    .icon3 {
      position: absolute;
      left: 0.1rem;
      flex-direction: row;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../assets/images/zhanghao.png") no-repeat;
      background-size: 0.5rem;
    }

    span {
      font-size: 14px;
      line-height: 0.51rem;
      padding-left: 0.7rem;
      text-decoration: none;
      color: rgb(127, 127, 127);

      &:hover {
        color: rgb(132, 95, 63);
      }
    }
  }

  .link:nth-child(1) {
    .icon {
      background-position: 0 0;
      margin-left: 4px;
    }

    &.active {
      .icon {
        background-position: 0 11%;
      }
    }
  }

  .link:nth-child(2) {
    .icon {
      background-position: 0 22%;
      margin-left: 3px;
    }

    &.active {
      .icon {
        background-position: 0 33%;
      }
    }
  }

  .link:nth-child(4) {
    .icon {
      background-position: 0 89%;
      margin-left: 2px;
    }

    &.active {
      .icon {
        background-position: 0 99.5%;
      }
    }
  }
}
</style>