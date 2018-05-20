<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    >
    </city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetter"
    >
    </city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(res => this.getCityInfoSucc(res))
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    handleLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped type="text/stylus">

</style>
