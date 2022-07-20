import type { PropType } from 'vue'

import type { Direction, RichText } from '@/types'

export default {
  direction: {
    default: 'horizontal',
    required: false,
    type: String as PropType<Direction>,
  },
  fulfilled: {
    default: false,
    required: false,
    type: Boolean,
  },
  gap: {
    default: 24,
    required: false,
    type: Number,
  },
  modelValue: {
    default: '',
    required: false,
    type: String,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  options: {
    default: () => [],
    required: true,
    type: Array as PropType<RichText[]>,
  },
}
