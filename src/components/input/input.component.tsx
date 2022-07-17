import { defineComponent, inject, onMounted, watch } from 'vue'

import { createNamespace, validateEmpty } from '@/utils/'

import {
  type FieldProvide,
  fieldProvide,
} from '@/components/field/field.interface'

import type { InputValue } from './input.interface'
import inputEmits from './input.emits'
import inputProps from './input.props'
import './input.scss'

const bem = createNamespace('input')

export default defineComponent({
  name: bem(),
  props: inputProps,
  emits: inputEmits,
  setup(props, context) {
    const field: FieldProvide = inject(fieldProvide)

    const onBlur = (): void => {
      context.emit('blur', props.name)
      field?.onBlur()
    }
    const onFoucs = (): void => {
      context.emit('focus', props.name)
      field?.onFocus()
    }
    const onInput = (event: Event): void => {
      const target = event.target as HTMLInputElement
      updateValue(target.value)
    }

    const updateValue = (value: InputValue): void => {
      context.emit('update:modelValue', value, props.name)
      const empty = validateEmpty(value)
      field?.updateStatus('empty', empty)
    }

    watch(() => props.modelValue, updateValue)

    onMounted(() => {
      updateValue(props.modelValue)
    })

    context.expose({
      updateValue,
    })

    return () => (
      <input
        autocomplete={props.autocomplete}
        class={bem()}
        max={props.max}
        min={props.min}
        name={props.name}
        placeholder={props.placeholder}
        step={props.step}
        type={props.type}
        value={props.modelValue}
        onBlur={() => onBlur()}
        onFocus={() => onFoucs()}
        onInput={onInput}
      />
    )
  },
})
