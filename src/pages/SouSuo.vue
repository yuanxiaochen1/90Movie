<template>
  <div class="container">
    <van-nav-bar title="搜索">
      <van-icon slot="right">
        <router-link to="/home">
          <img src="../assets/images/xxx.png" alt />
        </router-link>
      </van-icon>
    </van-nav-bar>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @cancel="onCancel"
        @input="select"
      />
    </form>

    <div class="cards-img">
      <div class="cards" v-for="item in movies" :key="item.movieId">
        <router-link :to ="{path:'/info',query:{movieId:item.movieId}}">
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
import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);
export default {
  data() {
    return {
      value: "",
      movies: []
    };
  },
  methods: {
    onCancel() {
      this.value = "";
    },
    select() {
      if (this.value == "") {
        this.movies = [];
        return;
      }
      this.movies = this.$store.state.movies.filter(item => {
        return item.title.includes(this.value);
      });
      if (this.movies.length==0) {
        Notify({
          message: "暂无数据\n请重新查询",
          color: "white",
          background: "rgba(0,0,0,0.7)",
          duration:1000,
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .van-nav-bar {
    height: 1rem;
    line-height: 1rem;
    .van-nav-bar__right img {
      width: 0.6rem;
    }
    .van-nav-bar__title {
      font-size: 20px;
    }
  }
  .cards-img {
    height: 80%;
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
}
</style>