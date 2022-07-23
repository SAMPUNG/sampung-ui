import { defineComponent } from 'vue'

import { createNamespace } from '@/utils'

import './divider.scss'

const bem = createNamespace('divider')

export default defineComponent({
  name: bem(),
  setup() {
    return () => <div class={bem()} />
  },
})
