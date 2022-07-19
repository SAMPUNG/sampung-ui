import { defineComponent } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('affix-demo')

export default defineComponent({
  name: bem(),
  setup() {
    return () => (
      <div class={bem()}>
        <sam-affix
          horizontal="right"
          legend="Affix"
        >
          <div>Slot Default</div>
        </sam-affix>
        <div class={bem('content')} />
      </div>
    )
  },
})
