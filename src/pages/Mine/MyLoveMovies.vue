<template>
  <div class="container">
    <van-nav-bar title="我喜欢的电影">
      <van-icon slot="left" @click="back">
        <img src="../../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>

     <div class="tables-container">

      <div class="tables-routers"  v-for="item in movies" :key='item.movieId'>
        <p class="tables-text" v-html="item.text"></p>
        <div class="tables-prefer">
          <div @click="Choice()" :class="{active:item.loveState==1?true:false}"></div>
          <p v-html="item.loveNum"></p>
        </div>
        <router-link to="/info">
          <img class="tables-cards" :src="item.logo" alt />
        </router-link>
      </div>

      
    </div>

  </div>
</template>
<script>
import router from "../../router/index";
export default {
  data() {
    return {
      movies:[]
    };
  },
  methods: {
    back() {
      router.go(-1);
    }
  },
  components: {},
  beforeMount(){
    this.movies=this.$store.state.myMovies.filter(item=>{
      return item.loveState==1
    })
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .van-nav-bar {
    height: 1rem;
    line-height: 1rem;
    //   设置标题
    .van-nav-bar__title {
      font-size: 20px;
    }
    .van-nav-bar__left img {
      width: 0.4rem;
    }
  }
  
 .tables-container{
    overflow: auto;
    width: 100%;
    height: 92.5%;
  .tables-routers {
    width: 100%;
    height: 3rem;
    margin-top: 0.2rem;
    position: relative;
    .tables-text {
      width: 88%;
      height: 0.4rem;
      position: absolute;
      top: 80%;
      left: 6%;
      font-size: 0.3rem;
      color: white;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .tables-prefer {
      position: absolute;
      width: 0.7rem;
      height: 0.95rem;
      margin-left: 83%;
      background-color: rgba(0, 0, 0, 0.507);
      border-radius: 0.1rem;
      p {
        font-size: 0.29rem;
        color: white;
        margin-top: 0.03rem;
      }
      div {
        width: 0.5rem;
        height: 0.5rem;
        background: url("../../assets/images/lineredheart.png");
        margin: 0 auto;
        background-size: 100%;
      }
      .active {
        background: url("../../assets/images/redheart.png");
        background-size: 100%;
      }
    }
    .tables-cards {
      width: 94%;
      height: 3rem;
      margin: 0 auto;
      border-radius: 0.1rem;
    }
  }
  }
}
</style>