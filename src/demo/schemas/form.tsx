import { defineComponent, ref } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('form-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const value = ref(undefined)

    return () => (
      <div class={bem()}>
        <sam-form
          autocomplete="off"
          name="demo"
        >
          <sam-field
            legend="Legend"
            name="name"
          >
            <sam-input
              v-model={value.value}
              name="name-demo"
              placeholder="Please input something……"
            />
          </sam-field>
        </sam-form>
      </div>
    )
  },
})
