import { createRouter, createWebHistory, } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/category',
    component: () => import('@/views/Category.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/shopping',
    component: () => import('@/views/Shopping.vue')
  },
  {
    path: '/center',
    component: () => import('@/views/Center.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
