import { defineComponent, inject, onMounted, watch } from 'vue'

import { createNamespace } from '@/utils'

import fieldProvide from '@/components/field/field.provide'
import type { FieldProvide } from '@/components/field/field.interface'

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
      field?.blur()
    }
    const onFoucs = (): void => {
      context.emit('focus', props.name)
      field?.focus()
    }
    const onInput = (event: Event): void => {
      const target = event.target as HTMLInputElement
      updateValue(target.value)
    }

    const updateValue = (value: InputValue): void => {
      context.emit('update:modelValue', value)
      field?.validate(value)
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
        readonly={props.readonly}
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
