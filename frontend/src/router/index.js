import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/pages/home')
const word = () => import('@/pages/word')
const about = () => import('@/pages/about')
const life = () => import('@/pages/life')
const wordEditor = () => import('@/pages/editor/word')
const photoEditor = () => import('@/pages/editor/photo')
const article = () => import('@/pages/article')

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/editword',
      component: wordEditor
    },
    {
      path: '/editphoto',
      component: photoEditor
    },
    {
      path: '/article',
      component: article
    }
  ]
})
