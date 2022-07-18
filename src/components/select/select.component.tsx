import { defineComponent, inject, ref } from 'vue'

import { createNamespace, resolveDataset, resolveUniqueId } from '@/utils'

import SelectField from '@/components/field/field.component'
import fieldProvide from '@/components/field/field.provide'
import type { FieldProvide } from '@/components/field/field.interface'
import SelectIcon from '@/components/icon/icon.component'
import SelectInput from '@/components/input/input.component'
import SelectOptions from '@/components/options/options.component'
import type { OptionName } from '@/components/options/options.interface'
import SelectPopup from '@/components/popup/popup.component'

import selectEmits from './select.emits'
import selectProps from './select.props'
import './select.scss'

const bem = createNamespace('select')

export default defineComponent({
  name: bem(),
  components: {
    SelectField,
    SelectIcon,
    SelectInput,
    SelectOptions,
    SelectPopup,
  },
  props: selectProps,
  emits: selectEmits,
  setup(props, context) {
    const field: FieldProvide = inject(fieldProvide)
    const id = ref<string>(resolveUniqueId())
    const options = ref<typeof SelectOptions>()
    const popover = ref<boolean>(false)

    const slots = {
      default: () => (
        <select-options
          class={bem('options')}
          direction="vertical"
          modelValue={[props.modelValue]}
          options={props.options}
          onChange={(value: OptionName[]) => onChange(value[0])}
          ref={options}
          role="options"
        />
      ),
      entry: () => (
        <select-field
          class={bem()}
          {...resolveDataset({ rollup: popover.value })}
          id={id.value}
          legend={props.legend}
          name={props.name}
          onBlur={onBlur}
          onClear={onClear}
        >
          <select-input
            autocomplete="new-password"
            modelValue={props.modelValue}
            readonly
            name="name-demo"
            onFocus={onFocus}
            placeholder="Please input something……"
          />
          <select-icon
            class={bem('clear')}
            name="clear"
            onClick={() => onClear()}
          />
          <select-icon
            class={bem('status')}
            data-status={popover.value ? 'dropdown' : 'rollup'}
            name="expand-more"
            onClick={() => onToggle()}
          />
        </select-field>
      ),
    }

    const onBlur = (): void => {
      setTimeout(() => {
        popover.value = false
      }, 150)
    }
    const onChange = (value: OptionName) => {
      context.emit('change', value, props.name)
      context.emit('update:modelValue', value)
      field?.validate(value)
    }
    const onClear = (): void => {
      context.emit('update:modelValue', undefined)
      context.emit('clear', props.name)
      popover.value = false
    }
    const onFocus = (): void => {
      popover.value = true
    }
    const onToggle = (value?: boolean): void => {
      const visible = typeof value === 'boolean' ? value : !popover.value
      popover.value = visible
    }

    return () => (
      <select-popup
        container={'#' + id.value}
        escape={false}
        inline={false}
        inset={true}
        modelValue={popover.value}
        position="bottom-left"
        v-slots={slots}
      />
    )
  },
})
