import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import './empty.scss'

const bem = createNamespace('empty')

export default defineComponent({
  name: bem(),
  setup() {
    return () => <span class={bem()}></span>
  },
})
