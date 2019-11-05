<template>
  <div class="tab">
    <router-link to="/home" class="aaa">
      <a class="link">
        <i class="icon"></i>
        <span>发现</span>
      </a>
    </router-link>
    <router-link to="/myMovies" class="aaa">
      <a class="link">
        <i class="icon"></i>
        <span>我的电影</span>
      </a>
    </router-link>
    <router-link to="/mine" class="aaa">
      <a class="link">
        <i class="icon"></i>
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
  bottom: 10px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 0.51rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  .aaa {
    text-decoration: none;
  }
  .link {
    display: flex;
    position: relative;
    text-decoration: none;
    .icon {
      position: absolute;
      left: -0.3rem;
      flex-direction: row;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../assets/images/img.png") no-repeat;
      background-size: 0.5rem;
    }

    span {
      font-size: 14px;
      line-height: 0.51rem;
      padding-left: 0.3rem;
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