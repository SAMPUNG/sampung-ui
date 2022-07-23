import { defineComponent, ref } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('marquee-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const size = ref<number>(25)

    return () => (
      <div class={bem()}>
        <sam-field
          legend="尺寸(size)"
          name="size"
        >
          <sam-input
            v-model={size.value}
            max={200}
            min={12}
            name="size"
            step={1}
            type="number"
          />
        </sam-field>
        <div class={bem('display')}>
          <sam-marquee size={size.value} />
        </div>
      </div>
    )
  },
})
