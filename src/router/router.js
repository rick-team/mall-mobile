import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/detail',
      component: () => import('@/views/detail')
    },
    {
      path: '/peopleCenter',
      name: 'peopleCenter',
      component: () => import('@/views/peopleCenter')
    },
  ]
})
