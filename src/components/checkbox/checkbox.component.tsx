import { defineComponent } from 'vue'

import { createNamespace, resolveDataset } from '@/utils'

import checkboxEmits from './checkbox.emits'
import checkboxProps from './checkbox.props'
import './checkbox.scss'

const bem = createNamespace('checkbox')

export default defineComponent({
  name: bem(),
  props: checkboxProps,
  emits: checkboxEmits,
  setup(props, context) {
    const onCheck = (checked: boolean = true): void => {
      context.emit('check', checked, props.name)
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
      const name = props.modelValue ? 'check-box' : 'check-box-outline-blank'
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
          type="checkbox"
          value={props.modelValue}
        />
        {renderIcon()}
      </div>
    )
  },
})
