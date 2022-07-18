import { getInstanceByDom, init } from 'echarts'
import { defineComponent, onUnmounted, onMounted } from 'vue'

import { createNamespace } from '@/utils'

import chartProps from './chart.props'
import './chart.scss'

const bem = createNamespace('chart')

// Resize Observer
let observer: ResizeObserver | null = null

export default defineComponent({
  name: bem(),
  props: chartProps,
  setup(props, context) {
    const renderChart = () => {
      const el = resolveElement()
      if (el) {
        getInstanceByDom(el)?.dispose()
        init(el).setOption(props.options)
      }
    }

    const resizeChart = () => {
      const el = resolveElement()
      el && getInstanceByDom(el)?.resize()
    }

    const resolveElement = (): HTMLDivElement | null => {
      const selector = `#${props.id}`
      return document.querySelector(selector)
    }

    const resolveObserver = () => {
      const el = resolveElement()
      const options: ResizeObserverOptions = {
        box: 'border-box',
      }
      observer = new ResizeObserver(resizeChart)
      el && observer.observe(el, options)
    }

    context.expose({
      renderChart,
    })

    onMounted(() => {
      renderChart()
      resolveObserver()
    })
    onUnmounted(() => {
      observer?.disconnect()
    })

    return () => (
      <div
        class={bem()}
        id={props.id}
      />
    )
  },
})
