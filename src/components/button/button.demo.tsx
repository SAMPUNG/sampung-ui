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
        <demo-button legend="Button" />
        <demo-button vModel:status={this.status} diode legend="Button: Diode" />
        <demo-button legend="Button: Loading" status="loading" />
        <demo-button legend="Button: Disabled" status="disabled" />
      </div>
    )
  },
})
