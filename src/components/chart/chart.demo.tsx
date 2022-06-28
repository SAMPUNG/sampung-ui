import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoChart from './chart.component'

const bem = createNamespace('chart-demo')

const defaultOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}

export default defineComponent({
  name: bem(),
  components: { DemoChart },
  setup() {
    const id: Ref<string> = ref('chart-demo')
    const options = ref(defaultOptions)

    return {
      id,
      options,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <demo-chart id={this.id} options={this.options} />
      </div>
    )
  },
})
