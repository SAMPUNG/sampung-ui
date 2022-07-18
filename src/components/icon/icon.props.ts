import type { PropType } from 'vue'
import type { Appearance, Palette } from '@/types'

export default {
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  font: {
    default: 'material-design',
    required: false,
    type: String,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  palette: {
    default: 'default',
    required: false,
    type: String as PropType<Palette>,
  },
}
