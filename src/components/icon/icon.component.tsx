import { defineComponent, type PropType, type Ref, ref, watch } from 'vue'
import type { Appearance, Palette } from '@/types/component'
import createNamespace from '@/utils/namespace'
import './icon.scss'
import resolveSymbol from './icon.config'

const bem = createNamespace('icon')

const iconEmits = {
  click: (name: string) => true,
}

const iconProps = {
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  name: {
    default: 'fa',
    required: false,
    type: String,
  },
  palette: {
    default: 'default',
    required: false,
    type: String as PropType<Palette>,
  },
}

export default defineComponent({
  name: bem(),
  props: iconProps,
  emits: iconEmits,
  setup(props, context) {
    const symbol: Ref<string> = ref(resolveSymbol(props.name))

    const onClick = () => {
      context.emit('click', props.name)
    }

    watch(() => props.name, (name) => {
      symbol.value = resolveSymbol(name)
    })

    return {
      symbol,
      onClick,
    }
  },
  render() {
    return (
      <i
        class={bem()}
        data-icon={this.name}
        data-symbol={this.symbol}
        onClick={() => this.onClick()}
      />
    )
  },
})
