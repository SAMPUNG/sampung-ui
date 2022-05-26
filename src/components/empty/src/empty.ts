import { defineComponent } from 'vue'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('empty'),
  computed: {
    status() {
      return bem('empty')
    },
  }
})
