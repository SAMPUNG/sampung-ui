import { computed, defineComponent, ref, watch } from 'vue'

import { createNamespace } from '@/utils/'

import ButtonEffect from '@/components/effect/effect.component'
import ButtonIcon from '@/components/icon/icon.component'

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
    const knob = ref<boolean>(false)
    const disabled = computed(
      () => props.mode === 'disabled' || props.mode === 'loading'
    )

    const onClick = (): void => {
      switch (props.mode) {
        case 'diode': {
          onReact()
          onToggle()
          break
        }
        case 'disabled': {
          break
        }
        case 'knob': {
          onKnob()
          onReact()
          break
        }
        case 'loading': {
          break
        }
        case 'switch': {
          onKnob()
          onReact()
          onToggle()
          break
        }
        default: {
          onReact()
        }
      }
    }

    const onKnob = (): void => {
      knob.value = !knob.value
      context.emit('change', knob.value, props.mode, props.name)
    }

    const onReact = (): void => {
      context.emit('click', props.name)
    }

    const onToggle = (): void => {
      const active = effect.value?.has('active')
      if (active) {
        effect.value?.drop('active')
      } else {
        effect.value?.push('active')
      }
      context.emit('change', !active, props.mode, props.name)
    }

    watch(
      () => [props.mode, props.appearance],
      () => {
        effect.value?.clear()
        if (props.mode === 'disabled' || props.mode === 'loading') {
          effect.value?.push(props.mode)
        }
      }
    )

    context.expose({
      click: onClick,
      toggle: onToggle,
    })

    return () => (
      <button
        class={bem()}
        data-appearance={props.appearance}
        data-legend={props.legend}
        data-mode={props.mode}
        data-palette={props.palette}
        disabled={disabled.value}
        type={props.type}
        onClick={onClick}
      >
        <button-icon class={bem('prefix-icon')} name={props.icon} />
        <span class={bem('legend')}>{props.legend}</span>
        <button-icon
          class={bem('suffix-icon')}
          data-knob={knob.value}
          name={props.icon}
        />
        <button-effect ref={effect} />
      </button>
    )
  },
})
