import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import './affix.scss'

const bem = createNamespace('affix')

export default defineComponent({
  name: bem(),
  setup() {
    return () => <span class={bem()}></span>
  },
})
