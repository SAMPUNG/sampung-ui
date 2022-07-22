import { defineComponent } from 'vue'

import { createNamespace, resolveDataset } from '@/utils'

import radioEmits from './radio.emits'
import radioProps from './radio.props'
import './radio.scss'

const bem = createNamespace('radio')

export default defineComponent({
  name: bem(),
  props: radioProps,
  emits: radioEmits,
  setup(props, context) {
    const onCheck = (checked: boolean = true): void => {
      context.emit('select', props.name)
      context.emit('update:modelValue', checked)
    }
    const onClick = (): boolean => {
      if (props.disabled) {
        return props.modelValue
      }

      onCheck(!props.modelValue)
      return !props.modelValue
    }

    const renderIcon = () => {
      const dataset = resolveDataset({
        checked: props.modelValue,
        disabled: props.disabled,
      })
      const name = props.modelValue ? 'radio-button-on' : 'radio-button-off'
      return (
        <sam-icon
          class={bem()}
          {...dataset}
          name={name}
        />
      )
    }

    context.expose({
      check: onCheck,
    })

    return () => (
      <div
        class={bem('pack')}
        onClick={onClick}
      >
        <label
          class={bem('label')}
          for={props.name}
        >
          {props.legend}
        </label>
        <input
          checked={props.modelValue}
          hidden
          name={props.name}
          type="radio"
          value={props.modelValue}
        />
        {renderIcon()}
      </div>
    )
  },
})
