import { defineComponent } from 'vue'

import ToggleIcon from '@/components/icon/icon.component'
import { createNamespace, resolveDataset } from '@/utils'

import toggleEmits from './toggle.emits'
import toggleProps from './toggle.props'
import './toggle.scss'

const bem = createNamespace('toggle')

export default defineComponent({
  name: bem(),
  components: { ToggleIcon },
  props: toggleProps,
  emits: toggleEmits,
  setup(props, context) {
    const onCheck = (checked: boolean = true): void => {
      context.emit('toggle', props.name)
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
          <toggle-icon
            class={bem('control')}
            name={props.modelValue ? props.onIcon : props.offIcon}
          />
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
          type="checkbox"
          value={props.modelValue}
        />
        {renderIcon()}
      </div>
    )
  },
})
