/* eslint-disable no-unused-vars */

import type { SelectValue } from './select.interface'

export default {
  change: (value: SelectValue) => true,
  select: (target: HTMLLIElement) => true,
  'update:modelValue': (value: SelectValue) => true,
}
