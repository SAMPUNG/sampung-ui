// import { defineComponent, inject, provide, ref } from 'vue'
import { defineComponent, provide, reactive } from 'vue'

import { createNamespace, resolveDataset, validateEmpty } from '@/utils'

// import { model } from '@/components/form/form.provide'
import type { InputValue } from '@/components/input/input.interface'

import fieldEmits from './field.emits'
import fieldProps from './field.props'
import fieldProvide from './field.provide'
import type { FieldStatus } from './field.interface'
import './field.scss'

const bem = createNamespace('field')

export default defineComponent({
  name: bem(),
  props: fieldProps,
  emits: fieldEmits,
  setup(props, context) {
    const status = reactive<FieldStatus>({
      focus: false,
      empty: false,
      valid: true,
      waiting: false,
    })
    // const el = inject(model)
    // const required = ref<boolean>(false)
    // const valid = ref<boolean>(true)

    const onBlur = (): void => {
      context.emit('blur', props.name)
      setStatus('focus', false)
    }
    const onClear = (): void => {
      context.emit('clear', props.name)
      setStatus('empty', true)
    }
    const onFocus = (): void => {
      context.emit('foucs', props.name)
      setStatus('focus', true)
    }
    const onValidate = (value: InputValue): void => {
      const empty = validateEmpty(value)
      setStatus('empty', empty)
      setStatus('valid', !empty)
      onBlur()
    }

    const setStatus = (key: keyof FieldStatus, value: boolean): void => {
      status[key] = value
    }

    provide(fieldProvide, {
      blur: onBlur,
      clear: onClear,
      focus: onFocus,
      validate: onValidate,
    })

    context.expose({
      blur: onBlur,
      clear: onClear,
      focus: onFocus,
      validate: onValidate,
    })

    return () => (
      <fieldset
        class={[bem()]}
        {...resolveDataset(status)}
      >
        <legend class={bem('legend')}>{props.legend}</legend>
        {context.slots?.default?.()}
      </fieldset>
    )
  },
})
