import type { PropType } from 'vue'

import type { Container } from '@/types'

import { includesBaseProps } from '@/utils'

import type { AffixHorizontal, AffixVertical } from './affix.interface'

export default {
  ...includesBaseProps(),

  container: {
    default: 'parent',
    required: false,
    type: String as PropType<Container>,
  },
  horizontal: {
    default: 'left',
    required: false,
    type: String as PropType<AffixHorizontal>,
  },
  offsetX: {
    default: 16,
    required: false,
    type: Number,
  },
  offsetY: {
    default: 16,
    required: false,
    type: Number,
  },
  vertical: {
    default: 'top',
    required: false,
    type: String as PropType<AffixVertical>,
  },
}
