<template>
  <div class="home-list">
    <div class="home-list-item" v-for="item in list" :key="item.id">
      <div class="home-list-item-title">{{item.title}}</div>
      <div>{{item.type}} | {{item.time}}</div>
      <div>{{item.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 2,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 3,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 4,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 5,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        }
      ]
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .home-list {
    &-item {
      background: #fff;
      padding: 20px;
      &+& {
        margin-top: 20px;
      }
      &-title {
        border-bottom: 1px solid #adc2d7;
        font-size: 20px;
      }
    }
  }
</style>
