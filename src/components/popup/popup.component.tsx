import { defineComponent, onMounted, ref, watch } from 'vue'

import PopupButton from '@/components/button/button.component'
import type { ButtonInstance } from '@/components/button/button.interface'
import PopupIcon from '@/components/icon/icon.component'

import { createNamespace, resolveUniqueId } from '@/utils/'
import type { Atom, Style } from '@/types/component'

import popupBounds from './popup.bounds'
import popupEmits from './popup.emits'
import popupProps from './popup.props'
import type { PopupBounds } from './popup.interface'
import './popup.scss'

const bem = createNamespace('popup')

export default defineComponent({
  name: bem(),
  components: { PopupButton, PopupIcon },
  props: popupProps,
  emits: popupEmits,
  setup(props, context) {
    const entry = ref<ButtonInstance>()
    const id = ref<string>(resolveUniqueId())
    const offsetXE = ref<number>(0)
    const offsetXO = ref<number>(0)
    const offsetYE = ref<number>(0)
    const offsetYO = ref<number>(0)
    const originX = ref<number>(0)
    const originY = ref<number>(0)
    const overlay = ref<HTMLDivElement>()
    const pack = ref<HTMLDivElement>()
    const position = ref<Style>({ position: 'absolute' })

    const onClose = (): void => {
      entry.value?.toggle()
      onToggle(false)
    }
    const onOpen = (): void => {
      entry.value?.click()
      onToggle(true)
    }
    const onToggle = (value?: boolean): void => {
      const visible = typeof value === 'boolean' ? value : !props.modelValue

      context.emit('change', visible, props.name)
      context.emit('update:modelValue', visible, props.name)

      if (visible) {
        context.emit('open', props.name)
      } else {
        context.emit('close', props.name)
      }
    }

    const renderEntry = () => {
      if (context.slots.entry) {
        return context.slots.entry()
      }
      return (
        <popup-button
          appearance={props.appearance}
          class={bem('entry')}
          data-popup={props.modelValue}
          icon={props.icon}
          id={id.value}
          legend={props.legend}
          mode="diode"
          name={props.name}
          onClick={() => onToggle()}
          ref={entry}
        />
      )
    }
    const renderEscape = () => {
      if (!props.escape) {
        return ''
      }
      return (
        <popup-icon
          class={bem('escape')}
          name="close"
          onClick={() => onClose()}
        />
      )
    }

    const resolvePosition = (
      bounds: PopupBounds,
      name: 'bottom' | 'left' | 'right' | 'top'
    ): string => {
      if (props.inset) {
        if (bounds.inset === name) {
          return '0'
        }
        if (bounds[name] === bounds.inset) {
          return ''
        }
      }
      switch (bounds[name]) {
        case 'center': {
          return `${originX.value - offsetXO.value}px`
        }
        case 'middle': {
          return `${originY.value - offsetYO.value}px`
        }
        case 'left':
        case 'right': {
          return `${originX.value + offsetXE.value + 8}px`
        }
        case 'bottom':
        case 'top': {
          return `${originY.value + offsetYE.value + 8}px`
        }
        default: {
          return ''
        }
      }
    }

    const updateContainer = () => {
      let container: Atom = pack.value?.querySelector(props.container)
      if (!container) {
        if (entry.value?.el) {
          container = entry.value.el as HTMLButtonElement
        } else {
          container = document.body
        }
      }
      offsetXE.value = container.clientWidth / 2
      offsetYE.value = container.clientHeight / 2
      originX.value = container.offsetLeft + offsetXE.value
      originY.value = container.offsetTop + offsetYE.value
    }
    const updateOverlay = () => {
      if (overlay.value) {
        const target = overlay.value as HTMLDivElement
        offsetXO.value = target.clientWidth / 2
        offsetYO.value = target.clientHeight / 2
      }
    }
    const updatePosition = (): void => {
      updateContainer()
      updateOverlay()

      position.value = { position: 'absolute' }

      const bounds = popupBounds.find(({ name }) => name === props.position)

      if (bounds) {
        position.value.bottom = resolvePosition(bounds, 'bottom')
        position.value.left = resolvePosition(bounds, 'left')
        position.value.right = resolvePosition(bounds, 'right')
        position.value.top = resolvePosition(bounds, 'top')
      }
    }

    onMounted(() => {
      onToggle(props.modelValue)
      updatePosition()
    })

    watch(() => props.modelValue, onToggle)
    watch(() => [props.inset, props.position], updatePosition)

    context.expose({
      close: onClose,
      el: overlay,
      open: onOpen,
      toggle: onToggle,
    })

    return () => (
      <div class={bem('pack')} ref={pack}>
        {renderEntry()}
        <div
          class={bem()}
          data-inset={props.inset}
          data-position={props.position}
          data-visible={props.modelValue}
          id={id.value}
          ref={overlay}
          style={position.value}
        >
          <article class={bem('body')}>{context.slots?.default?.()}</article>
          {renderEscape()}
        </div>
      </div>
    )
  },
})
