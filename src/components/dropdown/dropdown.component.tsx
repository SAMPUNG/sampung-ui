import { defineComponent, ref } from 'vue'

import { createNamespace, resolveUniqueId } from '@/utils/'

import DropdownButton from '@/components/button/button.component'
import DropdownSelect from '@/components/select/select.component'

import type { DropdownValue } from './dropdown.interface'
import dropdownEmits from './dropdown.emits'
import dropdownProps from './dropdown.props'
import './dropdown.scss'

const bem = createNamespace('dropdown')

export default defineComponent({
  name: bem(),
  components: { DropdownButton, DropdownSelect },
  props: dropdownProps,
  emits: dropdownEmits,
  setup(props, context) {
    const dropdown = ref<boolean>(false)
    const id = ref<string>(resolveUniqueId())

    const onChange = (value: DropdownValue) => {
      context.emit('change', value)
      context.emit('update:modelValue', value)
      onDropdown(false)
    }

    const onDropdown = (value?: boolean): void => {
      if (typeof value === 'boolean') {
        dropdown.value = value
      } else {
        dropdown.value = !dropdown.value
      }
    }

    return () => (
      <div class={bem()}>
        <dropdown-button
          class={bem('entry')}
          data-dropdown={dropdown.value ? 'dropdown' : 'rollup'}
          icon={props.icon}
          id={id.value}
          legend={props.legend}
          mode="knob"
          onClick={onDropdown}
        />
        <div
          class={bem('panel')}
          data-panel={dropdown.value ? 'visible' : 'hidden'}
          style={{
            'max-height': props.maxHeight + 'px',
            'max-width': props.maxColumnWidth + 'px',
            'min-width': props.minColumnWidth + 'px',
          }}
        >
          <dropdown-select
            class={bem('select')}
            direction="vertical"
            modelValue={props.modelValue}
            options={props.options}
            onChange={onChange}
            ref="select"
            role="select"
          />
        </div>
      </div>
    )
  },
})
