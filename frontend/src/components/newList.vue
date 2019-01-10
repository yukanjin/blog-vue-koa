<template>
  <div class="new-list">
    <div class="list-title">{{title}}</div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div>{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'list'],
  methods: {
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
