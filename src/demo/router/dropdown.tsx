import { defineComponent, ref } from 'vue'

import { ALPHABET } from '@/configs'
import { createNamespace } from '@/utils'

const bem = createNamespace('dropdown-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const maxHeight = ref<number>(325)
    const selected = ref<string>(ALPHABET[1].name)

    return () => (
      <div class={bem()}>
        <div class={bem('controls')}>
          <sam-form
            autocomplete="off"
            name="demo"
          >
            <sam-field
              legend="max-height"
              name="maxHeight"
            >
              <sam-input
                v-model={maxHeight.value}
                name="maxHeight"
                placeholder="Please input max height of dropdown"
                type="number"
              />
            </sam-field>
          </sam-form>
        </div>
        <div class={bem('display')}>
          <sam-dropdown
            v-model={selected.value}
            legend="Dropdown"
            max-height={maxHeight.value}
            options={ALPHABET}
          />
        </div>
      </div>
    )
  },
})
