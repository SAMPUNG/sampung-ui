import type { PropType } from 'vue'

import type { Legend } from '@/types/'

export default {
  legend: {
    default: '',
    required: false,
    type: [String, Object] as PropType<Legend>,
  },
}
