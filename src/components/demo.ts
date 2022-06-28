export default [
  {
    path: 'button-demo',
    name: 'Demo: Button',
    component: () => import('@/components/button/button.demo'),
  },
  {
    path: 'calendar-demo',
    name: 'Demo: Calendar',
    component: () => import('@/components/calendar/calendar.demo'),
  },
  {
    path: 'carousel-demo',
    name: 'Demo: Carousel',
    component: () => import('@/components/carousel/carousel.demo'),
  },
  {
    path: 'chart-demo',
    name: 'Demo: Chart',
    component: () => import('@/components/chart/chart.demo'),
  },
  {
    path: 'clock-demo',
    name: 'Demo: Clock',
    component: () => import('@/components/clock/clock.demo'),
  },
  {
    path: 'form-demo',
    name: 'Demo: Form',
    component: () => import('@/components/form/form.demo'),
  },
  {
    path: 'tabs-demo',
    name: 'Demo: Tabs',
    component: () => import('@/components/tabs/tabs.demo'),
  },
]
