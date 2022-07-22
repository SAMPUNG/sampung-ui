import { includesBaseProps } from '@/utils'

export default {
  ...includesBaseProps(),

  disabled: {
    default: false,
    required: false,
    type: Boolean,
  },
  modelValue: {
    default: false,
    required: false,
    type: Boolean,
  },
}
