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
          name: '我的文字',
          value: 'word',
          path: '/word',
          checked: false
        },
        {
          name: '我的相册',
          value: 'life',
          path: '/life',
          checked: false
        },
        {
          name: '关于我',
          value: 'about',
          path: '/about',
          checked: false
        },
        {
          name: '编辑',
          value: 'editor',
          path: '/editword',
          checked: false
        },
        {
          name: '编辑相册',
          value: 'photoeditor',
          path: '/editphoto',
          checked: false
        }
      ]
    }
  },
  watch: {
    '$route.path': function (path) {
      this.list.forEach(item => {
        item.checked = false
        if (path.indexOf(item.path) !== -1) {
          item.checked = true
        }
      })
    }
  },
  methods: {
    changeTab (item) {
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
      margin-top: 60px;
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
