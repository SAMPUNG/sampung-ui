/* eslint-disable no-unused-vars */

import type { DropdownValue } from './dropdown.interface'

export default {
  change: (value: DropdownValue) => true,
  'update:modelValue': (value: DropdownValue) => true,
}
