import { defineComponent, reactive, ref } from 'vue'

import createNamespace from '@/utils/namespace'

import DEMO_MENU from '@/components/demo'

const bem = createNamespace('menu-demo')

const menu = DEMO_MENU.map(({ name, path }) => ({
  children: [
    {
      legend: `Home from ${name} 1`,
      name: `home from ${name} 1`,
      path: '/',
    },
    {
      legend: `Home from ${name} 2`,
      name: `home from ${name} 2`,
      path: '/',
    },
    {
      legend: `Home from ${name} 3`,
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
          legend="Menu"
          options={options}
          width={300}
        />
      </div>
    )
  },
})
