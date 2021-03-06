import { defineComponent } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('empty-demo')

export default defineComponent({
  name: bem(),
  setup() {
    return () => (
      <div class={bem()}>
        <sam-empty />
      </div>
    )
  },
})
