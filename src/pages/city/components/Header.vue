<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont city-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped type="text/stylus">
  @import '~styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  font-size: .32rem
  color: #fff
  background: $bgColor
  .city-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    font-size: .4rem
    color: #fff
</style>
