import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoButton from './button.component'
import { manifest } from '@/components/icon/icon.config'
import DemoSelect from '@/components/select/select.component'
import type { Appearance, Palette } from '@/types/component'
import type { ButtonStatus } from './button.interface'

const bem = createNamespace('button-demo')

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
  icon: manifest.slice(0, 4).map(({ name }) => ({ icon: name, legend: name, name })),
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
  status: [
    {
      legend: 'Off',
      name: 'off',
    },
    {
      legend: 'On',
      name: 'on',
    },
    {
      legend: 'Loading',
      name: 'loading',
    },
    {
      legend: 'Disabled',
      name: 'disabled',
    },
  ],
}

export default defineComponent({
  name: bem(),
  components: { DemoButton, DemoSelect },
  setup() {
    const appearance = ref<Appearance>('outline')
    const icon = ref<string>(manifest[0].name)
    const palette = ref<Palette>('primary')
    const status = ref<ButtonStatus>('off')

    return {
      appearance,
      icon,
      palette,
      status,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <demo-button
          appearance={this.appearance}
          icon={this.icon}
          legend="Button"
          palette={this.palette}
          vModel:status={this.status}
        />
        <hr class={bem('line')} />
        <demo-select vModel={this.appearance} options={options.appearance} />
        <demo-select vModel={this.palette} options={options.palette} />
        <demo-select vModel={this.status} options={options.status} />
        <demo-select vModel={this.icon} options={options.icon} />
      </div>
    )
  },
})
