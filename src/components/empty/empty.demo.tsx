import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoEmpty from './empty.component'

const bem = createNamespace('empty-demo')

export default defineComponent({
  name: bem(),
  components: { DemoEmpty },
  render() {
    return (
      <div class={bem()}>
        <demo-empty />
      </div>
    )
  },
})
