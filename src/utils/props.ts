import type { PropType } from 'vue'

import type { Appearance, Palette } from '@/types/'

export default {
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  icon: {
    default: undefined,
    required: false,
    type: String,
  },
  legend: {
    default: undefined,
    required: false,
    type: String,
  },
  name: {
    default: undefined,
    required: false,
    type: String,
  },
  palette: {
    default: 'primary',
    required: false,
    type: String as PropType<Palette>,
  },
}
