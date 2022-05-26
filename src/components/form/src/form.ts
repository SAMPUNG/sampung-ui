import { defineComponent } from 'vue'
// import { FormEnctype, FormMethod, FormTarget  } from '@/types/form'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('form'),
  props: {
    action: {
      default: undefined,
      required: false,
      type: String
    },
    autocomplete: {
      default: 'on',
      required: false,
      type: String
    },
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    enctype: {
      default: 'multipart/form-data',
      required: false,
      type: String
    },
    method: {
      default: 'post',
      required: false,
      type: String
    },
    name: {
      default: undefined,
      required: false,
      type: String
    },
    target: {
      default: undefined,
      required: false,
      type: String
    }
  },
  computed: {
    status() {
      return bem('form', this.disabled ? 'disabled' : '')
    },
  }
})
