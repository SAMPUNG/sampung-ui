// import { defineComponent, inject, provide, ref } from 'vue'
import { defineComponent, provide, reactive, ref } from 'vue'

import {createNamespace,resolveDataset} from '@/utils/'

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
    const dataset = reactive({
      focus: false,
      empty: true,
    })
    // const el = inject(model)
    // const required = ref<boolean>(false)
    const status = ref<string[]>([])
    // const valid = ref<boolean>(true)

    const onBlur = (): void => {
      context.emit('blur', props.name)
      updateStatus('focus', false)
    }
    const onFocus = (): void => {
      context.emit('foucs', props.name)
      updateStatus('focus', true)
    }
    const updateStatus = (key: 'empty' | 'focus', value: boolean): void => {
      const index = status.value.indexOf(key)
      if (value && index === -1) {
        status.value.push(key)
      } else if (index !== -1) {
        status.value.splice(index, 1)
      }
      dataset[key] = index === -1
    }

    provide(fieldProvide, {
      onBlur,
      onFocus,
      updateStatus,
    })

    return () => (
      <fieldset class={[bem()]} {...resolveDataset(dataset)}>
        <legend class={bem('legend')}>{props.legend}</legend>
        {context.slots?.default?.()}
      </fieldset>
    )
  },
})
