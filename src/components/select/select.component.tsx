import { defineComponent, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { resolveUniqueId, verifyRegular } from '@/utils/data'
import createNamespace from '@/utils/namespace'
import type {
  SelectOption,
  SelectOptionRecord,
  SelectProps,
  SelectValue,
} from './select.interface'

import './select.scss'

const bem = createNamespace('select')

export const SelectCommonProps = {
  modelValue: {
    default: undefined,
    required: true,
    type: [String, Number, Boolean, undefined] as PropType<SelectValue>,
    validator: verifyRegular,
  },
  options: {
    default: () => [],
    type: Array as PropType<SelectOption[]>,
  },
}

export default defineComponent({
  name: bem(),
  props: SelectCommonProps,
  emits: {
    change: (value: SelectValue) => true,
    select: (target: HTMLLIElement) => true,
    'update:modelValue': (value: SelectValue) => true,
  },
  setup(props: SelectProps, context) {
    const id = ref<string>(resolveUniqueId())
    const list = ref<HTMLElement | null>(null)
    const selected = ref<SelectValue>(props.modelValue)

    const onSelect = (option: SelectOption, target: HTMLLIElement): void => {
      const name: SelectValue = resolveName(option)
      selected.value = name

      context.emit('change', name)
      context.emit('select', target)
      context.emit('update:modelValue', name)
    }

    const resolveLegend = (item: SelectOption): SelectValue => {
      if (typeof item === 'object') {
        return (item as SelectOptionRecord).legend
      }
      return item as SelectValue
    }

    const resolveName = (item: SelectOption): SelectValue => {
      if (typeof item === 'object') {
        return (item as SelectOptionRecord).name
      }
      return item as SelectValue
    }

    const resolveSelected = (item: SelectOption): SelectValue => {
      return resolveName(item) === selected.value ? 'selected' : ''
    }

    const selectOption = (name: SelectValue): void => {
      if (verifyRegular(name)) {
        const index: number = props.options.findIndex((item: SelectOption) => {
          return resolveName(item) === name
        })
        if (index !== -1) {
          const target: Element | undefined = list.value?.children[index]
          if (target !== undefined) {
            onSelect(props.options[index], target as HTMLLIElement)
          }
        }
      }
    }

    watch(() => props.modelValue, selectOption)

    context.expose({
      selectOption,
    })

    return {
      id,
      onSelect,
      resolveLegend,
      resolveName,
      resolveSelected,
      selected,
      selectOption,
    }
  },
  render() {
    return (
      <ul
        class={bem()}
        data-total={this.options.length}
        data-value={this.modelValue}
        id={this.id}
      >
        {this.options.map((item, index) => (
          <li
            class={[bem('item'), this.resolveSelected(item)]}
            data-option={this.resolveName(item)}
            onClick={(event: Event) =>
              this.onSelect(item, event.target as HTMLLIElement)
            }
          >
            <span>{this.resolveLegend(item)}</span>
          </li>
        ))}
      </ul>
    )
  },
  mounted() {
    this.selectOption(this.modelValue)
  },
})
