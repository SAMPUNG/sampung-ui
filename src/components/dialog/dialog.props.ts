import { type PropType } from 'vue'

import type { Appearance } from '@/types'

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
  withClose: {
    default: true,
    required: false,
    type: Boolean,
  },
  withHeader: {
    default: true,
    required: false,
    type: Boolean,
  },
  withFooter: {
    default: true,
    required: false,
    type: Boolean,
  },
}
