import { defineComponent, inject } from 'vue'
// import type { PropType } from 'vue'
import {
  type FieldProvide,
  fieldProvide,
} from '@/components/field/field.interface'
import { verifyEmpty, verifyRegular } from '@/utils/data'
import createNamespace from '@/utils/namespace'
import type { InputValue } from './input.interface'
import './input.scss'

const bem = createNamespace('input')

const inputEmits = {
  blur: (name: string) => true,
  focus: (name: string) => true,
  'update:modelValue': (value: InputValue, name: string) => true,
}

const inputProps = {
  autocomplete: {
    default: 'off',
    required: false,
    type: String,
  },
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
  name: bem(),
  props: inputProps,
  emits: inputEmits,
  setup(props, context) {
    const field: FieldProvide = inject(fieldProvide)

    const onBlur = (): void => {
      context.emit('blur', props.name)
      field?.updateStatus('focus', false)
    }
    const onFoucs = (): void => {
      context.emit('focus', props.name)
      field?.updateStatus('focus', true)
    }
    const onInput = (event: Event): void => {
      const target = event.target as HTMLInputElement
      const value: InputValue = target.value
      context.emit('update:modelValue', value, props.name)
      const empty = verifyEmpty(value)
      field?.updateStatus('empty', empty)
    }

    return {
      onBlur,
      onFoucs,
      onInput,
    }
  },
  render() {
    return (
      <input
        autocomplete={this.autocomplete}
        class={bem()}
        max={this.max}
        min={this.min}
        name={this.name}
        placeholder={this.placeholder}
        step={this.step}
        type={this.type}
        value={this.modelValue}
        onBlur={() => this.onBlur()}
        onFocus={() => this.onFoucs()}
        onInput={this.onInput}
      />
    )
  },
})
