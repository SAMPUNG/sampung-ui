import type { PropType } from 'vue'

import { includesBaseProps } from '@/utils'

import type { ButtonMode, ButtonType } from './button.interface'

export default {
  ...includesBaseProps(),

  inline: {
    default: true,
    required: false,
    type: Boolean,
  },
  mode: {
    default: 'normal',
    required: false,
    type: String as PropType<ButtonMode>,
  },
  type: {
    default: 'button',
    required: false,
    type: String as PropType<ButtonType>,
  },
  value: {
    default: undefined,
    required: false,
    type: String,
  },
}
