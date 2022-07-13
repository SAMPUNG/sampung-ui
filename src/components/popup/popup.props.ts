import { type PropType } from 'vue'

import type { Appearance } from '@/types/component'
import type { PopupContainer, PopupPosition } from './popup.interface'

export default {
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  container: {
    default: 'parent',
    required: false,
    type: String as PropType<PopupContainer>,
  },
  escape: {
    default: true,
    required: false,
    type: Boolean,
  },
  inset: {
    default: false,
    required: false,
    type: Boolean,
  },
  icon: {
    default: 'flare',
    required: false,
    type: String,
  },
  legend: {
    default: 'Popup',
    required: false,
    type: String,
  },
  modelValue: {
    default: false,
    required: true,
    type: Boolean,
  },
  name: {
    default: 'popup',
    required: false,
    type: String,
  },
  position: {
    default: 'center',
    required: false,
    type: String as PropType<PopupPosition>,
  },
}
