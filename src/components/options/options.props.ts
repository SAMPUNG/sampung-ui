import type { PropType } from 'vue'

import type { Direction } from '@/types'

import type { OptionRecord, OptionsPicked } from './options.interface'

export default {
  direction: {
    default: 'horizontal',
    required: false,
    type: String as PropType<Direction>,
  },
  flex: {
    default: true,
    required: false,
    type: Boolean,
  },
  height: {
    default: 32,
    required: false,
    type: Number,
  },
  modelValue: {
    default: [],
    required: true,
    type: Array as PropType<OptionsPicked>,
  },
  multiple: {
    default: false,
    required: false,
    type: Boolean,
  },
  options: {
    default: () => [],
    type: Array as PropType<OptionRecord[]>,
  },
  wrap: {
    default: true,
    required: false,
    type: Boolean,
  },
}
