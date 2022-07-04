import { defineComponent, ref, watch } from 'vue'
import type { PropType } from 'vue'
import SelectIcon from '@/components/icon/icon.component'
import type { Direction } from '@/types/component'
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
  direction: {
    default: 'horizontal',
    required: false,
    type: String as PropType<Direction>,
  },
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
  components: { SelectIcon },
  props: SelectCommonProps,
  emits: {
    change: (value: SelectValue) => true,
    select: (target: HTMLLIElement) => true,
    'update:modelValue': (value: SelectValue) => true,
  },
  setup(props: SelectProps, context) {
    const id = ref<string>(resolveUniqueId())
    const list = ref<HTMLElement | null>(null)

    const onSelect = (option: SelectOption, target: HTMLLIElement): void => {
      const name: SelectValue = resolveName(option)

      context.emit('change', name)
      context.emit('select', target)
      context.emit('update:modelValue', name)
    }

    const resolveIcon = (item: SelectOption): string | undefined => {
      if (typeof item === 'object') {
        return (item as SelectOptionRecord).icon
      }
      return undefined
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
      return resolveName(item) === props.modelValue ? 'selected' : ''
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
      resolveIcon,
      resolveLegend,
      resolveName,
      resolveSelected,
      selectOption,
    }
  },
  render() {
    return (
      <ul
        class={bem()}
        data-direction={this.direction}
        data-total={this.options.length}
        data-value={this.modelValue}
        id={this.id}
      >
        {this.options.map((item: SelectOption) => (
          <li
            class={[bem('item'), this.resolveSelected(item)]}
            data-option={this.resolveName(item)}
            onClick={(event: Event) =>
              this.onSelect(item, event.target as HTMLLIElement)
            }
          >
            {this.resolveIcon(item) && (
              <select-icon
                class={bem('icon')}
                name={(item as SelectOptionRecord).icon}
              />
            )}
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
