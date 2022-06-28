import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoButton from './button.component'

const bem = createNamespace('button-demo')

export default defineComponent({
  name: bem(),
  components: { DemoButton },
  render() {
    return (
      <div class={bem()}>
        <demo-button legend="Legend" />
      </div>
    )
  },
})
