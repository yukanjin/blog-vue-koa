import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    article: ''
  },
  mutations: {
    setArticle (state, payload) {
      state.article = payload
    }
  }
})

export default store
