import type { PropType } from 'vue'

import type { Appearance, Container, Palette } from '@/types/component'
import type { AffixHorizontal, AffixVertical } from './affix.interface'

export default {
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  container: {
    default: 'parent',
    required: false,
    type: String as PropType<Container>,
  },
  horizontal: {
    default: 'left',
    required: false,
    type: String as PropType<AffixHorizontal>,
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
  name: {
    default: '',
    required: false,
    type: String,
  },
  offsetX: {
    default: 16,
    required: false,
    type: Number,
  },
  offsetY: {
    default: 16,
    required: false,
    type: Number,
  },
  palette: {
    default: 'primary',
    required: false,
    type: String as PropType<Palette>,
  },
  vertical: {
    default: 'top',
    required: false,
    type: String as PropType<AffixVertical>,
  },
}
