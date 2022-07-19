import { includesBaseProps } from '@/utils'

export default {
  ...includesBaseProps(),

  font: {
    default: 'material-design',
    required: false,
    type: String,
  },
}
