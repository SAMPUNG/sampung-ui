import { defineComponent, ref } from 'vue'

import type { Style } from '@/types'
import { absolute, createNamespace, debounce, resolveUniqueId } from '@/utils'

import type { EffectRecord, EffectType } from './effect.interface'
import effectProps from './effect.props'
import './effect.scss'

const bem = createNamespace('effect')

export default defineComponent({
  name: bem(),
  props: effectProps,
  emits: ['click'],
  setup(props, context) {
    const effects = ref<EffectRecord[]>([])

    const clear = (): void => {
      effects.value = []
    }

    const drop = (type: EffectType) => {
      effects.value = effects.value.filter((item) => item.type !== type)
    }

    const dropLater = debounce((type: EffectType) => {
      effects.value = effects.value.filter((item) => item.type !== type)
    }, 1000)

    const has = (type: EffectType): boolean =>
      effects.value?.some((item: EffectRecord) => item.type === type)

    const onClick = (event: MouseEvent): void => {
      if (has('disabled') || has('loading')) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        push('ripple', event)
        context.emit('click', event)
      }
    }

    const push = (type: EffectType, event: MouseEvent): void => {
      const id: string = resolveUniqueId()
      let style: Style = absolute()

      if (type === 'ripple') {
        style = resolveRipple(event)
        dropLater(type)
      }

      effects.value.push({
        id,
        style,
        type,
      })
    }

    const resolveRipple = (event: MouseEvent): Style => {
      const target = event.target as HTMLUListElement
      const { clientHeight, clientWidth } = target
      const { offsetX, offsetY } = event
      const radius: number = Math.max(
        clientHeight + offsetY,
        clientWidth + offsetX
      )
      const style: Style = Object.assign(
        {
          height: `${radius}px`,
          width: `${radius}px`,
        },
        absolute({
          left: offsetX - radius / 2,
          top: offsetY - radius / 2,
        })
      )
      return style
    }

    const update = (id: string, type: EffectType, style?: Style) => {
      const index = effects.value.findIndex(
        (item: EffectRecord) => item.id === id
      )
      if (index !== -1) {
        effects.value[index].type = type
        if (style) {
          effects.value[index].style = style
        }
      }
    }

    context.expose({
      clear,
      drop,
      has,
      push,
      update,
    })

    return () => (
      <div
        class={bem()}
        data-container={props.container}
        onClick={onClick}
      >
        <ul class={bem('list')}>
          {effects.value.map((item: EffectRecord) => (
            <li
              class={bem('item')}
              data-effect={item.type}
              data-id={item.id}
              style={item.style}
            />
          ))}
        </ul>
      </div>
    )
  },
})
