import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: index
    },
    {
      path: '/login',
      name: '登录页面',
      component: login
    }
  ]
})
