import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import demo from '@/demo/routes'

const routes: Array<RouteRecordRaw> = [
  {
    children: [
      {
        component: () => import('@/pages/greeting'),
        name: 'Greeting',
        path: '',
      },
      ...demo,
    ],
    component: () => import('@/pages/home'),
    name: 'Home',
    path: '/',
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: 'smooth',
  //     }
  //   } else {
  //     return {
  //       el: '#main',
  //       top: -10,
  //     }
  //   }
  // },
})

router.afterEach((to) => {
  document.title = to.name as string
})

export default router
