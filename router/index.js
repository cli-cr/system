import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 添加的meta是为了实现面包屑的动态显示
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    // 登录页
    path: '/login',
    name: 'login',

    component: () => import('../views/login/index.vue')
  },
  {
    // 布局页
    path: '/home',
    name: 'home',
    meta: {title: '首页'},
    redirect: '/index',
    component: () => import('../views/home/index.vue'),
    // 子路由
    children:[
      {
        // 布局首页
        path: '/index',
        name: 'index',
        // meta: {title: '首页'},
        component: () => import('../views/home/index/index.vue')
      },
      {
        // 数据管理
        path: '/stats',
        name: 'stats',
        meta: {title: '数据管理'},
        component: () => import('../views/home/stats/index.vue')
      },
      {
        // 信息管理
        path: '/wms',
        name: 'wms',
        meta: {title: '信息管理'},
        component: () => import('../views/home/wms/index.vue'),
        // 子路由
        children: [
          {
            // 列表管理
            path: '/wms/list',
            name: 'wmsList',
            meta: {title: '列表管理'},
            component: () => import('../views/home/wms/list.vue')
          }
        ]
      },
      {
        // 用户管理
        path: '/user',
        name: 'user',
        meta: {title: '用户管理'},
        component: () => import('../views/home/user/index.vue'),
        children: [
          {
            // 用户统计
            path: '/user/stats',
            name: 'userStats',
            meta: {title: '用户统计'},
            component: () => import('../views/home/user/stats.vue')
          },
          {
            // 角色统计
            path: '/user/role',
            name: 'userRole',
            meta: {title: '角色统计'},
            component: () => import('../views/home/user/role.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
