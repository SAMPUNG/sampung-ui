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
  offIcon: {
    default: 'radio-button-off',
    required: false,
    type: String,
  },
  onIcon: {
    default: 'radio-button-on',
    required: false,
    type: String,
  },
}
