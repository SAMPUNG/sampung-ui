import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import demo from '@/components/demo'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
    children: demo,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
