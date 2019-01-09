import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import word from '@/pages/word'
import about from '@/pages/about'
import life from '@/pages/life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/word',
      component: word
    },
    {
      path: '/life',
      component: life
    },
    {
      path: '/about',
      component: about
    }
  ]
})
