import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import template from './demo.html?row'

export default defineComponent({
  name: bem('empty'),
  template,
  computed: {
    status() {
      return bem('empty')
    },
  }
})
