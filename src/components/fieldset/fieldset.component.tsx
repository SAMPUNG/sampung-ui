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
  render() {
    return (
      <fieldset
        class={style[bem()]}
        disabled={this.disabled}
        form={this.form}
        name={this.name}
      >
        <legend>{this.legend}</legend>
        {typeof this.$slots.default === 'function' && this.$slots.default()}
      </fieldset>
    )
  },
})
