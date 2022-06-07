export default [
  {
    path: 'demo-calendar',
    name: 'Demo: Calendar',
    component: () => import('@/components/calendar/calendar.demo')
  },
  {
    path: 'demo-carousel',
    name: 'Demo: Carousel',
    component: () => import('@/components/carousel/carousel.demo')
  },
  {
    path: 'demo-chart',
    name: 'Demo: Chart',
    component: () => import('@/components/chart/chart.demo')
  },
  {
    path: 'demo-clock',
    name: 'Demo: Clock',
    component: () => import('@/components/clock/clock.demo')
  },
  {
    path: 'demo-tabs',
    name: 'Demo: Tabs',
    component: () => import('@/components/tabs/tabs.demo')
  }
]