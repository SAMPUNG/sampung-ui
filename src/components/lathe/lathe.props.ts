import type { PropType } from 'vue'

import type { LatheOption, LatheSource, LatheTarget } from './lathe.interface'

export default {
  legend: {
    default: 'Lathe',
    required: true,
    type: String,
  },
  name: {
    default: 'lathe',
    required: true,
    type: String,
  },
  options: {
    default: () => [],
    required: true,
    type: Object as PropType<LatheOption[]>,
  },
  source: {
    default: () => {},
    required: true,
    type: Object as PropType<LatheSource>,
  },
  target: {
    default: '',
    required: true,
    type: String as PropType<LatheTarget>,
  },
}
