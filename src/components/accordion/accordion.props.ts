import type { PropType } from 'vue'

import type { Appearance, Palette } from '@/types'

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
  modelValue: {
    default: false,
    required: true,
    type: Boolean,
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
  withFooter: {
    default: false,
    required: false,
    type: Boolean,
  },
}
