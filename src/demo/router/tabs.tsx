import { defineComponent, ref } from 'vue'

import { ALPHABET_TABS } from '@/configs'
import { createNamespace } from '@/utils'

const bem = createNamespace('tabs-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const selected = ref<string>(ALPHABET_TABS[1].name)

    return () => (
      <div class="demo">
        <sam-tabs
          v-model={selected.value}
          options={ALPHABET_TABS}
        />
      </div>
    )
  },
})
