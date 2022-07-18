import { defineComponent, provide, ref } from 'vue'

import { createNamespace } from '@/utils'

import formEmits from './form.emits'
import formProps from './form.props'
import { model } from './form.provide'
import './form.scss'

const bem = createNamespace('form')

export default defineComponent({
  name: bem(),
  props: formProps,
  emits: formEmits,
  setup(props, context) {
    const form = ref<HTMLFormElement>()
    // const valid: = ref<boolean>(false)

    provide(model, form.value)

    // const onReset = (): void => {
    //   context.emit('reset', props.name)
    // }
    // const onSubmit = (): void => {
    //   context.emit('submit', props.name)
    // }

    return () => (
      <form
        action={props.action}
        autocomplete={props.autocomplete}
        class={bem()}
        enctype={props.enctype}
        method={props.method}
        name={props.name}
        ref={form}
        target={props.target}
      >
        {context.slots?.default?.()}
      </form>
    )
  },
})
