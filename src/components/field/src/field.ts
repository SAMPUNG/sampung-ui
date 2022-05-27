import { defineComponent } from 'vue'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('field'),
  props: {
    legend: {
      default: undefined,
      required: false,
      type: String
    },
    name: {
      default: undefined,
      required: false,
      type: String
    },
  },
  computed: {
    status() {
      return bem('field')
    },
  }
})
