/* eslint-disable no-unused-vars */

import { type InputValue } from '@/components/input/input.interface'

export default {
  enable: (name: string) => true,
  blur: (name: string) => true,
  change: (value: InputValue, name: string) => true,
  clear: (name: string) => true,
  disable: (name: string) => true,
  error: (message: string, value: InputValue, name: string) => true,
  format: (value: InputValue, name: string) => true,
  foucs: (name: string) => true,
  init: (value: InputValue, name: string) => true,
  input: (value: InputValue, name: string) => true,
  invalid: (message: string, value: InputValue, name: string) => true,
  reset: (value: InputValue, name: string) => true,
  valid: (message: string, value: InputValue, name: string) => true,
}
