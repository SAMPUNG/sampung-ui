import { defineComponent, type PropType, ref, watch } from 'vue'
import ButtonIcon from '@/components/icon/icon.component'
import type { Appearance, Palette, Style } from '@/types/component'
import { absolute, createNamespace, debounce, resolveUniqueId } from '@/utils/'
import type { ButtonEffect, ButtonStatus, ButtonType } from './button.interface'
import './button.scss'

const bem = createNamespace('button')

const buttonEmits = {
  change: (value: ButtonStatus, name: string) => true,
  click: (name: string) => true,
  'update:status': (value: ButtonStatus, name: string) => true,
}

const buttonProps = {
  appearance: {
    default: 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  icon: {
    default: '',
    required: false,
    type: String,
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
  palette: {
    default: 'primary',
    required: false,
    type: String as PropType<Palette>,
  },
  prefixIcon: {
    default: '',
    required: false,
    type: String,
  },
  status: {
    default: 'off',
    required: false,
    type: String as PropType<ButtonStatus>,
  },
  suffixIcon: {
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
  components: {
    ButtonIcon,
  },
  props: buttonProps,
  emits: buttonEmits,
  setup(props, context) {
    const effects = ref<ButtonEffect[]>([])

    const addEffect = (event: MouseEvent): void => {
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
      clearEffects('ripple')
    }
    const clearEffects = debounce((type: string) => {
      effects.value = effects.value.filter((item) => item.type !== type)
    }, 1000)

    const onClick = (event: MouseEvent): void => {
      switch (props.status) {
        case 'disabled':
        case 'loading': {
          break
        }
        case 'off': {
          addEffect(event)

          if (props.appearance === 'fill' || props.appearance === 'outline') {
            context.emit('change', 'on', props.name)
            context.emit('update:status', 'on', props.name)
          }
          context.emit('click', props.name)
          break
        }
        case 'on': {
          context.emit('click', props.name)
          context.emit('change', 'off', props.name)
          context.emit('update:status', 'off', props.name)
          break
        }
        default: {
          context.emit('click', props.name)
        }
      }
    }

    watch(
      () => props.appearance,
      (apperance) => {
        if (apperance !== 'fill') {
          context.emit('change', 'off', props.name)
          context.emit('update:status', 'off', props.name)
        }
      }
    )
    watch(
      () => props.status,
      () => {
        if (props.appearance !== 'fill') {
          context.emit('change', 'off', props.name)
          context.emit('update:status', 'off', props.name)
        }
      }
    )

    return {
      effects,
      onClick,
    }
  },
  render() {
    return (
      <button
        class={bem()}
        data-appearance={this.appearance}
        data-palette={this.palette}
        data-legend={this.legend}
        data-status={this.status}
        disabled={this.status === 'disabled'}
        type={this.type}
        onClick={this.onClick}
      >
        {this.prefixIcon && (
          <button-icon class={bem('prefix-icon')} name={this.prefixIcon} />
        )}
        {this.legend && <span class={bem('legend')}>{this.legend}</span>}
        {this.suffixIcon && (
          <button-icon class={bem('suffix-icon')} name={this.suffixIcon} />
        )}
        {this.effects.map((item) => (
          <span class={bem('effect')} style={item.style} />
        ))}
      </button>
    )
  },
})
