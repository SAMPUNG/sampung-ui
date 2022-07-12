/* eslint-disable no-unused-vars */

import type { MenuValue } from './menu.interface'

export default {
  change: (value: MenuValue) => true,
  close: (name: string) => true,
  grow: (name: string) => true,
  open: (name: string) => true,
  select: (target: HTMLLIElement) => true,
  shrink: (name: string) => true,
  svelte: (value: boolean, name: string) => true,
  'update:modelValue': (value: MenuValue) => true,
}
