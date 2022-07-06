import { defineComponent, type PropType, ref } from 'vue'

import type { Palette, Style } from '@/types/component'
import { absolute, createNamespace, debounce, resolveUniqueId } from '@/utils/'

import type { EffectRecord } from './effect.interface'
import './effect.scss'

const bem = createNamespace('effect')

const effectProps = {
  palette: {
    type: String as PropType<Palette>,
  },
  style: {
    type: Object as PropType<Style>,
  },
  type: {
    type: String,
  },
}

export default defineComponent({
  name: bem(),
  props: effectProps,
  setup(props, context) {
    const effects = ref<EffectRecord[]>([])

    const addEffect = (event: MouseEvent): void => {
      const { clientHeight, clientWidth } = event.target as HTMLButtonElement
      const { offsetX, offsetY } = event
      const id: string = resolveUniqueId()
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
      effects.value.push({ id, style, type: 'ripple' })
      clearEffects('ripple')
    }
    const clearEffects = debounce((type: string) => {
      effects.value = effects.value.filter((item) => item.type !== type)
    }, 1000)

    context.expose({
      addEffect,
      clearEffects,
    })

    return <span class={bem()} data-effect={props.type} style={props.style} />
  },
})
