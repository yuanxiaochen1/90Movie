<template>
  <div class="re-container">
    <div class="re-container-a">
      <div class="re-container-a-left">
        <img src="../../assets/images/re-a.png" alt srcset style="width:100%;height:100%" />
      </div>
      <div class="re-container-a-right">
        <ul>
          <li>举重妖精金福珠</li>
          <li style="font-size:.25rem; margin-top:.2rem;color:#999;">2019-11-01</li>
          <li style="font-size:.25rem;color:#999;margin-top:.1rem">111分钟 - 爱情 | 动画 | 奇幻</li>
        </ul>
        <div class="pf">
          <van-rate v-model="value" allow-half  readonly />
          <li
            style=" display:block;list-style:none;font-size:.25rem;color:#999; margin-left:.2rem;margin-top:.05rem;"
          >7.1分(豆瓣)</li>
        </div>
      </div>
    </div>
    <!-- 复制的内容 -->
    <div class="re-container-a">
      <div class="re-container-a-left">
        <img src="../../assets/images/re-02.jpg" alt srcset style="width:100%;height:100%" />
      </div>
      <div class="re-container-a-right">
        <ul>
          <li>举重妖精金福珠</li>
          <li style="font-size:.25rem; margin-top:.2rem;color:#999;">2019-11-01</li>
          <li style="font-size:.25rem;color:#999;margin-top:.1rem">111分钟 - 爱情 | 动画 | 奇幻</li>
        </ul>
        <div class="pf">
          <van-rate v-model="value" allow-half readonly />
          <li
            style=" display:block;list-style:none;font-size:.25rem;color:#999; margin-left:.2rem;margin-top:.05rem;"
          >7.1分(豆瓣)</li>
        </div>
      </div>
    </div>
    <!-- 复制的内容 -->
    <div class="re-container-a">
      <div class="re-container-a-left">
        <img src="../../assets/images/re-03.jpg" alt srcset style="width:100%;height:100%" />
      </div>
      <div class="re-container-a-right">
        <ul>
          <li>我的ID是江南美人</li>
          <li style="font-size:.25rem; margin-top:.2rem;color:#999;">2019-11-01</li>
          <li style="font-size:.25rem;color:#999;margin-top:.1rem">111分钟 - 爱情 | 动画 | 奇幻</li>
        </ul>
        <div class="pf">
          <van-rate v-model="value" allow-half readonly />
          <li
            style=" display:block;list-style:none;font-size:.25rem;color:#999; margin-left:.2rem;margin-top:.05rem;"
          >7.1分(豆瓣)</li>
        </div>
      </div>
    </div>
    <!-- 复制的内容 -->
    <div class="re-container-a">
      <div class="re-container-a-left">
        <img src="../../assets/images/re-04.jpg" alt srcset style="width:100%;height:100%" />
      </div>
      <div class="re-container-a-right">
        <ul>
          <li style="display:block; width:100%;margin-left:-.7rem;;">少年的你</li>
          <li style="font-size:.25rem; margin-top:.2rem;color:#999;">2019-11-01</li>
          <li style="font-size:.25rem;color:#999;margin-top:.1rem">111分钟 - 爱情 | 动画 | 奇幻</li>
        </ul>
        <div class="pf">
          <van-rate v-model="value" allow-half readonly />
          <li
            style=" display:block;list-style:none;font-size:.25rem;color:#999; margin-left:.2rem;margin-top:.05rem;"
          >7.1分(豆瓣)</li>
        </div>
      </div>
    </div>
    <!-- 复制的内容 -->
    <div class="re-container-a">
      <div class="re-container-a-left">
        <img src="../../assets/images/re-05.jpg" alt srcset style="width:100%;height:100%" />
      </div>
      <div class="re-container-a-right">
        <ul>
          <li>没有秘密的你</li>
          <li style="font-size:.25rem; margin-top:.2rem;color:#999;">2019-11-01</li>
          <li style="font-size:.25rem;color:#999;margin-top:.1rem">111分钟 - 爱情 | 动画 | 奇幻</li>
        </ul>
        <div class="pf">
          <van-rate v-model="value" allow-half readonly />
          <li
            style=" display:block;list-style:none;font-size:.25rem;color:#999; margin-left:.2rem;margin-top:.05rem;"
          >7.1分(豆瓣)</li>
        </div>
      </div>
    </div>
    <!-- 复制的内容 -->
    <div class="re-container-a">
      <div class="re-container-a-left">
        <img src="../../assets/images/re-04.jpg" alt srcset style="width:100%;height:100%" />
      </div>
      <div class="re-container-a-right">
        <ul>
          <li style="display:block; width:100%;margin-left:-.7rem;;">少年的你</li>
          <li style="font-size:.25rem; margin-top:.2rem;color:#999;">2019-11-01</li>
          <li style="font-size:.25rem;color:#999;margin-top:.1rem">111分钟 - 爱情 | 动画 | 奇幻</li>
        </ul>
        <div class="pf">
          <van-rate v-model="value" allow-half readonly />
          <li
            style=" display:block;list-style:none;font-size:.25rem;color:#999; margin-left:.2rem;margin-top:.05rem;"
          >7.1分(豆瓣)</li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {value:2.5};
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
        display: block;
        width: 60%;
        height: 100%;
        border: soild black 1px;
        li {
          display: block;
          font-size: 0.3rem;
          float: left;
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