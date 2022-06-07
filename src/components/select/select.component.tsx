import { defineComponent, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { resolveUniqueId, verifyRegular } from '@/utils/data'
import Namespace from '@/utils/namespace'
import type { SelectOption, SelectOptionRecord, SelectProps, SelectValue } from './select.interface'

import './select.scss'

const select = new Namespace('select')

export const SelectCommonProps = {
  modelValue: {
    default: undefined,
    type: [String, Number, Boolean, undefined] as PropType<SelectValue>,
    validator: verifyRegular
  },
  options: {
    default: () => [],
    type: Array as PropType<SelectOption[]>
  }
}

export default defineComponent({
  name: select.name,
  props: SelectCommonProps,
  emits: {
    'change' (value: SelectValue) {
      return value
    },
    'select' (target: HTMLLIElement) {
      return target
    },
    'update:modelValue' (value: SelectValue) {
      return value
    }
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
      context.emit('update:modelValue', name);
      console.log('select on select | change :>:> ', name, props.modelValue, selected.value)
    }

    const resolveLegend = (item: SelectOption): SelectValue => {
      if (typeof item === 'object') {
        return (item as SelectOptionRecord).legend
      }
      return item as SelectValue;
    }

    const resolveName = (item: SelectOption): SelectValue => {
      if (typeof item === 'object') {
        return (item as SelectOptionRecord).name
      }
      return item as SelectValue;
    }

    const resolveSelected = (item: SelectOption): SelectValue => {
      return resolveName(item) === selected.value ? 'selected' : '';
    }

    const selectOption = (name: SelectValue): void => {
      if (verifyRegular(name)) {
        const index: number = props.options.findIndex((item: SelectOption) => {
          return resolveName(item) === name
        })
        console.log('select select :>:> ', name, index)
        if (index !== -1) {
          const target: Element | undefined = list.value?.children[index]
          console.dir(list)
          if (target !== undefined) {
            onSelect(props.options[index], target as HTMLLIElement)
          }
        }
      }
    }

    watch(() => props.modelValue, selectOption)

    context.expose({
      selectOption
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
      <ul class={select.bem()} id={this.id}>
        {
          this.options.map(item => (
            <li
              class={[select.bem('item'), this.resolveSelected(item)]}
              data-tab-name={this.resolveName(item)}
              onClick={(event: Event) => this.onSelect(item, event.target as HTMLLIElement)}
            >
              <span>{this.resolveLegend(item)}</span>
            </li>
          ))
        }
      </ul>
    )
  },
  mounted() {
    this.selectOption(this.modelValue)
  }
})
