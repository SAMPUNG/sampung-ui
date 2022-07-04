import { defineComponent, type PropType, ref, watch } from 'vue'
import DropdownButton from '@/components/button/button.component'
import DropdownSelect from '@/components/select/select.component'
import type { Appearance } from '@/types/component'
import { resolveUniqueId, verifyRegular } from '@/utils/data'
import createNamespace from '@/utils/namespace'
import type { DropdownOption, DropdownValue } from './dropdown.interface'
import './dropdown.scss'

const bem = createNamespace('dropdown')

const dropdownEmits = {
  change(value: DropdownValue) {
    return value
  },
  'update:modelValue'(value: DropdownValue) {
    return value
  },
}

// - Appearance
// - Direction
// - Disabled
// - MaxColumnWidth
// - MaxHeight
// - ModelValue
// - MinColumnWidth
// - Options
// - Trigger

const dropdownProps = {
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
  maxColumnWidth: {
    default: 225,
    required: false,
    type: Number,
  },
  maxHeight: {
    default: 325,
    required: false,
    type: Number,
  },
  modelValue: {
    default: '',
    type: [String, Number, Boolean, undefined] as PropType<DropdownValue>,
    validator: verifyRegular,
  },
  minColumnWidth: {
    default: 125,
    required: false,
    type: Number,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  options: {
    default: () => [],
    type: Array as PropType<DropdownOption[]>,
  },
}

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
    }

    const onDropdown = (value?: boolean): void => {
      if (typeof value === 'boolean') {
        dropdown.value = value
      } else {
        dropdown.value = !dropdown.value
      }
    }

    const onSelect = (target: HTMLLIElement): void => {
      console.log('Dropdown on select :>:> ')
      console.dir(target)
      onDropdown(false)
    }

    const selectOption = (value: DropdownValue): void => {
      console.log('Dropdown on select :>:> ', value)
    }

    watch(() => props.modelValue, selectOption)

    context.expose({
      selectOption,
    })

    return {
      dropdown,
      id,
      onChange,
      onDropdown,
      onSelect,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <dropdown-button
          class={bem('entry')}
          data-dropdown={this.dropdown ? 'dropdown' : 'rollup'}
          id={this.id}
          legend={this.legend}
          onClick={this.onDropdown}
          prefix-icon={this.icon}
          suffix-icon="angle-down"
        />
        <div
          class={bem('panel')}
          data-panel={this.dropdown ? 'dropdown' : 'hidden'}
          style={{
            'max-height': this.maxHeight + 'px',
            'max-width': this.maxColumnWidth + 'px',
            'min-width': this.minColumnWidth + 'px',
          }}
        >
          <dropdown-select
            class={bem('select')}
            direction="vertical"
            modelValue={this.modelValue}
            options={this.options}
            onChange={this.onChange}
            onSelect={this.onSelect}
            ref="select"
            role="select"
          />
        </div>
      </div>
    )
  },
})
