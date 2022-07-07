import { defineComponent, type PropType, ref } from 'vue'

import type { Palette, Style } from '@/types/component'
import { absolute, createNamespace, debounce, resolveUniqueId } from '@/utils/'

import type { EffectContainer, EffectRecord } from './effect.interface'
import './effect.scss'

const bem = createNamespace('effect')

const effectProps = {
  container: {
    default: 'parent',
    required: false,
    type: String as PropType<EffectContainer>,
  },
  palette: {
    default: 'primary',
    required: false,
    type: String as PropType<Palette>,
  },
}

export default defineComponent({
  name: bem(),
  props: effectProps,
  emits: ['click'],
  setup(props, context) {
    const effects = ref<EffectRecord[]>([])

    const clear = (): void => {
      effects.value = []
    }

    const drop = debounce((type: string) => {
      effects.value = effects.value.filter((item) => item.type !== type)
    }, 1000)

    const onClick = (event: MouseEvent): void => {
      push('ripple', event)
      context.emit('click', event)
    }

    const push = (type: string, event: MouseEvent): void => {
      const id: string = resolveUniqueId()
      switch (type) {
        // case 'active':
        // case 'loading':
        case 'ripple': {
          effects.value.push({
            id,
            style: resolveRipple(event),
            type,
          })
          drop(type)
          break
        }
        default: {
          effects.value.push({
            id,
            style: absolute(),
            type: type,
          })
          break
        }
      }
    }

    const resolveRipple = (event: MouseEvent): Style => {
      const target = event.target as HTMLUListElement
      const { clientHeight, clientWidth } = target
      const { offsetX, offsetY } = event
      const radius: number = Math.max(
        clientHeight + offsetY,
        clientWidth + offsetX
      )
      console.log(clientHeight, clientWidth, offsetX, offsetY)
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

    context.expose({
      clear,
      drop,
      push,
    })

    return {
      effects,
      onClick,
    }
  },
  render() {
    return (
      <div class={bem()} onClick={this.onClick}>
        <ul class={bem('list')}>
          {this.effects.map((item: EffectRecord) => (
            <li
              class={bem('item')}
              data-container={this.container}
              data-effect={item.type}
              data-id={item.id}
              data-palette={this.palette}
              style={item.style}
            />
          ))}
        </ul>
      </div>
    )
  },
})
