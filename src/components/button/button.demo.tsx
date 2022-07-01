import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoButton from './button.component'
import DemoSelect from '@/components/select/select.component'
import { ButtonStatus } from './button.interface'

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
    const appearance = ref('outline')
    const palette = ref('primary')
    const status = ref('on')

    return {
      appearance,
      palette,
      status,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <demo-button
          appearance={this.appearance}
          vModel:status={this.status}
          legend="Button"
          palette={this.palette}
        />
        <hr class={bem('line')} />
        <demo-select vModel={this.appearance} options={options.appearance} />
        <demo-select vModel={this.palette} options={options.palette} />
        <demo-select vModel={this.status} options={options.status} />
      </div>
    )
  },
})
