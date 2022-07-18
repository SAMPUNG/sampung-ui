import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'

import { createNamespace } from '@/utils'
import type { Style } from '@/types'

import AffixIcon from '@/components/icon/icon.component'

import affixEmits from './affix.emits'
import affixProps from './affix.props'
import './affix.scss'

const bem = createNamespace('affix')

export default defineComponent({
  name: bem(),
  components: { AffixIcon },
  props: affixProps,
  emits: affixEmits,
  setup(props, context) {
    const el = ref<HTMLDivElement>()
    const height = ref<number>(0)
    const offsetY = ref<number>(0)
    const position = computed(() => resolvePosition())

    const onScroll = (event: Event): void => {
      const target = event.target as HTMLElement
      height.value = target.clientHeight
      offsetY.value = target.scrollTop
    }

    const renderHeader = () => {
      if (props.icon && props.legend) {
        return (
          <div class={bem('header')}>
            <affix-icon
              class={bem('icon')}
              name={props.icon}
            />
            <span class={bem('legend')}>{props.legend}</span>
          </div>
        )
      }
      return ''
    }

    const resolvePosition = (): Style => {
      const result: Style = {
        position: props.container === 'parent' ? 'absolute' : 'fixed',
      }

      if (offsetY.value > 0) {
        result.transform = `translateY(${offsetY.value}px)`
      }

      if (props.vertical === 'both') {
        result.bottom = `${props.offsetX}px`
        result.top = `${props.offsetX}px`
      } else {
        result[props.vertical] = `${props.offsetX}px`
      }

      if (props.horizontal === 'both') {
        result.left = `${props.offsetY}px`
        result.right = `${props.offsetY}px`
      } else {
        result[props.horizontal] = `${props.offsetY}px`
      }

      return result
    }

    onMounted(() => {
      if (props.container === 'parent') {
        el.value?.parentElement?.addEventListener('scroll', onScroll)
      } else {
        window.addEventListener('scroll', onScroll)
      }
      context.emit('ready', props.name)
    })
    onUnmounted(() => {
      if (props.container === 'parent') {
        el.value?.parentElement?.removeEventListener('scroll', onScroll)
      } else {
        window.removeEventListener('scroll', onScroll)
      }
      context.emit('dispose', props.name)
    })

    context.expose({
      name: props.name,
    })

    return () => (
      <div
        class={bem()}
        data-height={height.value}
        data-offset-y={offsetY.value}
        style={position.value}
        ref={el}
      >
        {renderHeader()}
        {context.slots?.default?.()}
      </div>
    )
  },
})
