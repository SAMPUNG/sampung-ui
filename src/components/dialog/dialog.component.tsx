import { defineComponent, ref, watch } from 'vue'

import DialogButton from '@/components/button/button.component'
import DialogIcon from '@/components/icon/icon.component'

import { createNamespace, resolveUniqueId } from '@/utils/'

import dialogEmits from './dialog.emits'
import dialogProps from './dialog.props'
import './dialog.scss'

const bem = createNamespace('dialog')

export default defineComponent({
  name: bem(),
  components: { DialogButton, DialogIcon },
  inheritAttrs: false,
  props: dialogProps,
  emits: dialogEmits,
  setup(props, context) {
    const dialog = ref<HTMLDialogElement>()
    const id = ref<string>(resolveUniqueId())

    const toggle = (value?: boolean): void => {
      const visible = typeof value === 'boolean' ? value : !props.modelValue

      context.emit('change', visible)
      context.emit('update:modelValue', visible)

      if (visible) {
        dialog.value?.showModal()
        context.emit('open', props.name)
      } else {
        dialog.value?.close()
        context.emit('close', props.name)
      }
    }

    watch(() => props.modelValue, toggle)

    context.expose({
      el: dialog,
      toggle,
    })

    return () => (
      <div class={bem('mask')} data-visible={props.modelValue}>
        <dialog
          class={bem()}
          data-visible={props.modelValue}
          id={id.value}
          ref={dialog}
          {...context.attrs}
        >
          <header class={bem('header')}>
            <span class={bem('title')}>
              <dialog-icon class={bem('icon')} name={props.icon} />
              <span class={bem('legend')}>{props.legend}</span>
            </span>
            <dialog-button
              appearance="text"
              class={bem('esc')}
              icon="close"
              onClick={() => toggle(false)}
              palette="error"
            />
          </header>
          <article class={bem('body')}>
            {typeof context.slots.default === 'function' &&
              context.slots.default()}
          </article>
          <footer class={bem('footer')}>
            <dialog-button
              legend="Cancel"
              onClick={() => toggle(false)}
              palette="secondary"
            />
            <dialog-button
              legend="Close"
              onClick={() => toggle(false)}
              palette="primary"
            />
          </footer>
        </dialog>
      </div>
    )
  },
})
