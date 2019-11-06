<template>
  <div>
    <div class="cards-img">
      <!-- 数据绑定 -->
      <div class="cards" v-for="item in movies" :key="item.movieId">
        <img :src="item.poster" alt />
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
      movies:[]
    };
  },
  components: {},
  beforeMount(){
    this.movies=this.$store.state.myMovies.filter(item=>{
      return item.wantSee==1
    })
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