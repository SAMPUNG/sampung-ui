import { createApp, defineComponent } from 'vue'
import app from './app.vue'
import * as plugins from './components/'
import router from './router'
import { resolveInstallAll } from './utils/install'

import './styles/reset.scss'

createApp(app).use(router).use(resolveInstallAll(plugins)).mount('#app')
