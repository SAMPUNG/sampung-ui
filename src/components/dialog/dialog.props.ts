import { type PropType } from 'vue'

import type { Appearance } from '@/types/component'

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
}
