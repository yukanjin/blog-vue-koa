import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    article: '',
    tags: [
      {
        id: 1,
        checked: true,
        name: '全部文章'
      },
      {
        id: 2,
        checked: false,
        name: '技术分享'
      },
      {
        id: 3,
        checked: false,
        name: '生活感悟'
      },
      {
        id: 4,
        checked: false,
        name: '日记随笔'
      },
      {
        id: 5,
        checked: false,
        name: '只言片语'
      }
    ]
  },
  getters: {
    checkedTag: (state) => state.tags.filter(tag => tag.checked)[0].id
  },
  mutations: {
    setArticle (state, payload) {
      state.article = payload
    },
    switchTag (state, payload) {
      state.tags.forEach(tag => {
        tag.checked = false
        if (tag.id === payload.id) tag.checked = true
      })
    }
  }
})

export default store
