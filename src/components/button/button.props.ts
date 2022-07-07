import type { PropType } from 'vue'

import type { Appearance, Palette } from '@/types/component'

import type { ButtonMode, ButtonType } from './button.interface'

export default {
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
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
  mode: {
    default: 'normal',
    required: false,
    type: String as PropType<ButtonMode>,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  palette: {
    default: 'primary',
    required: false,
    type: String as PropType<Palette>,
  },
  type: {
    default: 'button',
    required: false,
    type: String as PropType<ButtonType>,
  },
}
