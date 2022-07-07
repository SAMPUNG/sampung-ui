import { defineComponent, type PropType, ref, watch } from 'vue'

import ButtonEffect from '@/components/effect/effect.component'
import ButtonIcon from '@/components/icon/icon.component'

import type { Appearance, Palette } from '@/types/component'
import { createNamespace } from '@/utils/'

import type { ButtonStatus, ButtonType } from './button.interface'
import './button.scss'

const bem = createNamespace('button')

const buttonEmits = {
  change: (value: ButtonStatus, name: string) => ({ name, value }),
  click: (name: string) => name,
  'update:status': (value: ButtonStatus, name: string) => ({ name, value }),
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
    default: 'none',
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
    ButtonEffect,
    ButtonIcon,
  },
  props: buttonProps,
  emits: buttonEmits,
  setup(props, context) {
    const effect = ref<typeof ButtonEffect | null>(null)

    const onClick = (): void => {
      switch (props.status) {
        case 'active': {
          context.emit('click', props.name)
          context.emit('change', 'none', props.name)
          context.emit('update:status', 'none', props.name)
          effect.value?.drop('active')
          break
        }
        case 'disabled':
        case 'loading': {
          break
        }
        case 'none': {
          if (props.appearance === 'fill' || props.appearance === 'outline') {
            context.emit('change', 'active', props.name)
            context.emit('update:status', 'active', props.name)
            effect.value?.push('active')
          }
          context.emit('click', props.name)
          break
        }
        default: {
          context.emit('click', props.name)
        }
      }
    }

    watch(
      () => [props.appearance, props.status],
      ([appearance, status]) => {
        effect.value?.clear()
        if (appearance !== 'fill' && appearance !== 'outline') {
          context.emit('change', 'none', props.name)
          context.emit('update:status', 'none', props.name)
        }
        if (status !== 'none') {
          effect.value?.push(props.status)
        }
      }
    )

    return {
      effect,
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
        <button-icon class={bem('prefix-icon')} name={this.prefixIcon} />
        <span class={bem('legend')}>{this.legend}</span>
        <button-icon class={bem('suffix-icon')} name={this.suffixIcon} />
        <button-effect ref="effect" />
      </button>
    )
  },
})
