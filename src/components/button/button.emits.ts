/* eslint-disable no-unused-vars */

import type { ButtonStatus } from './button.interface'

export default {
  change: (value: ButtonStatus, name: string) => true,
  click: (name: string) => true,
  'update:status': (value: ButtonStatus, name: string) => true,
}
