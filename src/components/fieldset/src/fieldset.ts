import { defineComponent } from 'vue'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('fieldset'),
  props: {
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    form: {
      default: undefined,
      required: false,
      type: String
    },
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
      return bem('fieldset', this.disabled ? 'disabled' : '')
    },
  }
})
