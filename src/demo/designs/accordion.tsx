import { defineComponent, ref } from 'vue'

import { BOOLEAN, DIRECTION, RICH_TEXT } from '@/configs'
import type { Direction } from '@/types'
import { createNamespace } from '@/utils'

const bem = createNamespace('accordion-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const direction = ref<Direction>('horizontal')
    const fulfilled = ref<boolean>(false)
    const selected = ref<string>(RICH_TEXT[0].name)

    return () => (
      <div class={bem()}>
        <sam-select
          v-model={direction.value}
          legend="Direction"
          name="direction"
          options={DIRECTION}
        />
        <sam-select
          v-model={fulfilled.value}
          legend="Fulfilled"
          name="fulfilled"
          options={BOOLEAN}
        />
        <div class={bem('container')}>
          <sam-accordion
            v-model={selected.value}
            direction={direction.value}
            fulfilled={fulfilled.value}
            name="accordion"
            options={RICH_TEXT}
          />
        </div>
      </div>
    )
  },
})
