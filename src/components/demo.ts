export default [
  {
    path: 'button-demo',
    name: 'Button',
    component: () => import('@/components/button/button.demo'),
  },
  {
    path: 'calendar-demo',
    name: 'Calendar',
    component: () => import('@/components/calendar/calendar.demo'),
  },
  {
    path: 'carousel-demo',
    name: 'Carousel',
    component: () => import('@/components/carousel/carousel.demo'),
  },
  {
    path: 'chart-demo',
    name: 'Chart',
    component: () => import('@/components/chart/chart.demo'),
  },
  {
    path: 'clock-demo',
    name: 'Clock',
    component: () => import('@/components/clock/clock.demo'),
  },
  {
    path: 'dropdown-demo',
    name: 'Dropdown',
    component: () => import('@/components/dropdown/dropdown.demo'),
  },
  {
    path: 'form-demo',
    name: 'Form',
    component: () => import('@/components/form/form.demo'),
  },
  {
    path: 'icon-demo',
    name: 'Icon',
    component: () => import('@/components/icon/icon.demo'),
  },
  {
    path: 'tabs-demo',
    name: 'Tabs',
    component: () => import('@/components/tabs/tabs.demo'),
  },
]
