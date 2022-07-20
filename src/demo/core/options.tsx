import { defineComponent, ref } from 'vue'

import { createNamespace } from '@/utils'
import type { OptionsPicked } from '@/components/options/options.interface'
import type { Direction } from '@/types'
import { ALPHABET, BOOLEAN, DIRECTION } from '@/configs'

const bem = createNamespace('options-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const direction = ref<Direction>('horizontal')
    const multiple = ref<boolean>(false)
    const selected = ref<OptionsPicked>([ALPHABET[0].name])

    return () => (
      <div class={bem()}>
        <sam-select
          v-model={multiple.value}
          legend="Multiple"
          name="multiple"
          options={BOOLEAN}
        />
        <sam-select
          v-model={direction.value}
          legend="Direction"
          name="direction"
          options={DIRECTION}
        />
        <sam-options
          v-model={selected.value}
          direction={direction.value}
          multiple={multiple.value}
          options={ALPHABET}
        />
        <hr class={bem('line')} />
        <span>Selected: {selected.value.join(',')}</span>
      </div>
    )
  },
})
