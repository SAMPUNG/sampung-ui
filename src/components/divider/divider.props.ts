import type { PropType } from 'vue'

import type { Direction } from '@/types'
import { includesBaseProps } from '@/utils'

export default {
  ...includesBaseProps(),

  direction: {
    default: 'horizontal',
    required: false,
    type: String as PropType<Direction>,
  },
}
