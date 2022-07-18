import type { PropType } from 'vue'

import type { Appearance } from '@/types'
import type { SelectOption, SelectValue } from './select.interface'

export default {
  appearance: {
    default: 'legacy',
    required: false,
    type: String as PropType<Appearance>,
  },
  legend: {
    default: 'Select',
    required: false,
    type: String,
  },
  modelValue: {
    default: '',
    required: false,
    type: [String, Number, Boolean, undefined] as PropType<SelectValue>,
  },
  multiple: {
    default: false,
    required: false,
    type: Boolean,
  },
  name: {
    default: 'select',
    required: false,
    type: String,
  },
  options: {
    default: () => [],
    required: false,
    type: Array as PropType<SelectOption[]>,
  },
  placeholder: {
    default: 'Please select one of options',
    required: false,
    type: String,
  },
}
