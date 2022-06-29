import { defineComponent, type PropType, type Ref, ref, watch } from 'vue'
import type { Appearance, Palette } from '@/types/component'
import createNamespace from '@/utils/namespace'
import './icon.scss'
import configs from './icon.config'

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

const manifest: Record<string, string> = configs
const resolveFont = (name: string): string => {
  const value = '0x' + manifest[name]
  const code = Number(value)
  return String.fromCharCode(code)
}

export default defineComponent({
  name: bem(),
  props: iconProps,
  emits: iconEmits,
  setup(props, context) {
    const font: Ref<string> = ref(resolveFont(props.name))

    const onClick = () => {
      context.emit('click', props.name)
    }

    watch(() => props.name, resolveFont)

    return {
      font,
      onClick,
    }
  },
  render() {
    return (
      <i
        class={bem()}
        data-font={this.font}
        data-icon={this.name}
        onClick={() => this.onClick()}
      />
    )
  },
})
