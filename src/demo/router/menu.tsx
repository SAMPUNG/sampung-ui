import { defineComponent, reactive, ref } from 'vue'

import { createNamespace } from '@/utils'

import DEMO_MENU from '@/demo/routes'

const bem = createNamespace('menu-demo')

const menu = DEMO_MENU.map(({ name, path }) => ({
  children: [
    {
      legend: `홈페이지 from ${name} 1`,
      name: `home from ${name} 1`,
      path: '/',
    },
    {
      legend: `홈페이지 from ${name} 2`,
      name: `home from ${name} 2`,
      path: '/',
    },
    {
      legend: `홈페이지 from ${name} 3`,
      name: `home from ${name} 3`,
      path: '/',
    },
  ],
  expanded: true,
  icon: 'api',
  legend: name,
  name,
  path,
}))

export default defineComponent({
  name: bem(),
  setup() {
    const options = reactive(menu)
    const selected = ref<string>('Menu')

    return () => (
      <div class={bem()}>
        <sam-menu
          v-model={selected.value}
          accordion={false}
          class={bem('menu')}
          icon="api"
          legend="메뉴"
          options={options}
          width={300}
        />
      </div>
    )
  },
})
