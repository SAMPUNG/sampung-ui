import { defineComponent, ref } from 'vue'

import { createNamespace, resolveUniqueId } from '@/utils/'

import SelectField from '@/components/field/field.component'
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
    const id = ref<string>(resolveUniqueId())
    const options = ref<typeof SelectOptions>()
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
          id={id.value}
          legend={props.legend}
          name={props.name}
        >
          <select-input
            modelValue={props.modelValue}
            name="name-demo"
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder="Please input something……"
          />
          <select-icon
            class={bem('status')}
            data-status={visible.value ? 'dropdown' : 'rollup'}
            name="expand-more"
            onClick={() => onFocus()}
          />
        </select-field>
      ),
    }
    const visible = ref<boolean>(false)

    const onBlur = (): void => {
      visible.value = false
    }
    const onChange = (value: OptionName) => {
      visible.value = false
      context.emit('change', value)
      context.emit('update:modelValue', value)
    }
    const onFocus = (): void => {
      visible.value = true
    }

    return () => (
      <select-popup
        container={'#' + id.value}
        escape={false}
        inset={true}
        modelValue={visible.value}
        position="bottom-left"
        v-slots={slots}
      />
    )
  },
})
