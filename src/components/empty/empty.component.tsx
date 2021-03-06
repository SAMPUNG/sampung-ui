import { defineComponent } from 'vue'

import { createNamespace } from '@/utils'

import './empty.scss'

const bem = createNamespace('empty')

export default defineComponent({
  name: bem(),
  setup() {
    return () => <div class={bem()} />
  },
})
