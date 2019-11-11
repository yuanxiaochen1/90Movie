<template>
  <div class="re-container">

    <!-- 循环绑定 -->
    <div class="re-container-a" v-for='item in movies' :key="item.movieId">
      
      <div class="re-container-a-left">
         <!-- 路由 -->
        <router-link :to="{path:'/info',query:{movieTitle:item.title}}">
        <img :src="item.poster" alt srcset style="width:100%;height:100%" />
        </router-link>
      </div>
      <div class="re-container-a-right">
         <!-- 路由 -->
        <router-link :to="{path:'/info',query:{movieTitle:item.title}}">
        <ul>
          <li v-html="item.title" style="color:black"></li>
          <li style="font-size:.25rem; margin-top:.2rem;color:#999;" v-html="item.releaseTime"></li>
          <li style="font-size:.25rem;color:#999;margin-top:.1rem" v-html="item.runtime+'分钟-'+item.type"></li>
        </ul>
        <div class="pf">
          <van-rate v-model="item.score" allow-half readonly />
          <li
            style=" display:block;list-style:none;font-size:.25rem;color:#999; margin-left:.2rem;margin-top:.05rem;"
           v-html="item.score+'分'"></li>
        </div>
        </router-link>
      </div>
    </div>
    
   
  </div>
</template>
<script>
export default {
  data() {
    return { 
     };
  },
  computed:{
      movies(){
        return this.$store.state.newMovies.filter(item=>{
          return item.state=='D'
        })
      }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.re-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  .re-container-a {
    width: 100%;
    height: 2.5rem;
    background-color: white;
    border-bottom: solid rgba(116, 115, 115, 0.521) 0.01rem;
    display: flex;
    .re-container-a-left {
      width: 20%;
      height: 80%;
      margin-left: 0.3rem;
      margin-top: 2.5%;
    }
    .re-container-a-right {
      width: 80%;
      height: 100%;
      ul {
        display: flex;
        flex-direction:column;
        width: 90%;
        height: 100%;
        border: soild black 1px;
        li {
          display: block;
          font-size: 0.3rem;
          text-align: left;
          margin-left: 0.3rem;
          margin-top: 0.3rem;
        }
      }
      .pf {
        width: 100%;
        height: 30%;
        margin-top: -0.6rem;
        margin-left: 0.3rem;
        display: flex;
      }
    }
  }
}
</style>