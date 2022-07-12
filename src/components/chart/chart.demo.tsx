import { defineComponent, ref } from 'vue'

import createNamespace from '@/utils/namespace'

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
  setup() {
    const id = ref<string>('chart-demo')
    const options = ref(defaultOptions)

    return () => (
      <div class={bem()}>
        <sam-chart id={id.value} options={options.value} />
      </div>
    )
  },
})
