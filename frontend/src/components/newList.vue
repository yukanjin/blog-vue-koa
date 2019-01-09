<template>
  <div class="new-list">
    <div @click="link" class="list-title">{{title}}</div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div>{{item.type_name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { getTypeList } from '@/api/index'
export default {
  // data () {
  //   return {
  //     list: [1, 2, 34, 5, 6]
  //   }
  // },
  props: ['title', 'list'],
  methods: {
    // async link () {
    //   const res = await getTypeList({name: 'type'})
    //   this.typeList = res.data.dataList
    //   console.log(this.typeList)
    // }
    link () {
      const url = 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd'
      var request = new XMLHttpRequest()
      request.onload = function () {
        if (request.state === 200) {
          console.log(1)
        }
      }
      request.open('get', url)
      request.send()
    }
  }
}
</script>
<style lang="less" scoped>
  .new-list {
    background: #ffffff;
    padding: 20px;
    &+& {
      margin-top: 20px;
      padding-top: 20px;
    }
    .list-title {
      border-bottom: 1px solid #adc2d7;
    }
  }
</style>
