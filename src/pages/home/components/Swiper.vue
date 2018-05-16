<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_750x200_b423f532.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/67/b18682d464a0a802.jpg_750x200_eeb90035.jpg'
      }],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped type="text/stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #ccc
    .swiper-img
      width: 100%
</style>
