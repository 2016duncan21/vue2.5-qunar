<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped type="text/stylus">
  @import '~styles/varibles.styl'
  .header
    display: flex
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      float: left
      width: .64rem
      text-align: center
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      margin-top: .12rem
      padding-left: .2rem
      border-radius: .1rem
      background: #fff
      color: #ccc
    .header-right
      float: right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
