import type { PropType } from 'vue'

import { includesBaseProps, validateRegular } from '@/utils'

import type { MenuOption, MenuValue } from './menu.interface'

export default {
  ...includesBaseProps(),

  accordion: {
    default: true,
    required: false,
    type: Boolean,
  },
  expanded: {
    default: () => [],
    required: false,
    type: Array as PropType<MenuValue[]>,
  },
  homepage: {
    default: '/',
    required: false,
    type: String,
  },
  modelValue: {
    default: undefined,
    required: true,
    type: [String, Number, Boolean, undefined] as PropType<MenuValue>,
    validator: validateRegular,
  },
  options: {
    default: () => [],
    type: Array as PropType<MenuOption[]>,
  },
  width: {
    default: 200,
    required: false,
    type: Number,
  },
}
