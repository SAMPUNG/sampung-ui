import { getInstanceByDom, init } from 'echarts';
import type { EChartsCoreOption } from 'echarts/types/dist/echarts'
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import Namespace from '@/utils/namespace'
import './chart.scss'

const chart = new Namespace('chart')

const ChartProps = {
  id: {
    default: '',
    required: true,
    type: String
  },
  options: {
    default: '',
    required: true,
    type: Object as PropType<EChartsCoreOption>
  }
}

// Resize Observer
let observer: ResizeObserver | null = null;

export default defineComponent({
  name: chart.name,
  props: ChartProps,
  setup(props, context) {
    const renderChart = () => {
      const el = resolveElement();
      if (el) {
        getInstanceByDom(el)?.dispose();
        init(el).setOption(props.options);
      }
    }

    const resizeChart = () => {
      const el = resolveElement();
      el && getInstanceByDom(el)?.resize();
    }

    const resolveElement = (): HTMLDivElement | null => {
      const selector = `#${props.id}`
      return document.querySelector(selector);
    }

    const resolveObserver = () => {
      const el = resolveElement();
      const options: ResizeObserverOptions = {
        box: 'border-box'
      };
      observer = new ResizeObserver(resizeChart);
      el && observer.observe(el, options);
    }

    context.expose({
      renderChart
    })

    return {
      renderChart,
      resizeChart,
      resolveObserver,
    }
  },
  render() {
    return (
      <div class={chart.bem()} id={this.id} />
    )
  },
  mounted() {
    this.renderChart()
    this.resolveObserver()
  },
  destroyed() {
    observer?.disconnect()
  },
})
