import { defineComponent } from 'vue'

import { createNamespace, resolveI18n } from '@/utils'

import legendProps from './legend.props'

const bem = createNamespace('legend')

export default defineComponent({
  name: bem(),
  props: legendProps,
  setup(props) {
    return () => {
      const Legend = props.tag
      if (typeof props.legend === 'string') {
        return <Legend>{props.legend}</Legend>
      }
      return <Legend {...resolveI18n(props.legend)} />
    }
  },
})
