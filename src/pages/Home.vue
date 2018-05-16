<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './home/components/Header.vue'
import HomeSwiper from './home/components/Swiper.vue'
import HomeIcons from './home/components/Icons.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style lang="stylus" scoped type="text/stylus">

</style>
