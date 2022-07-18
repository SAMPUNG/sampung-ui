import { defineComponent, ref } from 'vue'

import { createNamespace } from '@/utils'
import type { Appearance, Palette } from '@/types'

import type { ButtonMode } from '@/components/button/button.interface'
import { manifest } from '@/components/icon/icon.config'

const bem = createNamespace('button-demo')

const icons = manifest['material-design'].slice(300, 304).map(({ name }) => ({
  icon: name,
  legend: name,
  name,
}))

const options = {
  appearance: [
    {
      legend: 'Dashed',
      name: 'dashed',
    },
    {
      legend: 'Fill',
      name: 'fill',
    },
    {
      legend: 'Legacy',
      name: 'legacy',
    },
    {
      legend: 'Outline',
      name: 'outline',
    },
  ],
  icon: icons,
  mode: [
    {
      legend: 'Diode',
      name: 'diode',
    },
    {
      legend: 'Disabled',
      name: 'disabled',
    },
    {
      legend: 'Knob',
      name: 'knob',
    },
    {
      legend: 'Loading',
      name: 'loading',
    },
    {
      legend: 'Normal',
      name: 'normal',
    },
    {
      legend: 'Switch',
      name: 'switch',
    },
  ],
  palette: [
    {
      legend: 'Error',
      name: 'error',
    },
    {
      legend: 'Primary',
      name: 'primary',
    },
    {
      legend: 'Secondary',
      name: 'secondary',
    },
    {
      legend: 'Success',
      name: 'success',
    },
    {
      legend: 'Warning',
      name: 'warning',
    },
  ],
}

export default defineComponent({
  name: bem(),
  setup() {
    const appearance = ref<Appearance>('outline')
    const icon = ref<string>(icons[0].name)
    const mode = ref<ButtonMode>('normal')
    const palette = ref<Palette>('primary')

    return () => (
      <div class={bem()}>
        <sam-button
          appearance={appearance.value}
          icon={icon.value}
          legend="Button"
          mode={mode.value}
          palette={palette.value}
        />
        <hr class={bem('line')} />
        <sam-select
          v-model={appearance.value}
          legend="Appearance"
          name="appearance"
          options={options.appearance}
        />
        <sam-select
          v-model={palette.value}
          legend="Palette"
          name="palette"
          options={options.palette}
        />
        <sam-select
          v-model={mode.value}
          legend="Mode"
          name="mode"
          options={options.mode}
        />
        <sam-select
          v-model={icon.value}
          legend="Icon"
          name="icon"
          options={options.icon}
        />
      </div>
    )
  },
})
