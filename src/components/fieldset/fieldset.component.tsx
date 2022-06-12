import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import style from './fieldset.module.scss'

const name = bem('fieldset')

export default defineComponent({
  name,
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
        class={style[name]}
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
