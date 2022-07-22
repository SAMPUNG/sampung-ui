/* eslint-disable no-unused-vars */

import type { InputValue } from '@/components/input/input.interface'

export default {
  blur: (name: string) => true,
  check: (checked: boolean, name: string) => true,
  focus: (name: string) => true,
  'update:modelValue': (value: InputValue) => true,
}
