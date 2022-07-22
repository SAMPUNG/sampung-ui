import { defineComponent, ref } from 'vue'

import { BOOLEAN } from '@/configs'
import { createNamespace } from '@/utils'

const bem = createNamespace('checkbox-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const checked = ref<boolean>(false)
    const disabled = ref<boolean>(false)

    return () => (
      <div class={bem()}>
        <sam-select
          v-model={checked.value}
          legend="Checked"
          name="checked"
          options={BOOLEAN}
        />
        <sam-select
          v-model={disabled.value}
          legend="Disabled"
          name="disabled"
          options={BOOLEAN}
        />
        <div style="height: 16px;" />
        <sam-checkbox
          v-model={checked.value}
          disabled={disabled.value}
          legend="Checkbox"
          name="checkbox"
        />
      </div>
    )
  },
})
