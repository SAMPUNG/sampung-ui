import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

const bem = createNamespace('calendar-demo')

export default defineComponent({
  name: bem(),
  setup() {
    return () => (
      <div class={bem()}>
        <sam-calendar />
      </div>
    )
  },
})
