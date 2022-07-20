import { defineComponent, ref } from 'vue'

import type { SelectValue } from '@/components/select/select.interface'
import { ALPHABET } from '@/configs'
import { createNamespace } from '@/utils'

const bem = createNamespace('select-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const selected = ref<SelectValue>(ALPHABET[0].name)

    return () => (
      <div class={bem()}>
        <sam-select
          v-model={selected.value}
          options={ALPHABET}
        />
      </div>
    )
  },
})
