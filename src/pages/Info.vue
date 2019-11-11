<template>
  <div class="InfoContainer">
    <van-nav-bar title="详情">
      <van-icon slot="left" @click="back">
        <img src="../assets/images/return.png" alt />
      </van-icon>
    </van-nav-bar>

    <div class="box">
      <div class="imgBox">
        <div class="img">
          <img :src="movie.logo" alt />
        </div>
      </div>
      <div class="main">
        <div class="top"></div>
        <div class="textBox">
          <div class="head">
            <div class="headBox" @click="open">
              <ul>
                <li>
                  <van-icon name="success" />
                </li>
                <li v-html="movie.seeDown==1?'已看':'想看'"></li>
                <li>
                  <van-icon name="arrow-down" />
                </li>
              </ul>
            </div>
          </div>
          <!-- 中间的内容盒子 -->
          <div class="info-footer">
            <div class="info-footer-top">
              <p class="p" style="margin-left:5%">概览</p>
              <p class="p" style="margin-left:60%">存在问题?</p>
            </div>
            <!-- 详细信息 -->
            <div class="container">
              <ul class="ul">
                <li
                  style="font-size:13px; margin-top:5%"
                  v-html="'上映: '+movie.releaseTime+'('+movie.country+')'"
                ></li>
                <li style="font-size:13px; margin-top:5%" v-html="'片长: '+movie.runtime+'分钟'"></li>
                <li style="font-size:13px; margin-top:5%" v-html="'类型: '+movie.type"></li>
                <li style="font-size:13px; margin-top:5%" v-html="'导演: '+movie.directors"></li>
                <li style="font-size:13px; margin-top:5%" v-html="'编剧: '+movie.writers"></li>
                <li style="font-size:13px; margin-top:5%" v-html="'主演: '+movie.actors"></li>
              </ul>
              <!-- 两个按钮 -->
              <div class="an">
                <button>豆瓣</button>
                <button>IMDb</button>
              </div>
              <div class="info-footer-top">
                <p class="p" style="margin-left:5%">记录</p>
              </div>
              <!-- 影评 -->
              <div class="end">
                <p class="end-p" v-html="movie.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <van-overlay :show="show">
      <div class="footer">
        <div class="top">
          <div class="top-left">
            <van-icon
              name="star"
              :color="movie.wantSee==1?'black':'gray'"
              size="35px"
              @click="wantSee"
            />
            <p>想看</p>
          </div>
          <div class="top-left">
            <van-icon
              name="friends"
              :color="movie.seeDown==1?'black':'gray'"
              size="35px"
              @click="seeDown"
            />
            <p>已看</p>
          </div>
          <div class="top-left">
            <van-icon
              name="like"
              :color="movie.loveState==1?'red':'gray'"
              size="35px"
              @click="changeLove"
            />
            <p>收藏</p>
          </div>
        </div>
        <van-cell style="text-align:center;border-bottom: 1px solid #999" title="播放" size="large" />
        <van-cell style="text-align:center;border-bottom: 1px solid #999" title="分享" size="large" />
        <van-cell
          style="text-align:center;border-bottom: 1px solid #999"
          title="删除"
          size="large"
          @click="shanchu"
        />
        <div class="bottom">
          <p class="size">评分</p>
          <van-rate v-model="value" style=" margin-top:10%; margin-left:-22%;" />
        </div>
      </div>
      <van-cell
        @click="show = false"
        style="text-align:center;border-bottom: 1px solid #999;margin:5% auto;width:90%;z-index:9999"
        title="完成"
        size="large"
      />
    </van-overlay>
  </div>
</template>
<script>
import { Dialog } from "vant";
import {
  addLoveMvie,
  yanzheng,
  deleteMovies,
  addwangSee,
  addseeDown
} from "../api/index";
import router from "../router/index";
export default {
  data() {
    return {
      show: false,
      value: 3
    };
  },
  computed: {
    movie() {
      return this.$store.state.movies.find(item => {
        if (this.$route.query.movieId) {
          return item.movieId == this.$route.query.movieId;
        }
        if (this.$route.query.movieTitle) {
          return item.title == this.$route.query.movieTitle;
        }
      });
    }
  },
  methods: {
    back() {
      router.go(-1);
    },
    open() {
      this.show = true;
    },
    changeLove() {
      /* 先验证是否登陆，为登陆直接跳转到登录页 */
      yanzheng().then(result => {
        if (result.code == 0) {
          /* 已经登陆 */
          if (this.movie.loveState == 0) {
            /* 未收藏则派发请求收藏 */
            addLoveMvie(this.movie.movieId, this.movie.title)
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          } else {
            /* 已收藏则派发请求取消收藏 */
            deleteMovies(this.movie.movieId, "love")
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          }
          return;
        }
        /* 未登录则直接跳转到登录页 */
        Dialog.alert({
          message: "未登录，请登陆重试"
        }).then(() => {
          location.href = location.origin;
        });
      });
    },
    wantSee() {
      /* 先验证是否登陆，为登陆直接跳转到登录页 */
      yanzheng().then(result => {
        if (result.code == 0) {
          /* 已经登陆 */
          if (this.movie.wantSee == 0) {
            /* 未收藏则派发请求收藏 */
            addwangSee(this.movie.movieId, this.movie.title)
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          } else {
            /* 已收藏则派发请求取消收藏 */
            deleteMovies(this.movie.movieId, "wantSee")
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          }
          return;
        }
        /* 未登录则直接跳转到登录页 */
        Dialog.alert({
          message: "未登录，请登陆重试"
        }).then(() => {
          location.href = location.origin;
        });
      });
    },
    seeDown() {
      /* 先验证是否登陆，为登陆直接跳转到登录页 */
      yanzheng().then(result => {
        if (result.code == 0) {
          /* 已经登陆 */
          if (this.movie.seeDown == 0) {
            /* 未收藏则派发请求收藏 */
            addseeDown(this.movie.movieId, this.movie.title)
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          } else {
            /* 已收藏则派发请求取消收藏 */
            deleteMovies(this.movie.movieId, "seeDown")
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          }
          return;
        }
        /* 未登录则直接跳转到登录页 */
        Dialog.alert({
          message: "未登录，请登陆重试"
        }).then(() => {
          location.href = location.origin;
        });
      });
    },
    shanchu() {
      /* 先验证是否登陆，为登陆直接跳转到登录页 */
      yanzheng().then(result => {
        if (result.code == 0) {
          /* 已经登陆 */
          if (this.movie.seeDown == 1) {
            deleteMovies(this.movie.movieId, "seeDown")
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          }
          if (this.movie.wantSee == 1) {
            deleteMovies(this.movie.movieId, "wantSee")
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          }
          if (this.movie.loveState == 1) {
            deleteMovies(this.movie.movieId, "love")
              .then(result => {
                if (result.code == 0) {
                  /* 数据改变  重新发请求改变Vuex中存储的数据 */
                  this.$store.dispatch("change");
                  return;
                }
                return Promise.reject(result.codeText);
              })
              .catch(sea => {
                console.log(sea);
              });
          }
          location.href = location.origin + "#/home";
          return;
        }
        /* 未登录则直接跳转到登录页 */
        Dialog.alert({
          message: "未登录，请登陆重试"
        }).then(() => {
          location.href = location.origin;
        });
      });
    }
  },
  components: {},
  beforeMount() {
    console.log(this.$store.state.movies);
    if (!this.$route.query.movieId && !this.$route.query.movieTitle) {
      location.href = location.origin + "#/home";
      return;
    }
    let a = this.$store.state.movies.find(
      item => item.title == this.$route.query.movieTitle
    );
    if (a == undefined&&!this.$route.query.movieId) {
      Dialog.alert({
        message: "暂无相关数据"
      }).then(() => {
        location.href=location.origin + "#/home";
      });
    }
  }
};
</script>
<style lang="less" scoped>
.InfoContainer {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .van-overlay {
    z-index: 99 !important ;
  }
  .box {
    overflow: auto;
    height: 95%;
    width: 100%;
    .imgBox {
      position: fixed;
      height: 25%;
      width: 100%;
      z-index: 0;
      .img {
        height: 100%;
        width: 100%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .main {
      position: relative;
      z-index: 5;
      height: 95%;
      width: 100%;
      .top {
        height: 27%;
        width: 100%;
        opacity: 0;
      }
      .textBox {
        background: rgba(231, 231, 231);
        height: 73%;
        width: 100%;
        z-index: 5;
        .head {
          width: 100%;
          height: 10%;
          background: white;
          border-bottom: 0.01rem solid gray;
          padding-top: 0.2rem;
          .headBox {
            width: 25%;
            height: 70%;
            margin: 0 auto;
            border: 0.01rem solid black;
            border-radius: 0.1rem;
            ul {
              width: 100%;
              height: 100%;
              display: flex;
              li {
                width: 33%;
                height: 100%;
                font-size: 0.1rem;
                color: black;
                text-align: center;
                line-height: 0.65rem;
                &:nth-of-type(1) {
                  font-size: 0.4rem;
                  line-height: 0.8rem;
                }
                &:nth-of-type(3) {
                  font-weight: bolder;
                  font-size: 0.2rem;
                  line-height: 0.7rem;
                }
              }
            }
          }
        }
      }
    }
  }
  .ul {
    li {
      text-align: left;
      padding-left: 7%;
    }
  }
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
  .footer {
    width: 90%;
    background-color: whitesmoke;
    margin: 70% auto 0;
    .top {
      display: flex;
      width: 100%;
      height: 1.5rem;
      border-bottom: 1px solid #999;
      .top-left {
        width: 20%;
        height: 1.5rem;
        margin-top: 0.1rem;
        margin-left: 0.6rem;
      }
    }
    .bottom {
      display: flex;
      width: 100%;
      height: 1.5rem;
      border-bottom: 1px solid #999;
      background-color: white;

      .size {
        font-size: 18px;
        margin-left: 43%;
      }
    }
  }
  .info-footer {
    width: 100%;
    height: 10rem;
    background-color: #f7f7f7;
  }
  .info-footer-top {
    width: 98%;
    height: 0.6rem;
    background-color: #e6e6e6;
    display: flex;
    margin: auto;
    .p {
      font-size: 12px;
      margin-top: 2.5%;
    }
  }
  .an {
    width: 80%;
    height: 20%;
    margin: auto;
    margin-top: 1%;
    button {
      width: 30%;
      height: 0.7rem;
      margin: 10%;
      background-color: white;
      border: solid #999 0.01rem;
    }
  }
  .end {
    width: 95%;
    background-color: white;
    border-radius: 5px;
    padding: 0.3rem;
    padding-bottom: 0.8rem;
    margin: 0.1rem auto;
    text-indent: 2em;
    .end-p {
      font-size: 12px;
      text-align: left;
    }
  }
}
</style>