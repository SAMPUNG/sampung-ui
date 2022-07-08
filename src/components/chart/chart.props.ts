import type { EChartsCoreOption } from 'echarts/types/dist/echarts'
import type { PropType } from 'vue'

export default {
  id: {
    default: '',
    required: true,
    type: String,
  },
  options: {
    default: '',
    required: true,
    type: Object as PropType<EChartsCoreOption>,
  },
}
