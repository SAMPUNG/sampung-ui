import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { verifyRegular } from '@/utils/data'
import Namespace from '@/utils/namespace'
import type { InputValue } from './input.interface'
import './input.scss'

const input = new Namespace('input')

const inputEmits = {
  blur: (name: string) => true,
  foucs: (name: string) => true,
  'update:modelValue': (value: InputValue, name: string) => true,
}

const inputProps = {
  inline: {
    default: false,
    required: false,
    type: Boolean,
  },
  max: {
    default: undefined,
    required: false,
    type: Number,
  },
  min: {
    default: undefined,
    required: false,
    type: Number,
  },
  modelValue: {
    default: undefined,
    required: true,
    // type: [String, Number, Boolean, undefined] as PropType<InputValue>,
    validator: verifyRegular,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  placeholder: {
    default: '',
    required: false,
    type: String,
  },
  step: {
    default: undefined,
    required: false,
    type: Number,
  },
  type: {
    default: 'text',
    required: false,
    type: String,
  },
}

export default defineComponent({
  name: input.name,
  props: inputProps,
  emits: inputEmits,
  setup(props, context) {
    const onInput = (event: Event): void => {
      const target = event.target as HTMLInputElement
      const value: InputValue = target.value
      context.emit('update:modelValue', value, props.name)
    }

    return {
      onInput,
    }
  },
  render() {
    return (
      <input
        class={input.bem()}
        max={this.max}
        min={this.min}
        name={this.name}
        placeholder={this.placeholder}
        step={this.step}
        type={this.type}
        value={this.modelValue}
        onInput={this.onInput}
      />
    )
  },
})
