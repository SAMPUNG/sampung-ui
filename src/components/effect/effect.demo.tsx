import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoEffect from './effect.component'

const bem = createNamespace('effect-demo')

export default defineComponent({
  name: bem(),
  components: { DemoEffect },
  render() {
    return (
      <div class={bem()}>
        <demo-effect />
      </div>
    )
  },
})
