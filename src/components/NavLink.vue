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
  border-top: 0.01rem solid gray;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 7%;
  background-color: rgb(255, 255, 255);
  padding-top: 0.05rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  .aaa {
    height: 100%;
    width: 33%;
    text-decoration: none;
  }
  .link {
    display: flex;
    height: 100%;
    width: 100%;
    /* 垂直居中 */
    flex-direction:column;
     justify-content:center;
    text-decoration: none;
    .icon1 {
     margin: 0 auto 0.05rem;
      flex-direction: row;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../assets/images/faxian.png") no-repeat;
      background-size: 0.5rem;
    }
    .icon2 {
     margin: 0 auto 0.05rem;
      flex-direction: row;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../assets/images/电影.png") no-repeat;
      background-size: 0.5rem;
    }
    .icon3 {
    margin: 0 auto 0.05rem;
      flex-direction: row;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../assets/images/zhanghao.png") no-repeat;
      background-size: 0.5rem;
    }

    span {
      
     
      text-align: center;
      font-size: 14px;
      line-height: 0.2rem;
     
      text-decoration: none;
      color: black;

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