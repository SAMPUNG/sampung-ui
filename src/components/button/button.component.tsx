import { defineComponent, ref, watch } from 'vue'

import ButtonEffect from '@/components/effect/effect.component'
import ButtonIcon from '@/components/icon/icon.component'

import { createNamespace } from '@/utils/'

import buttonEmits from './button.emits'
import buttonProps from './button.props'
import './button.scss'

const bem = createNamespace('button')

export default defineComponent({
  name: bem(),
  components: {
    ButtonEffect,
    ButtonIcon,
  },
  props: buttonProps,
  emits: buttonEmits,
  setup(props, context) {
    const effect = ref<typeof ButtonEffect>()

    const onClick = (): void => {
      switch (props.mode) {
        case 'disabled':
        case 'loading': {
          break
        }
        case 'switch': {
          if (effect.value?.has('active')) {
            effect.value?.drop('active')
          } else {
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
      () => [props.appearance, props.mode],
      ([appearance, mode]) => {
        effect.value?.clear()
        if (appearance !== 'fill' && appearance !== 'outline') {
          context.emit('change', 'none', props.name)
          context.emit('update:status', 'none', props.name)
        }
        if (mode !== 'normal') {
          effect.value?.push(props.mode)
        }
      }
    )

    context.expose({
      onClick,
    })

    return () => (
      <button
        class={bem()}
        data-appearance={props.appearance}
        data-legend={props.legend}
        data-mode={props.mode}
        data-palette={props.palette}
        disabled={props.mode === 'disabled'}
        type={props.type}
        onClick={onClick}
      >
        <button-icon class={bem('prefix-icon')} name={props.icon} />
        <span class={bem('legend')}>{props.legend}</span>
        <button-icon class={bem('suffix-icon')} name={props.icon} />
        <button-effect ref={effect} />
      </button>
    )
  },
})
