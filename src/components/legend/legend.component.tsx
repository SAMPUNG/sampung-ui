import { defineComponent } from 'vue'

import { createNamespace, resolveI18n } from '@/utils'

import legendProps from './legend.props'

const bem = createNamespace('legend')

export default defineComponent({
  name: bem(),
  props: legendProps,
  setup(props) {
    return () => {
      const LegendTag = props.tag
      if (typeof props.legend === 'string') {
        return <LegendTag>{props.legend}</LegendTag>
      }
      return <LegendTag {...resolveI18n(props.legend)} />
    }
  },
})
