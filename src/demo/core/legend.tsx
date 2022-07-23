import { defineComponent, ref } from 'vue'

import { LANGUAGE } from '@/configs'
import { HELLO_WORLD } from '@/i18n'
import { createNamespace } from '@/utils'

const bem = createNamespace('legend-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const selected = ref<string>(document.documentElement.lang)

    const onChange = (value: string): void => {
      document.documentElement.lang = value
    }

    return () => (
      <div class={bem('pack')}>
        <sam-select
          v-model={selected.value}
          legend="Language"
          options={LANGUAGE}
          onChange={onChange}
        />
        <div class={bem()}>
          <sam-legend legend={HELLO_WORLD} />
        </div>
      </div>
    )
  },
})
