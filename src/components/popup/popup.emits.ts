/* eslint-disable no-unused-vars */

import type { PopupHorizontal, PopupVertical } from './popup.interface'

export default {
  change: (value: boolean, name: string) => true,
  close: (name: string) => true,
  open: (name: string) => true,
  'update:bottom': (value: PopupVertical, name: string) => true,
  'update:left': (value: PopupHorizontal, name: string) => true,
  'update:modelValue': (value: boolean, name: string) => true,
  'update:right': (value: PopupHorizontal, name: string) => true,
  'update:top': (value: PopupVertical, name: string) => true,
}
