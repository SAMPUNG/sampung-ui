import { defineComponent } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('divider-demo')

export default defineComponent({
  name: bem(),
  setup() {
    return () => (
      <div class={bem()}>
        <sam-divider />
      </div>
    )
  },
})
