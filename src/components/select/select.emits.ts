/* eslint-disable no-unused-vars */

import type { SelectValue } from './select.interface'

export default {
  change: (value: SelectValue, name: string) => true,
  clear: (name: string) => true,
  'update:modelValue': (value: SelectValue) => true,
}
