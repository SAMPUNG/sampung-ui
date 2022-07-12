import { defineComponent, watch } from 'vue'

import createNamespace from '@/utils/namespace'

import AccordionButton from '@/components/button/button.component'
import AccordionIcon from '@/components/icon/icon.component'

import accordionEmits from './accordion.emits'
import accordionProps from './accordion.props'
import './accordion.scss'

const bem = createNamespace('accordion')

export default defineComponent({
  name: bem(),
  components: { AccordionButton, AccordionIcon },
  props: accordionProps,
  emits: accordionEmits,
  setup(props, context) {
    const onClick = (): void => {
      context.emit('click', props.name)
      toggle()
    }

    const toggle = (value?: boolean): void => {
      const visible = typeof value === 'boolean' ? value : !props.modelValue

      context.emit('change', visible)
      context.emit('update:modelValue', visible)

      if (visible) {
        context.emit('open', props.name)
      } else {
        context.emit('close', props.name)
      }
    }

    const renderControls = () => {
      if (context.slots.controls) {
        return context.slots.controls()
      }
      return <accordion-icon class={bem('status')} name="expand-more" />
    }
    const renderFooter = () => {
      if (!props.withFooter) {
        return ''
      }
      if (context.slots.footer) {
        return context.slots.footer()
      }
      return (
        <footer class={bem('footer')} data-visible={props.modelValue}>
          <accordion-button
            legend="Cancel"
            onClick={() => toggle(false)}
            palette="secondary"
          />
          <accordion-button
            legend="Close"
            onClick={() => toggle(false)}
            palette="primary"
          />
        </footer>
      )
    }
    const renderHeader = () => {
      if (context.slots.header) {
        return context.slots.header()
      }
      return (
        <header class={bem('header')} onClick={onClick}>
          <div class={bem('title')}>
            <accordion-icon class={bem('icon')} name={props.icon} />
            <span class={bem('legend')}>{props.legend}</span>
          </div>
          <div class={bem('controls')}>{renderControls()}</div>
        </header>
      )
    }

    toggle(props.modelValue)
    watch(() => props.modelValue, toggle)

    context.expose({
      toggle,
    })

    return () => (
      <div
        class={bem()}
        data-status={props.modelValue ? 'expanded' : 'collapsed'}
      >
        {renderHeader()}
        <article class={bem('body')} data-visible={props.modelValue}>
          {context.slots?.default?.()}
        </article>
        {renderFooter()}
      </div>
    )
  },
})
