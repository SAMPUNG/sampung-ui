import type { PropType } from 'vue'

import type { RichText } from '@/types'

export default {
  options: {
    default: () => [],
    required: true,
    type: Array as PropType<RichText[]>,
  },
}
