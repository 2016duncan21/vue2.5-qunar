<template>
  <div class="hot">
    <div class="hot-grounp-title">
      <img
        class="hot-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
      <span class="hot-rank-title">本周热门榜单</span>
      <router-link to="/city">
        <div class="hot-title-more">
          全部榜单
          <span class="iconfont hot-rank-icon">&#xe64a;</span>
        </div>
      </router-link>
    </div>
    <ul class="hot-list">
      <li class="hot-list-item">
        <div class="hot-list-tag">
          <img class="hot-list-tag-img" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
        </div>
        <div class="hot-img">
          <img class="hot-img-icon" src="http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_150x150_a980923f.jpg" alt="">
        </div>
        <div class="hot-title">宋城千古情</div>
        <div class="hot-price">
          <span class="hot-price-content">
            ¥<em class="hot-price-num">280</em>
          </span>
          起
        </div>
      </li>
      <li class="hot-list-item">
        <div class="hot-list-tag">
          <img class="hot-list-tag-img" src="http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png">
        </div>
        <div class="hot-img">
          <img class="hot-img-icon" src="http://img1.qunarzz.com/wugc/p3/201206/02/44c1fe10b91aed6793835fbb.jpg_150x150_63d4cf19.jpg" alt="">
        </div>
        <div class="hot-title">西溪湿地公园</div>
        <div class="hot-price">
          <span class="hot-price-content">
            ¥<em class="hot-price-num">50</em>
          </span>
          起
        </div>
      </li>
      <li class="hot-list-item">
        <div class="hot-list-tag">
          <img class="hot-list-tag-img" src="http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png">
        </div>
        <div class="hot-img">
          <img class="hot-img-icon" src="http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_150x150_1df64606.jpg" alt="">
        </div>
        <div class="hot-title">最忆是杭州</div>
        <div class="hot-price">
          <span class="hot-price-content">
            ¥<em class="hot-price-num">110</em>
          </span>
          起
        </div>
      </li>
      <li class="hot-list-item">
        <div class="hot-list-tag">
          <img class="hot-list-tag-img" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png">
        </div>
        <div class="hot-img">
          <img class="hot-img-icon" src="http://img1.qunarzz.com/sight/p0/1603/57/57ee153a3441d35190.water.jpg_150x150_75528c36.jpg" alt="">
        </div>
        <div class="hot-title">杭州飞来峰</div>
        <div class="hot-price">
          <span class="hot-price-content">
            ¥<em class="hot-price-num">50</em>
          </span>
          起
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHot'
}
</script>
<style lang="stylus" scoped type="text/stylus">
.hot
  margin-top: .2rem
  .hot-grounp-title
    position: relative
    padding: .24rem 0 .26rem
    .hot-title-img
      display: inline-block
      overflow: hidden
      width: .3rem
      height: .3rem
      margin-left: .2rem
      vertical-align: top
    .hot-rank-title
      display: inline-block
      margin-left: .03rem
      height: .44rem
      color: #212121
      font-size: .32rem
      line-height: .44rem
    .hot-title-more
      position: absolute
      top: .3rem
      right: .32rem
      color: #616161
      font-size: .24rem
  .hot-list
    padding: 0 .24rem
    overflow: scroll
    white-space: nowrap
    list-style: none
    .hot-list-item
      position: relative
      display: inline-block
      padding: .06rem 0 .2rem
      width: 2rem
      .hot-list-tag
        position: absolute
        top: 0
        left: 0
        z-index: 1
        overflow: hidden
        width: .84rem
        height: .4rem
        .hot-list-tag-img
          width: 100%
      .hot-img
        overflow: hidden
        width: 2rem
        height: 0
        padding-bottom: 100%
        .hot-img-icon
          width: 100%
      .hot-title
        margin-top: .12rem
        color: #212121
        font-size: .24rem
        line-height: .32rem
        text-align: center
      .hot-price
        text-align: center
        .hot-price-content
          font-size: .24rem
          line-height: .36rem
          color: #ff8300
          .hot-price-num
            font-size: .28rem
</style>
