import { defineComponent, ref, watch } from 'vue'

import DialogButton from '@/components/button/button.component'
import DialogIcon from '@/components/icon/icon.component'

import { resolveUniqueId } from '@/utils/data'
import createNamespace from '@/utils/namespace'

import dialogEmits from './dialog.emits'
import dialogProps from './dialog.props'
import './dialog.scss'

const bem = createNamespace('dialog')

export default defineComponent({
  name: bem(),
  components: { DialogButton, DialogIcon },
  props: dialogProps,
  emits: dialogEmits,
  setup(props, context) {
    const dialog = ref<HTMLDialogElement | null>(null)
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

    return {
      dialog,
      id,
      toggle,
    }
  },
  render() {
    return (
      <div class={bem('mask')} data-visible={this.modelValue}>
        <dialog
          class={bem()}
          data-visible={this.modelValue}
          id={this.id}
          ref="dialog"
        >
          <header class={bem('header')}>
            <span class={bem('title')}>
              <dialog-icon class={bem('icon')} name={this.icon} />
              <span class={bem('legend')}>{this.legend}</span>
            </span>
            <dialog-button
              appearance="text"
              class={bem('esc')}
              icon="close"
              onClick={() => this.toggle(false)}
              palette="error"
            />
          </header>
          <article class={bem('body')}>
            {typeof this.$slots.default === 'function' && this.$slots.default()}
          </article>
          <footer class={bem('footer')}>
            <dialog-button
              legend="Cancel"
              onClick={() => this.toggle(false)}
              palette="secondary"
            />
            <dialog-button
              legend="Close"
              onClick={() => this.toggle(false)}
              palette="primary"
            />
          </footer>
        </dialog>
      </div>
    )
  },
})
