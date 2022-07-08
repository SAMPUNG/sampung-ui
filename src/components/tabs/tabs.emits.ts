/* eslint-disable no-unused-vars */

import type { TabsValue } from './tabs.interface'

export default {
  change: (value: TabsValue) => true,
  'update:modelValue': (value: TabsValue) => true,
}
