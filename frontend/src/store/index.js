import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    article: '',
    types: [],
    checkedType: '全部文章'
  },
  mutations: {
    setArticle (state, payload) {
      state.article = payload
    },
    setTypes (state, payload) {
      state.types = payload
    },
    setCheckedTag (state, payload) {
      state.checkedType = payload
    }
  }
})

export default store
