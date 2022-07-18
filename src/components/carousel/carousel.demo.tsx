import { defineComponent, ref } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('carousel-demo')

const demoOptions = ['/img/iu.jpg', '/img/jal-mahal.jpg', '/img/mesa.jpg']

export default defineComponent({
  name: bem(),
  setup() {
    const options = ref<string[]>(demoOptions)

    return () => (
      <div class={bem()}>
        <sam-carousel options={options.value} />
      </div>
    )
  },
})
