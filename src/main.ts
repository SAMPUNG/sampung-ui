import app from './app'
import * as plugins from './components/'
import router from './router'
import { resolveInstallAll } from './utils/install'

app.use(router).use(resolveInstallAll(plugins)).mount('#app')
