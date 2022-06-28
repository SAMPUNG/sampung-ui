import { defineComponent, type PropType, ref, Ref } from 'vue'
import type { Appearance, Style } from '@/types/component'
import { absolute, createNamespace, debounce, resolveUniqueId } from '@/utils/'
import type { ButtonEffect, ButtonType } from './button.interface'
import './button.scss'

const bem = createNamespace('button')

const buttonEmits = {
  enable: (name: string) => true,
  blur: (name: string) => true,
  click: (name: string) => true,
  disable: (name: string) => true,
  error: (message: string, name: string) => true,
  foucs: (name: string) => true,
}

const buttonProps = {
  appearance: {
    default: 'legacy',
    required: false,
    type: String as PropType<Appearance>,
  },
  legend: {
    default: '',
    required: false,
    type: String,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  type: {
    default: 'button',
    required: false,
    type: String as PropType<ButtonType>,
  },
}

export default defineComponent({
  name: bem(),
  props: buttonProps,
  emits: buttonEmits,
  setup(props, context) {
    const effects: Ref<ButtonEffect[]> = ref([])

    const clearEffects = debounce((type: string) => {
      effects.value = effects.value.filter((item) => item.type !== type)
    }, 1000)

    const onClick = (event: MouseEvent) => {
      const { clientHeight, clientWidth } = event.target as HTMLButtonElement
      const { offsetX, offsetY } = event
      const id: string = resolveUniqueId()
      const radius: number = Math.max(
        clientHeight + offsetY,
        clientWidth + offsetX
      )
      const style: Style = Object.assign(
        {
          height: `${radius}px`,
          width: `${radius}px`,
        },
        absolute({
          left: offsetX - radius / 2,
          top: offsetY - radius / 2,
        })
      )

      effects.value.push({ id, style, type: 'ripple' })
      context.emit('click', props.name)

      clearEffects('ripple')
    }

    return {
      effects,
      onClick,
    }
  },
  render() {
    return (
      <button class={bem()} type={this.type} onClick={this.onClick}>
        <span class={bem('legend')}>{this.legend}</span>
        {this.effects.map((item) => (
          <span class={bem('effect')} style={item.style} />
        ))}
      </button>
    )
  },
})
