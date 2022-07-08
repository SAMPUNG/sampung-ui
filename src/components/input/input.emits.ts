/* eslint-disable no-unused-vars */

import { InputValue } from './input.interface'

export default {
  blur: (name: string) => true,
  focus: (name: string) => true,
  'update:modelValue': (value: InputValue, name: string) => true,
}
