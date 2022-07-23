import { defineComponent, ref, watch } from 'vue'

import DialogButton from '@/components/button/button.component'
import DialogIcon from '@/components/icon/icon.component'
import DialogLegend from '@/components/legend/legend.component'

import { createNamespace, resolveUniqueId } from '@/utils'

import dialogEmits from './dialog.emits'
import dialogProps from './dialog.props'
import './dialog.scss'

const bem = createNamespace('dialog')

export default defineComponent({
  name: bem(),
  components: {
    DialogButton,
    DialogIcon,
    DialogLegend,
  },
  inheritAttrs: false,
  props: dialogProps,
  emits: dialogEmits,
  setup(props, context) {
    const dialog = ref<HTMLDialogElement>()
    const id = ref<string>(resolveUniqueId())

    const onCancel = (): void => {
      toggleDialog(false)

      if (dialog.value) {
        dialog.value.returnValue = 'cancel'
      }

      context.emit('close', props.name)
    }
    const onSubmit = (): void => {
      toggleDialog(false)

      if (dialog.value) {
        dialog.value.returnValue = 'submit'
      }

      context.emit('close', props.name)
    }

    const renderBody = () => {
      return <article class={bem('body')}>{context.slots?.default?.()}</article>
    }
    const renderClose = () => {
      if (!props.withClose) {
        return ''
      }
      return (
        <dialog-icon
          class={bem('esc')}
          name="close"
          onClick={() => toggleDialog(false)}
        />
      )
    }
    const renderFooter = () => {
      if (!props.withFooter) {
        return ''
      }
      if (context.slots.footer) {
        return context.slots.footer()
      }
      return (
        <footer class={bem('footer')}>
          <dialog-button
            legend="취소"
            onClick={() => onCancel()}
            palette="secondary"
            value="cancel"
          />
          <dialog-button
            legend="송이"
            onClick={() => onSubmit()}
            palette="primary"
            value="submit"
          />
        </footer>
      )
    }
    const renderHeader = () => {
      if (!props.withHeader) {
        return renderClose()
      }
      if (context.slots.header) {
        return context.slots.header()
      }
      return (
        <header class={bem('header')}>
          <div class={bem('title')}>
            <dialog-icon
              class={bem('icon')}
              name={props.icon}
            />
            <dialog-legend
              class={bem('legend')}
              legend={props.legend}
            />
          </div>
          <div class={bem('controls')}>{renderClose()}</div>
        </header>
      )
    }

    const toggleDialog = (value?: boolean): void => {
      let visible = typeof value === 'boolean' ? value : !props.modelValue

      if (!dialog.value) {
        visible = false
      }

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

    toggleDialog(props.modelValue)
    watch(() => props.modelValue, toggleDialog)

    context.expose({
      el: dialog,
      toggle: toggleDialog,
    })

    return () => (
      <div
        class={bem('mask')}
        data-visible={props.modelValue}
      >
        <dialog
          class={bem()}
          data-visible={props.modelValue}
          data-with-close={props.withClose}
          data-with-footer={props.withFooter}
          data-with-header={props.withHeader}
          id={id.value}
          ref={dialog}
          {...context.attrs}
        >
          {renderHeader()}
          {renderBody()}
          {renderFooter()}
        </dialog>
      </div>
    )
  },
})
