<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped type="text/stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    margin-top: .1rem
    overflow: hidden
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .2rem
    .icon
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      text-align: center
      .icon-img
        display: inline-block
        width: 1.1rem
        height: 1.1rem
        .icon-img-content
          width: 100%
      .icon-desc
        margin-top: .1rem
        font-size: .28rem
        color: $darkTextColor
        ellipsis()
</style>
