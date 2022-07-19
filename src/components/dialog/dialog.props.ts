import { includesBaseProps } from '@/utils'

export default {
  ...includesBaseProps(),

  modelValue: {
    default: false,
    required: true,
    type: Boolean,
  },
  withClose: {
    default: true,
    required: false,
    type: Boolean,
  },
  withHeader: {
    default: true,
    required: false,
    type: Boolean,
  },
  withFooter: {
    default: true,
    required: false,
    type: Boolean,
  },
}
