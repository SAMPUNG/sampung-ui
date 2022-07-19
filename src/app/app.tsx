import { defineComponent } from 'vue'

import { createNamespace } from '@/utils'

import './style.scss'

const bem = createNamespace('home')

export default defineComponent({
  name: bem(),
  setup() {
    return () => <router-view />
  },
})
