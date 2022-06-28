import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoButton from './button.component'

const bem = createNamespace('button-demo')

export default defineComponent({
  name: bem(),
  components: { DemoButton },
  setup() {
    const status = ref('on')

    return {
      status,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <demo-button legend="Button: OFF" />
        <demo-button
          legend="Button: Switch"
          mode={this.status}
          onChange={(value: string) => (this.status = value)}
        />
        <demo-button legend="Button: Loading" mode="loading" />
        <demo-button legend="Button: Disabled" mode="disabled" />
      </div>
    )
  },
})
