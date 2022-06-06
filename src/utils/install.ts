import type { App, Component, Plugin } from 'vue'

const resolveName = (): string => 'SamComponent' + Math.random().toString().slice(2, 6)
const resolveInstall = (component: Component, alias?: string): Plugin => ({
  install: (app: App): void => {
    const name: string = alias || component?.name || resolveName()
    app.component(name, component)
  }
})
const resolveInstallAll = (plugins: Record<string, Plugin>): Plugin => ({
  install: (app: App): void => {
    Object.values(plugins).forEach(plugin => {
      app.use(plugin)
    })
  }
})

export default resolveInstall
export { resolveInstallAll }
