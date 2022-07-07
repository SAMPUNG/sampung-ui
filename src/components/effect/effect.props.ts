import { type PropType } from 'vue'

import type { EffectContainer } from './effect.interface'

export default {
  container: {
    default: 'parent',
    required: false,
    type: String as PropType<EffectContainer>,
  },
}
