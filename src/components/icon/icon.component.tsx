import { defineComponent, ref, watch } from 'vue'

import createNamespace from '@/utils/namespace'

import iconEmits from './icon.emits'
import resolveSymbol from './icon.config'
import iconProps from './icon.props'
import './icon.scss'

const bem = createNamespace('icon')

export default defineComponent({
  name: bem(),
  props: iconProps,
  emits: iconEmits,
  setup(props, context) {
    const symbol = ref<string>(resolveSymbol(props.name, props.font))

    const onClick = () => {
      context.emit('click', props.name)
    }

    watch(
      () => props.name,
      (name) => {
        symbol.value = resolveSymbol(name, props.font)
      }
    )
    watch(
      () => props.font,
      (font) => {
        symbol.value = resolveSymbol(props.name, font)
      }
    )

    return () => (
      <i
        class={bem()}
        data-font={props.font}
        data-icon={props.name}
        data-symbol={symbol.value}
        onClick={() => onClick()}
        style={{ fontFamily: props.font }}
      />
    )
  },
})
