import type { PropType } from 'vue'

import type { Appearance, Palette } from '@/types'
import { validateRegular } from '@/utils'

import type { MenuOption, MenuValue } from './menu.interface'

export default {
  accordion: {
    default: true,
    required: false,
    type: Boolean,
  },
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
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
  icon: {
    default: '',
    required: false,
    type: String,
  },
  legend: {
    default: '',
    required: false,
    type: String,
  },
  modelValue: {
    default: undefined,
    required: true,
    type: [String, Number, Boolean, undefined] as PropType<MenuValue>,
    validator: validateRegular,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  options: {
    default: () => [],
    type: Array as PropType<MenuOption[]>,
  },
  palette: {
    default: 'primary',
    required: false,
    type: String as PropType<Palette>,
  },
  width: {
    default: 200,
    required: false,
    type: Number,
  },
}
