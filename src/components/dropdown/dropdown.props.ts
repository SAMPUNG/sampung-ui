import { type PropType } from 'vue'

import type { Appearance } from '@/types/component'
import { validateRegular } from '@/utils/'

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
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  icon: {
    default: 'expand-more',
    required: false,
    type: String,
  },
  legend: {
    default: '',
    required: false,
    type: String,
  },
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
  name: {
    default: '',
    required: false,
    type: String,
  },
  options: {
    default: () => [],
    type: Array as PropType<DropdownOption[]>,
  },
}
