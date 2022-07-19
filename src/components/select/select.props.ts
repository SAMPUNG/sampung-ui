import type { PropType } from 'vue'

import { includesBaseProps } from '@/utils'

import type { SelectOption, SelectValue } from './select.interface'

export default {
  ...includesBaseProps({
    appearance: 'legacy',
    legend: 'Select',
    name: 'select'
  }),

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
