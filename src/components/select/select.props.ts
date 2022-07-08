import type { PropType } from 'vue'

import type { Direction } from '@/types/component'
import { validateRegular } from '@/utils/'

import type { SelectOption, SelectValue } from './select.interface'

export default {
  direction: {
    default: 'horizontal',
    required: false,
    type: String as PropType<Direction>,
  },
  modelValue: {
    default: undefined,
    required: true,
    type: [String, Number, Boolean, undefined] as PropType<SelectValue>,
    validator: validateRegular,
  },
  options: {
    default: () => [],
    type: Array as PropType<SelectOption[]>,
  },
}
