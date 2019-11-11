<template>
  <div class="container">
    <van-nav-bar title="卡片详情">
      <van-icon slot="left" @click="back">
        <img src="../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>
    <div class="cards-rotation-chart">
      <van-swipe :show-indicators="false" @change="change">


        <van-swipe-item>
          <div class="rotation-chart" style="background:white">
            <div class="rotation-img">
              <img :src="card.pic" alt />
            </div>
            <p class="p1" v-html="card.content"></p>
            <p class="p2" v-html="'——'+card.title"></p>
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="rotation-footer">
        
        <div class="lookover">
          <img src="../assets/images/movie.png" alt />
          <router-link :to ="{path:'/info',query:{movieTitle:card.title}}"><p style="color:gray">查看电影</p></router-link>
        </div>
        
        <div class="operation">
          <div class="prefer">
            <div class="preferimg" @click="Choice" :class="{active:card.loveState==1?true:false}"></div>
            <p v-html="card.loveNum"></p>
          </div>
          <div class="distribution">
            <div class="distributionimg"></div>
            <p v-html="card.downloadNum"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import router from "../router/index";
import {  deleteCards } from "../api/index";
export default {
  data() {
    return {
     
    };
  },
  computed: {
     card() {
      return this.$store.state.cards.find(item => {
          return item.cardId == this.$route.query.cardId;
      });
    }
  },
  methods: {
    back() {
      router.go(-1);
    },
    Choice() {
            deleteCards(this.card.cardId)
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("changeCards");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
    },
    change() {
     
    }
  },
  components: {},
  beforeMount() {
    if (!this.$route.query.cardId) {
     Dialog.alert({
        message: "暂无相关数据"
      }).then(() => {
        location.href=location.origin+'#/home'
      });
    }
  }
};
</script>
<style lang="less" scopedd>
.container {
  height: 100%;
  width: 100%;
  background-color: white;
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
  .cards-rotation-chart {
    height: 87%;
    width: 100%;
    .van-swipe {
      margin-top: 8%;
      width: 100%;
      height: 86%;
      .rotation-chart {
        position: relative;
        width: 92%;
        height: 95%;
        margin: 0 auto;
        border-radius: 1%;
        border: 0.005rem solid #9e9e9e;
        box-shadow: 0.04rem 0.04rem 0.08rem #9e9e9e;
        .rotation-img {
          position: absolute;
          width: 95%;
          height: 43%;
          top: 2%;
          left: 2.5%;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .p1 {
          position: absolute;
          display: inline-block;
          text-align: left;
          width: 94%;
          left: 3%;
          top: 50%;
          font-size: 0.3rem;
        }
        .p2 {
          position: absolute;
          display: block;
          right: 5%;
          bottom: 0;
          font-size: 0.35rem;
        }
      }
    }
    .rotation-footer {
      display: flex;
      width: 92%;
      height: 0.8rem;
      margin: 0 auto;
      margin-top: 7%;
      .lookover {
        background-color: #00000028;
        width: 38%;
        height: 100%;
        border-radius: 0.4rem;
        display: flex;
        line-height: 0.8rem;
        img {
          width: 0.6rem;
          height: 0.6rem;
          margin-top: 0.1rem;
          margin-left: 0.3rem;
        }
        p {
          font-size: 0.3rem;
          margin-left: 0.2rem;
        }
      }
      .operation {
        width: 50%;
        height: 100%;
        margin-left: 12%;
        display: flex;
        .prefer {
          height: 100%;
          width: 1rem;
          margin-left: 1.5rem;
          .preferimg {
            height: 0.5rem;
            width: 0.5rem;
            margin: 0 auto;
            background: url("../assets/images/grayheart.png");
            background-size: 100%;
          }
          .active {
            background: url("../assets/images/redheart.png");
            background-size: 100%;
          }
          p {
            font-size: 0.3rem;
            color: #707070;
          }
        }
        .distribution {
          height: 100%;
          width: 1rem;
          margin-left: 0.5rem;
          .distributionimg {
            height: 0.5rem;
            width: 0.5rem;
            margin: 0 auto;
            background: url("../assets/images/mine-fx.png");
            background-size: 100%;
          }
          p {
            font-size: 0.3rem;
            color: #707070;
          }
        }
      }
    }
  }
}
</style>