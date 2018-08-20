import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: index,
      redirect: '/sys/main',
      children: [
        {
          path: '/sys/main',
          name: '主页',
          component:  resolve => require(['@/views/modules/main'], resolve),//懒加载
        },
        {
          path: '/sys/user',
          name: '用户管理',
          component:  resolve => require(['@/views/modules/sys/user'], resolve),//懒加载
        },
        {
          path: '/sys/menu',
          name: '菜单管理',
          component:  resolve => require(['@/views/modules/sys/menu'], resolve),//懒加载
        }
      ]
    },
    {
      path: '/login',
      name: '登录页面',
      component: login
    }
  ]
})
