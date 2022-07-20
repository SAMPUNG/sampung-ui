import { defineComponent, ref, watch } from 'vue'

import { createNamespace, resolveDataset, resolveDichotomy } from '@/utils'

import type { Size } from '@/types'

import accordionEmits from './accordion.emits'
import accordionProps from './accordion.props'
import './accordion.scss'

const bem = createNamespace('accordion')

export default defineComponent({
  name: bem(),
  props: accordionProps,
  emits: accordionEmits,
  setup(props, context) {
    const container = ref<HTMLDivElement>()
    const onBlur = (): void => {
      if (!props.fulfilled) {
        context.emit('update:modelValue', '')
      }
      context.emit('blur', props.name)
    }
    const onFocus = (name: string): void => {
      let value = name

      if (props.fulfilled && !name) {
        value = props.options[0].name
      }

      context.emit('update:modelValue', value)
      context.emit('focus', value, props.name)
    }

    const renderList = () => {
      if (!props.options.length) {
        return ''
      }
      return props.options.map((item) => {
        const dataset = resolveDataset({
          name: item.name,
          focus: props.modelValue === item.name,
        })
        return (
          <li
            class={bem('option')}
            {...dataset}
            onMouseenter={() => onFocus(item.name)}
            onMouseleave={() => onBlur()}
            style={resolveColumn(item.name)}
          >
            <img
              alt={item.poster}
              class={bem('poster')}
              src={item.poster}
            />
          </li>
        )
      })
    }

    const resolveColumn = (name: string): Size => {
      const horizontal = props.direction === 'horizontal'
      const key = horizontal ? 'width' : 'height'
      const source = horizontal ? 'clientWidth' : 'clientHeight'
      const target = container.value?.[source]
      const results: Size = {}

      if (!target) {
        return results
      }

      const limit = props.options.length
      const loss = props.gap * (limit - 1)

      if (!props.modelValue) {
        const average = (target - loss) / limit
        results[key] = `${average}px`

        return results
      }

      if (name === props.modelValue) {
        const focus = (target - loss) * 0.8
        results[key] = `${focus}px`
      } else {
        const declined = ((target - loss) * 0.2) / (limit - 1)
        results[key] = `${declined}px`
      }

      return results
    }

    onFocus(props.modelValue)

    watch(() => props.modelValue, onFocus)

    context.expose({
      blur: onBlur,
      focus: onFocus,
    })

    return () => {
      const dataset = resolveDataset({
        direction: props.direction,
        fulfilled: props.fulfilled,
        value: props.modelValue,
      })
      return (
        <div
          class={bem()}
          {...dataset}
          ref={container}
        >
          <ul
            class={bem('list')}
            {...resolveDichotomy(props.direction)}
          >
            {renderList()}
          </ul>
        </div>
      )
    }
  },
})
