import { defineComponent } from 'vue'

import { createNamespace, resolveI18n } from '@/utils'

import legendProps from './legend.props'

const bem = createNamespace('legend')

export default defineComponent({
  name: bem(),
  props: legendProps,
  setup(props) {
    return () => {
      if (typeof props.legend === 'string') {
        return <span>{props.legend}</span>
      }
      return <span {...resolveI18n(props.legend)} />
    }
  },
})
