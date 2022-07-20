import { defineComponent } from 'vue'

import { RICH_TEXT } from '@/configs'
import { createNamespace } from '@/utils'

const bem = createNamespace('carousel-demo')

export default defineComponent({
  name: bem(),
  setup() {
    return () => (
      <div class={bem()}>
        <sam-carousel options={RICH_TEXT} />
      </div>
    )
  },
})
