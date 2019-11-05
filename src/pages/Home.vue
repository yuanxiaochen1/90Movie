<template>
  <div class="container">
    首页
     <router-link to='/fenlei'>分类查找</router-link>
      <router-link to='/cards'>每日卡片</router-link>
       <router-link to='/yingyuan'>影院热映</router-link>
    <nav-link></nav-link>
  </div>
</template>
<script>
import NavLink from "../components/NavLink.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavLink
  }
};
</script>
<style lang="less" scoped>

</style>