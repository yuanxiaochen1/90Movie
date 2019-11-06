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
          <img src="../assets/images/Info1.jpg" alt />
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
                <li>想看</li>
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
              <ul>
                <li style="font-size:13px;margin-left:-45%; margin-top:5%">上映: 2017-01-20(美国)</li>
                <li style="font-size:13px;margin-left:-70%; margin-top:5%">片长: -</li>
                <li style="font-size:13px;margin-left:-65%; margin-top:5%">类型: 惊悚</li>
                <li style="font-size:13px;margin-left:-50%; margin-top:5%">导演: M 奈特.沙马兰</li>
                <li style="font-size:13px;margin-left:-50%; margin-top:5%">编剧: M 奈特.沙马兰</li>
                <li style="font-size:13px;margin-left:-4%; margin-top:5%">
                  主演: 詹姆斯·麦卡沃伊/安雅·泰勒·乔伊/贝蒂·巴克利
                  <br />海莉·路·理查森
                </li>
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
                <p class="end-p">
                  电影在诗一般的镜头，华美的服饰，隐隐约约的百合情的包装下，讲述的是一个关于怯懦与勇气的故事。
                  老师Miss G统治着学生，用编织的冒险经历赢得她们的仰慕，而她的白日梦随着真正贵族Fiamma的到来被戳破。她用了所有的生存智慧与之对抗——谎言，嫁祸，冷漠。她的欲望最终抹杀了一个无辜的生命。
                  Miss G的梦想与Fiamma现实生活之间形成了裂缝，渐渐变成了鸿沟。
                  Fiamma并非完美，她也有无法面对的过去和骄傲自负的性格；Miss G也并非完全病态，她有着梦想，可惜自卑怯弱。
                  Miss G的终结是把自己送回到了恐惧中，封闭安全的一个屋子里。面对她活跃了一生的探险梦，继续瑟瑟发抖。
                  一开始不喜欢Di，到最后发现原来最值得爱的姑娘是她。她用她自己的方式维护着那帮女生在寄宿学校里的唯一一点被珍视的幸福。原本以为Di会成为下一个Miss G，然而她带着Fiamma的遗物开始了真正的旅程。
                  她从来没想要被原谅，但我原谅了她。
                  所谓身未动心已远的说法是为那些不畏艰险的人准备的，否则准备了一时也只得准备了一世。
                  电影里夜湖游泳的画面，阴暗的色调下透露出忧郁美，赤裸的女性身体缱绻出无限的嗳昧。
                  影片的瑕疵在于Miss G如此美艳自信，如此特立独行，这份底气来自于生活中的积累和沉淀，不是她所能具备的。
                  也许裂缝的另一层含义是自由。
                  生命有裂缝，阳光才照的进来。...
                </p>
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
            <van-icon name="star" size="35px" />
            <p>想看</p>
          </div>
          <div class="top-left">
            <van-icon name="friends" size="35px" />
            <p>已看</p>
          </div>
          <div class="top-left">
            <van-icon name="like" color='red' size="35px" />
            <p>收藏</p>
          </div>
        </div>
        <van-cell
          style="text-align:center;border-bottom: 1px solid #999"
          title="加入影单"
          size="large"
        />
        <van-cell style="text-align:center;border-bottom: 1px solid #999" title="分享" size="large" />
        <van-cell style="text-align:center;border-bottom: 1px solid #999" title="删除" size="large" />
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
import router from "../router/index";
export default {
  data() {
    return {
      show: false,
      value: 3
    };
  },
  methods: {
    back() {
      router.go(-1);
    },
    open() {
      this.show = true;
    }
  },
  components: {}
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
    padding-bottom: .8rem;
    margin: 0.1rem auto;
    text-indent: 2em;
    .end-p {
      font-size: 12px;
      text-align: left;
    }
  }
}
</style>