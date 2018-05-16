<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './home/components/Header.vue'
import HomeSwiper from './home/components/Swiper.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style lang="stylus" scoped type="text/stylus">

</style>
