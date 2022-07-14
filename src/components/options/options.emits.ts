/* eslint-disable no-unused-vars */

import type { OptionElement, OptionsPicked } from './options.interface'

export default {
  change: (picked: OptionsPicked) => true,
  pick: (target: OptionElement) => true,
  'update:modelValue': (picked: OptionsPicked) => true,
}
