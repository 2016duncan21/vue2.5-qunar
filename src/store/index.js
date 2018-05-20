import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mustations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
