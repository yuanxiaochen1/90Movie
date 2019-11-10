<template>
  <div class="container">
    <div class="cards-img" v-if="flag">


      <div class="cards"  v-for="item in movies" :key="item.movieId">
        <router-link :to ="{path:'/info',query:{movieId:item.movieId}}">
        <img :src="item.poster" alt />
        </router-link>
        <div>
          <span v-html='"《"+item.title+"》"'></span>
        </div>
      </div>
     
    </div>
    <div class="noMoviesBox" v-if="!flag">
      <div class="box">
        <img src="../../assets/images/about_logo.png" alt="">
        <p >无想看的电影</p>
      </div>
      <div class="text">
        <p>请您添加想看的电影</p>
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
  computed: {
     movies(){
       return this.$store.state.movies.filter(item=>{
      return item.seeDown==1
    })
     },
    flag(){
      let a=this.$store.state.movies.filter(item => {
        return item.seeDown == 1;
      });
      return a.length==0?false:true;
    }
  }
};
</script>
<style lang="less" scoped>
.container{
  height: 100%;
  width: 100%;
.cards-img {
    height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
   overflow: auto;
  .cards {
    margin: 2% 4%;
    width: 25%;
    height: 4rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    span {
      font-size: 0.2rem;
    }
  }
  img {
    width: 100%;
    height: 75%;
    box-shadow: 0.02rem 0.02rem 0.02rem #888888;
  }
}
.noMoviesBox {
    height: 100%;
    width: 100%;
    padding-top: 40%;
    padding-left: 35%;
    .box {
      height: 20%;
      width: 30%;
      img{
        height: 60%;
    width: 60%;
      }
      p{
        font-weight: 600;
        margin-top: 10%;
        text-align: center;
        font-size: 0.3rem;
      }
    }
    .text{
       height: 8%;
      width: 80%;
      margin-top: 10%;
      margin-left: -25%;
      background: rgba(170, 167, 167,0.2);
      border-radius: 0.1rem;
      padding-top: 2%;
      p{
        height: 100%;
    width: 100%;
    text-align: center;
  font-size: 0.4rem;
      }
    }
  }
  }
</style>