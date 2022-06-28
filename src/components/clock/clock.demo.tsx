import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoClock from './clock.component'

const bem = createNamespace('clock-demo')

export default defineComponent({
  name: bem(),
  components: { DemoClock },
  render() {
    return (
      <div class={bem()}>
        <demo-clock />
      </div>
    )
  },
})
