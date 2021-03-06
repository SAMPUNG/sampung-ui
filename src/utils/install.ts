import type { App, Component, Plugin } from 'vue'

import { block } from './namespace'

const resolveName = (): string =>
  `${block}-component-${Math.random().toString().slice(2, 6)}`

export const resolveInstall = (
  component: Component,
  alias?: string
): Plugin => ({
  install: (app: App): void => {
    const name: string = alias || component?.name || resolveName()
    app.component(name, component)
  },
})

export const resolveInstallAll = (plugins: Record<string, Plugin>): Plugin => ({
  install: (app: App): void => {
    Object.values(plugins).forEach((plugin) => {
      app.use(plugin)
    })
  },
})
