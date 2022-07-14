import type { PropType } from 'vue'

import type { Appearance } from '@/types/component'
import type { SelectOption, SelectValue } from './select.interface'

export default {
  appearance: {
    default: 'legacy',
    required: false,
    type: String as PropType<Appearance>,
  },
  legend: {
    default: '',
    required: false,
    type: String,
  },
  modelValue: {
    default: undefined,
    required: true,
    type: [String, Number, Boolean, undefined] as PropType<SelectValue>,
  },
  multiple: {
    default: false,
    required: false,
    type: Boolean,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  options: {
    default: () => [],
    required: true,
    type: Array as PropType<SelectOption[]>,
  },
  placeholder: {
    default: '',
    required: false,
    type: String,
  },
}
