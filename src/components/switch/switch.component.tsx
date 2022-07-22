import { defineComponent } from 'vue'

import { createNamespace, resolveDataset } from '@/utils'

import switchEmits from './switch.emits'
import switchProps from './switch.props'
import './switch.scss'

const bem = createNamespace('switch')

export default defineComponent({
  name: bem(),
  props: switchProps,
  emits: switchEmits,
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
      return (
        <span
          class={bem()}
          {...dataset}
        >
          <span class={bem('control')} />
        </span>
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
          type="switch"
          value={props.modelValue}
        />
        {renderIcon()}
      </div>
    )
  },
})
