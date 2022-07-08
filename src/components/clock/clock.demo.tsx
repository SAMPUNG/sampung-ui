import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import DemoClock from '@/components/clock/clock.component'

const bem = createNamespace('clock-demo')

export default defineComponent({
  name: bem(),
  components: { DemoClock },
  setup() {
    return () => (
      <div class={bem()}>
        <demo-clock />
      </div>
    )
  },
})
