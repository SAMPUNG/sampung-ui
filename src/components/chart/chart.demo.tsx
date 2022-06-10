import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import Namespace from '@/utils/namespace'
import DemoChart from './chart.component'

const demo = new Namespace('demo-chart')

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
  name: demo.name,
  components: { DemoChart },
  setup() {
    const id: Ref<string> = ref('demo-chart')
    const options = ref(defaultOptions)

    return {
      id,
      options,
    }
  },
  render() {
    return (
      <div class="demo">
        <demo-chart id={this.id} options={this.options} />
      </div>
    )
  },
})
