import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

import { createNamespace } from '@/utils'

import DEMO_MENU from '@/demo/routes'
import type { MenuValue } from '@/components/menu/menu.interface'

import './style.scss'

const bem = createNamespace('home')

const menu = DEMO_MENU.map(({ name, path }) => ({
  icon: 'api',
  legend: name,
  name,
  path: `/${path}`,
}))

export default defineComponent({
  name: bem(),
  setup() {
    const route = useRoute()

    const dark = ref<boolean>(true)
    const selected = ref<MenuValue>(route.name)

    const changeMode = (): void => {
      dark.value = !dark.value
      document.documentElement.dataset.mode = dark.value ? 'dark' : 'light'
    }

    document.documentElement.dataset.theme = 'dark'

    return () => (
      <div class={bem()}>
        <sam-affix
          container="body"
          horizontal="right"
          offset-x={16}
          offset-y={16}
        >
          <sam-button
            class={bem('mode')}
            icon="adjust"
            legend="Click To Change Mode"
            onClick={changeMode}
            palette="primary"
          />
        </sam-affix>
        <sam-affix
          container="body"
          offset-x={0}
          offset-y={0}
          vertical="both"
        >
          <sam-menu
            v-model={selected.value}
            class={bem('menu')}
            icon="api"
            legend="Menu"
            options={menu}
            width={200}
          />
        </sam-affix>
        <router-view />
      </div>
    )
  },
})