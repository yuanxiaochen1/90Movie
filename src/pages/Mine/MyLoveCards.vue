
<template>
  <div>
    <van-nav-bar title="我喜欢的电影卡片">
      <van-icon slot="left" @click="back">
        <img src="../../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>


    <div class="cards-img">
      <div class="cards" v-for="item in cards" :key="item.cardId">
        <router-link :to ="{path:'/cardInfo',query:{cardId:item.cardId}}">
        <img :src="item.pic" alt />
        </router-link>
        <div class="cards-span">
          <span v-html="item.content"></span>
        </div>
        <div style="text-align: right">
          <span v-html="'——《'+item.title+'》'" style="text-align: right"></span>
        </div>
      </div>

     

    </div>


    
    <div class="noMoviesBox" v-if="!flag">
      <div class="box">
        <img src="../../assets/images/about_logo.png" alt="">
        <p >无收藏的卡片</p>
      </div>
      <div class="text">
        <p>请您去添加喜欢的卡片</p>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../../router/index";

export default {
  data() {
    return {};
  },
  computed:{
    cards(){
       return this.$store.state.cards.filter(item=>{
      return item.loveState==1})
    },flag(){
      let a=this.$store.state.cards.filter(item => {
        return item.loveState == 1;
      });
      return a.length==0?false:true;
    }
  },
  methods: {
    back() {
      router.go(-1);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
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
.cards-img {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .cards {
    margin: 2% 2%;
    width: 42%;
    height: 3.5rem;
    box-shadow: 0.02rem 0.02rem 0.02rem #888888;
    .cards-span {
      width: 100%;
      height: 0.7rem;
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
      height: 70%;
    }
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
        height: 50%;
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
       height: 6%;
      width: 80%;
      margin-top: 10%;
      margin-left: -25%;
      background: rgba(170, 167, 167,0.2);
      border-radius: 0.1rem;
      padding-top:2%;
      p{
        height: 100%;
    width: 100%;
    text-align: center;
  font-size: 0.4rem;
      }
    }
  }
</style>