import { defineComponent, ref } from 'vue'

import type { Appearance, Palette } from '@/types/component'
import createNamespace from '@/utils/namespace'

import DemoButton from '@/components/button/button.component'
import type { ButtonMode } from '@/components/button/button.interface'
import { manifest } from '@/components/icon/icon.config'
import DemoSelect from '@/components/select/select.component'

const bem = createNamespace('button-demo')

const icons = manifest['material-design']
  .slice(300, 304)
  .map(({ name }) => ({ icon: name, legend: name, name }))

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
    {
      legend: 'Text',
      name: 'text',
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
  components: { DemoButton, DemoSelect },
  setup() {
    const appearance = ref<Appearance>('outline')
    const icon = ref<string>(icons[0].name)
    const mode = ref<ButtonMode>('normal')
    const palette = ref<Palette>('primary')

    return () => (
      <div class={bem()}>
        <demo-button
          appearance={appearance.value}
          icon={icon.value}
          legend="Button"
          mode={mode.value}
          palette={palette.value}
        />
        <hr class={bem('line')} />
        <demo-select vModel={appearance.value} options={options.appearance} />
        <demo-select vModel={palette.value} options={options.palette} />
        <demo-select vModel={mode.value} options={options.mode} />
        <demo-select vModel={icon.value} options={options.icon} />
      </div>
    )
  },
})
