import { createApp } from 'vue'

import plugins from '@/plugins'

import appComponent from './app'
import appRouter from './router'

createApp(appComponent).use(appRouter).use(plugins).mount('#app')
