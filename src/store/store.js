import Vue from 'vue'
import Vuex from 'vuex'
// import * as api from '@/api/request'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    saveToken(state, token){
      state.token = token
    }
  },
  // actions: {
  //   ...api
  // }
})
