import { computed, defineComponent, onMounted, ref, watch } from 'vue'

import { createNamespace, resolveDataset, resolveUniqueId } from '@/utils/'

import OptionIcon from '@/components/icon/icon.component'

import selectEmits from './options.emits'
import selectProps from './options.props'
import type {
  OptionElement,
  OptionRecord,
  OptionStyle,
  OptionsPicked,
} from './options.interface'
import './options.scss'

const bem = createNamespace('options')

export default defineComponent({
  name: bem(),
  components: { OptionIcon },
  props: selectProps,
  emits: selectEmits,
  setup(props, context) {
    const direction = computed(() => resolveStyle())
    const id = ref<string>(resolveUniqueId())

    const onPick = (event: MouseEvent): OptionsPicked => {
      const target = event.target as HTMLLIElement
      const name = target?.dataset?.name

      if (!props.multiple) {
        const value = [name]
        context.emit('change', value)
        context.emit('pick', target)
        context.emit('update:modelValue', value)
        return value
      }

      const copy = [...props.modelValue]
      const index = copy.indexOf(name)

      if (index === -1) {
        copy.push(name)
      } else {
        copy.splice(index, 1)
      }

      context.emit('change', copy)
      context.emit('update:modelValue', copy)
      return copy
    }

    const pickOption = (value: OptionsPicked): OptionElement => {
      if (!props.multiple) {
        return null
      }

      if (!value.length) {
        return null
      }

      const selector: string = `li[data-name="${value[0]}"]`
      const el: OptionElement = document.querySelector(selector)

      return el
    }

    const renderIcon = (option: OptionRecord) => {
      if (!option?.icon) {
        return ''
      }
      return <option-icon class={bem('icon')} name={option.icon} />
    }
    const renderLegend = (option: OptionRecord) => {
      return <span class={bem('legend')}>{option?.legend || option.name}</span>
    }
    const renderOptions = () => {
      if (!props.options.length) {
        return <li class={bem('empty')}>No options!</li>
      }

      return props.options.map((option) => {
        const dataset = resolveDataset({
          disabled: option?.disabled,
          icon: option?.icon,
          legend: option?.legend,
          name: option.name,
          picked: props.modelValue.includes(option.name),
        })
        const height = {
          height: `${props.height}px`,
          lineHeight: `${props.height}px`,
        }
        return (
          <li class={bem('item')} {...dataset} onClick={onPick} style={height}>
            {renderIcon(option)}
            {renderLegend(option)}
          </li>
        )
      })
    }

    const resolveStyle = (): OptionStyle => {
      if (!props.flex) {
        return { display: 'block' }
      }

      return {
        alignItems: props.wrap ? 'flex-start' : 'center',
        display: 'flex',
        flexDirection: props.direction === 'horizontal' ? 'row' : 'column',
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        justifyContent: props.wrap ? 'flex-start' : 'space-between',
      }
    }

    const takeRevolution = (multiple: boolean): OptionsPicked => {
      if (!multiple) {
        if (props.modelValue.length > 1) {
          const copy = [...props.modelValue]
          const kept = [copy.pop()]
          context.emit('change', kept)
          context.emit('update:modelValue', kept)
          return kept
        }
      }

      return props.modelValue
    }

    onMounted(() => {
      context.emit('pick', pickOption(props.modelValue))
    })

    watch(() => props.modelValue, pickOption)
    watch(() => props.multiple, takeRevolution)

    context.expose({
      pick: pickOption,
    })

    return () => {
      const dataset = resolveDataset({
        direction: props.direction,
        multiple: props.multiple,
        total: props.options.length,
        value: props.modelValue.join(','),
      })
      return (
        <ul class={bem()} {...dataset} id={id.value} style={direction.value}>
          {renderOptions()}
        </ul>
      )
    }
  },
})
