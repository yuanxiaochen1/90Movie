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
  background-color: rgb(231, 231, 231);
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
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
