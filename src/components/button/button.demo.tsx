import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoButton from './button.component'
import { manifest } from '@/components/icon/icon.config'
import DemoSelect from '@/components/select/select.component'
import type { Appearance, Palette } from '@/types/component'
import type { ButtonMode } from './button.interface'

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
      legend: 'Active',
      name: 'active',
    },
    {
      legend: 'Disabled',
      name: 'disabled',
    },
    {
      legend: 'Loading',
      name: 'loading',
    },
    {
      legend: 'Normal',
      name: 'normal',
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

    return {
      appearance,
      icon,
      mode,
      palette,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <demo-button
          appearance={this.appearance}
          icon={this.icon}
          legend="Button"
          mode={this.mode}
          palette={this.palette}
        />
        <hr class={bem('line')} />
        <demo-select vModel={this.appearance} options={options.appearance} />
        <demo-select vModel={this.palette} options={options.palette} />
        <demo-select vModel={this.mode} options={options.mode} />
        <demo-select vModel={this.icon} options={options.icon} />
      </div>
    )
  },
})
