<template>
  <div>
    个人中心
    <router-link to='/loveMovies'>喜欢的影单</router-link>
    <router-link to='/loveCards'>喜欢的卡片</router-link>
    <router-link to='/password'>修改密码</router-link>
    <nav-link></nav-link>
  </div>
</template>
<script>
import NavLink from "../../components/NavLink.vue";
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