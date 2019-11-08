<template>
  <div>
    <div class="cards-img">


      <div class="cards"  v-for="item in movies" :key="item.movieId">
        <router-link to='/info'>
        <img :src="item.poster" alt />
        </router-link>
        <div>
          <span v-html='"《"+item.title+"》"'></span>
        </div>
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
     }
  }
};
</script>
<style lang="less" scoped>
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
</style>