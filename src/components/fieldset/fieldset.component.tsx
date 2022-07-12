import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import style from './fieldset.module.scss'

const bem = createNamespace('fieldset')

export default defineComponent({
  name: bem(),
  props: {
    disabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    form: {
      default: undefined,
      required: false,
      type: String,
    },
    legend: {
      default: undefined,
      required: false,
      type: String,
    },
    name: {
      default: undefined,
      required: false,
      type: String,
    },
  },
  setup(props, context) {
    return () => (
      <fieldset
        class={style[bem()]}
        disabled={props.disabled}
        form={props.form}
        name={props.name}
      >
        <legend>{props.legend}</legend>
        {context.slots?.default?.()}
      </fieldset>
    )
  },
})
