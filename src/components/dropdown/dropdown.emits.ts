import type { DropdownValue } from './dropdown.interface'

export default {
  change(value: DropdownValue) {
    return value
  },
  'update:modelValue'(value: DropdownValue) {
    return value
  },
}
