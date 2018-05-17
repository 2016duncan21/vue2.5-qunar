<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom">
        <img
          class="item-img"
          src="http://img1.qunarzz.com/wugc/p3/201206/02/44c1fe10b91aed6793835fbb.jpg_200x200_e7236f41.jpg">
        <div class="item-info">
          <p class="item-title">aaaaaaaaa</p>
          <p class="item-desc">bbbbbbbbbbb</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped type="text/stylus">
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding-left: .22rem
      min-width: 0
      .item-title
        margin-top: .26rem
        font-size: .32rem
        line-height: .54rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipse()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
</style>
