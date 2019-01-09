<template>
  <div class="top-nav">
    <div class="top-nav-title">秋过冬漫长</div>
    <ul class="top-nav-menu">
      <li @click="changeTab(item)" :class="{'top-nav-menu-item__checked': item.checked}" class="top-nav-menu-item" v-for="(item,index) in list" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '首页',
          value: 'home',
          path: '/home',
          checked: true
        },
        {
          name: '文字',
          value: 'word',
          path: '/word',
          checked: false
        },
        {
          name: '慢生活',
          value: 'life',
          path: '/life',
          checked: false
        },
        {
          name: '关于我',
          value: 'about',
          path: '/about',
          checked: false
        }
      ]
    }
  },
  methods: {
    changeTab (item) {
      this.list.forEach(el => {
        el.checked = false
      })
      item.checked = true
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="less" scoped>
  .top-nav {
    margin: 0 auto;
    width: 1200px;
    color: #ffffff;
    &-title {
      text-shadow: rgb(17, 63, 110) 1px 3px 6px;
      font-size: 42px;
      font-weight: 800;
    }
    &-menu {
      margin-top: 50px;
      text-shadow: 1px 2px 3px #113f6e;
      overflow: hidden;
      &-item {
        font-size: 24px;
        padding:5px 20px;
        margin-right: 5px;
        float:left;
        border-bottom: 1px solid transparent;
        &:hover {
          box-shadow: 0 0 30px #8c9fb3 inset;
          border-bottom: 1px solid #ffffff;
        }
        &__checked {
          box-shadow: 0 0 30px #8c9fb3 inset;
          border-bottom: 1px solid #ffffff;
        }
      }
    }
  }
</style>
