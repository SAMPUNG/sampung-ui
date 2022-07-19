import { type PropType } from 'vue'

import { includesBaseProps, validateRegular } from '@/utils'

import type { DropdownOption, DropdownValue } from './dropdown.interface'

// - Appearance
// - Direction
// - Disabled
// - MaxColumnWidth
// - MaxHeight
// - ModelValue
// - MinColumnWidth
// - Options
// - Trigger

export default {
  ...includesBaseProps({
    icon: 'expand-more',
  }),

  maxColumnWidth: {
    default: 225,
    required: false,
    type: Number,
  },
  maxHeight: {
    default: 325,
    required: false,
    type: Number,
  },
  modelValue: {
    default: '',
    type: [String, Number, Boolean, undefined] as PropType<DropdownValue>,
    validator: validateRegular,
  },
  minColumnWidth: {
    default: 125,
    required: false,
    type: Number,
  },
  options: {
    default: () => [],
    type: Array as PropType<DropdownOption[]>,
  },
}
