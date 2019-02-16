<template>
  <div class="list">
    <div class="list-item" v-for="item in list" :key="item.id">
      <div class="list-item-title">{{item.title}}</div>
      <div class="list-item-msg"><span class="btn-small" @click="routeWithType(item.typeId)" style="margin-right: 20px">{{item.typeName}}</span><span>{{item.time}}</span></div>
      <div class="list-item-detail">{{item.description}}</div>
      <div class="list-item-btn" @click="read(item)">阅读全文</div>
    </div>
  </div>
</template>

<script>
import { getWords } from '@/api/index'

export default {
  name: 'wordList',
  data () {
    return {
      list: [
        {
          id: 1,
          title: '文章标题',
          type: '日记随笔',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 2,
          title: '文章标题',
          type: '生活点滴',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 3,
          title: '文章标题',
          type: '只言片语',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 4,
          title: '文章标题',
          type: '技术分享',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 5,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 6,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 7,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 8,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        }
      ]
    }
  },
  computed: {
    checkedType () {
      return this.$store.state.checkedType
    }
  },
  watch: {
    checkedType (val) {
      // TODO: loadWordList
      this.loadWords(val)
    }
  },
  created () {
    this.loadWords()
  },
  methods: {
    read (item) {
      this.$router.push({
        path: '/article',
        query: { id: item.id }
      })
    },
    routeWithType (type) {
      this.$store.commit('setCheckedTag', type)
      this.$router.push({ path: '/word' })
    },
    async loadWords (typeId = 0) {
      const res = await getWords(typeId)
      if (res) {
        this.list = res.data
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .list {
    &-item {
      background: #fff;
      padding: 20px;
      position: relative;
      &+& {
        margin-top: 20px;
      }
      &-title {
        border-bottom: 1px solid #adc2d7;
        font-size: 20px;
      }
      &-msg {
        margin-top: 10px;
        color: #999;
        text-align:justify;
      }
      &-detail {
        margin-top: 5px;
        line-height: 26px;
        text-align: justify;
      }
      &-btn {
        position: absolute;
        right: 20px;
        bottom: 15px;
        opacity: 0;
        background: #adc2d7;
        color: #fff;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        transition: opacity 1s ease;
      }
      &:hover &-btn {
        opacity: 1;
      }
    }
  }
</style>
