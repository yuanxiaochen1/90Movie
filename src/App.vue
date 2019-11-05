<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeMount() {
    let evt = "onorientationchange" in window ? "orientationchange" : "resize";
    function computed() {
      let HTML = document.documentElement,
        deviceW = HTML.clientWidth,
        designW = 750,
        ratio = (deviceW / designW) * 100;
      if (deviceW >= designW) ratio = 100;
      HTML.style.fontSize = ratio + "px";
    }
    computed();
    window.addEventListener(evt, computed);
  }
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
<<<<<<< HEAD
  font-size: 14px;
=======
>>>>>>> 7ca221c8ec2736bcad9a26adb6b7c8cb7e5014e0
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
<<<<<<< HEAD
  height: 13.5rem;
=======
  height: 100%;
>>>>>>> 545460f6b810cffb0ad8b6da3a899c11757abef7
}

#nav {
  padding: 0.3rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
