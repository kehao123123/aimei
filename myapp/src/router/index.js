import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from './../views/home/index'
import Cart from './../views/cart/index'
import Detail from './../views/detail/index'
import Live from './../views/live/index'
import Notice from './../views/notice/index'
import Service from './../views/service/index'
import User from './../views/user/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/live',
    name: 'live',
    component: Live
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
