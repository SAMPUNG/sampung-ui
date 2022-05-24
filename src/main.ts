import { createApp } from 'vue'
import app from './app.vue'
import * as plugins from './components/'
import router from './router'
import { resolveInstallAll } from './utils/install'

createApp(app).use(router).use(resolveInstallAll(plugins)).mount('#app')
