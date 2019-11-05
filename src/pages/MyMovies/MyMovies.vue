<template>
    <div>
       我的电影
       <router-link to='/myMovies/xiangSee'>想看</router-link>
       <router-link to='/myMovies/yiSee'>已经看</router-link>
       <router-link to='/myMovies/movies'>影单</router-link>
    <router-view />
       <nav-link></nav-link>
    </div>
    
</template>
<script>
import NavLink from "../../components/NavLink.vue";
export default {
    data(){
        return{

        }
    },
    components:{
     NavLink
  }
}
</script>
<style lang="less" scoped>

</style>