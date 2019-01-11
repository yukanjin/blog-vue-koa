<template>
  <div id="app">
    <div class="hidden-scroll-bar">
      <top-nav></top-nav>
      <div class="container">
        <div class="left-part">
          <transition name="route-change">
            <router-view/>
          </transition>
        </div>
        <div class="right-part">
          <new-list title="最新发布" :list="typeList"></new-list>
          <new-list title="文章分类" :list="typeList"></new-list>
          <new-list title="友情链接" :list="typeList"></new-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/TopNav'
import newList from '@/components/newList'
import { getTypeList, postData } from '@/api/index'
export default {
  name: 'App',
  components: {
    topNav,
    newList
  },
  data () {
    return {
      typeList: []
    }
  },
  methods: {
    async postdata () {
      const res = await postData({name: 'post data'})
      console.log(res)
    },
    async getTypeList () {
      const res = await getTypeList({name: 'type'})
      this.typeList = res.data
      console.log(this.typeList)
    }
  },
  mounted () {
    this.getTypeList()
  }
}
</script>

<style>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
}
body {
  background: #d8e2eb url('./assets/images/bg.jpg') no-repeat top center;
}
#app {
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.hidden-scroll-bar{
  width: calc(100% + 15px);
  overflow-y: scroll;
  height: 100%;
}
.route-change-enter-active {
  transition: transform .8s linear, opacity .8s linear;
}
.route-change-enter {
  opacity: 0;
}
</style>
