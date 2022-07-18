import type { PropType } from 'vue'

import type { Container } from '@/types'

export default {
  container: {
    default: 'parent',
    required: false,
    type: String as PropType<Container>,
  },
}
