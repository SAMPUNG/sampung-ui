import { defineComponent, onMounted, ref, watch } from 'vue'

import { createNamespace, resolveUniqueId, validateRegular } from '@/utils/'

import SelectIcon from '@/components/icon/icon.component'

import type {
  SelectOption,
  SelectOptionRecord,
  SelectValue,
} from './select.interface'
import selectEmits from './select.emits'
import selectProps from './select.props'
import './select.scss'

const bem = createNamespace('select')

export default defineComponent({
  name: bem(),
  components: { SelectIcon },
  props: selectProps,
  emits: selectEmits,
  setup(props, context) {
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
      if (validateRegular(name)) {
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

    onMounted(() => {
      selectOption(props.modelValue)
    })

    return () => (
      <ul
        class={bem()}
        data-direction={props.direction}
        data-total={props.options.length}
        data-value={props.modelValue}
        id={id.value}
      >
        {props.options.map((item: SelectOption) => (
          <li
            class={[bem('item'), resolveSelected(item)]}
            data-selected={resolveSelected(item)}
            data-option={resolveName(item)}
            onClick={(event: Event) =>
              onSelect(item, event.target as HTMLLIElement)
            }
          >
            {resolveIcon(item) && (
              <select-icon
                class={bem('icon')}
                name={(item as SelectOptionRecord).icon}
              />
            )}
            <span>{resolveLegend(item)}</span>
          </li>
        ))}
      </ul>
    )
  },
})
