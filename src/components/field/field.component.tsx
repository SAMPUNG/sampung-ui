// import { defineComponent, inject, provide, ref } from 'vue'
import { defineComponent, provide, ref } from 'vue'

import createNamespace from '@/utils/namespace'

// import { model } from '@/components/form/form.provide'

import fieldEmits from './field.emits'
import fieldProps from './field.props'
import { fieldProvide } from './field.interface'
import './field.scss'

const bem = createNamespace('field')

export default defineComponent({
  name: bem(),
  props: fieldProps,
  emits: fieldEmits,
  setup(props, context) {
    // const el = inject(model)
    // const required = ref<boolean>(false)
    const status = ref<string[]>([])
    // const valid = ref<boolean>(true)

    const onBlur = (): void => {
      context.emit('blur', props.name)
      updateStatus('foucs', false)
    }
    const onFocus = (): void => {
      context.emit('foucs', props.name)
      updateStatus('foucs', true)
    }
    const updateStatus = (key: string, value: boolean): void => {
      const index = status.value.indexOf(key)
      if (value && index === -1) {
        status.value.push(key)
      } else if (index !== -1) {
        status.value.splice(index, 1)
      }
    }

    provide(fieldProvide, {
      onBlur,
      onFocus,
      updateStatus,
    })

    return () => (
      <fieldset class={[bem(status.value)]}>
        <legend class={bem('legend')}>{props.legend}</legend>
        {context.slots?.default?.()}
      </fieldset>
    )
  },
})
