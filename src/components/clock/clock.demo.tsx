import { defineComponent } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('clock-demo')

export default defineComponent({
  name: bem(),
  setup() {
    return () => (
      <div class={bem()}>
        <sam-clock />
      </div>
    )
  },
})
