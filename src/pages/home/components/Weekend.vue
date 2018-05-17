<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img
            class="item-img"
            src="http://img1.qunarzz.com/sight/source/1505/bc/83feb2e003d0dd.jpg_r_640x214_0b7269b8.jpg">
        </div>
          <div class="item-info">
            <p class="item-title">杭州多样乐园</p>
            <p class="item-desc">这个周末终于可以陪宝贝去玩耍啦</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend'
}
</script>
<style lang="stylus" scoped type="text/stylus">
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipse()
</style>
