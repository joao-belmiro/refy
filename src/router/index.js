import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/login.vue'
import layout from '../views/layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: layout,
    children: [
      {
        path: '/',
        name: 'dash',
        component: () => import('@/views/home.vue')
      },
      {
        path: '/cliente',
        name: 'cliente',
        component: () => import('@/views/cliente.vue')
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
