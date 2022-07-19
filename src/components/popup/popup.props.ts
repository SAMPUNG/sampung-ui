import { type PropType } from 'vue'

import { includesBaseProps } from '@/utils'

import type { PopupContainer, PopupPosition } from './popup.interface'

export default {
  ...includesBaseProps({
    icon: 'flare',
    legend: 'Popup',
    name: 'popup'
  }),

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
  inline: {
    default: true,
    required: false,
    type: Boolean,
  },
  inset: {
    default: false,
    required: false,
    type: Boolean,
  },
  modelValue: {
    default: false,
    required: true,
    type: Boolean,
  },
  position: {
    default: 'center',
    required: false,
    type: String as PropType<PopupPosition>,
  },
}
