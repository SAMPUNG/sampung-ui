import type { PropType } from 'vue'

export default {
  options: {
    default: () => [],
    required: true,
    type: Array as PropType<string[]>,
  },
}
