import { type PropType } from 'vue'

import { validateRegular } from '@/utils/'

import type { TabsOption, TabsValue } from './tabs.interface'

export default {
  modelValue: {
    default: '',
    type: [String, Number, Boolean, undefined] as PropType<TabsValue>,
    validator: validateRegular,
  },
  options: {
    default: () => [],
    type: Array as PropType<TabsOption[]>,
  },
}
