import { defineComponent, inject, provide, ref } from 'vue'
import type { PropType, Ref } from 'vue'
import type { InputValue } from '@/components/input/input.interface'
import { model } from '@/components/form/form.provide'
import type { Appearance } from '@/types/component'
import Namespace from '@/utils/namespace'
import './field.scss'

const field = new Namespace('field')

const fieldEmits = {
  enable: (name: string) => true,
  blur: (name: string) => true,
  change: (value: InputValue, name: string) => true,
  disable: (name: string) => true,
  error: (message: string, value: InputValue, name: string) => true,
  format: (value: InputValue, name: string) => true,
  foucs: (name: string) => true,
  init: (value: InputValue, name: string) => true,
  input: (value: InputValue, name: string) => true,
  invalid: (message: string, value: InputValue, name: string) => true,
  reset: (value: InputValue, name: string) => true,
  valid: (message: string, value: InputValue, name: string) => true,
}

const fieldProps = {
  appearance: {
    default: 'legacy',
    required: false,
    type: String as PropType<Appearance>,
  },
  legend: {
    default: '',
    required: false,
    type: String,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
}

export default defineComponent({
  name: field.name,
  props: fieldProps,
  emits: fieldEmits,
  setup(props, context) {
    const el = inject(model)
    const empty: Ref<boolean> = ref(false)
    const required: Ref<boolean> = ref(false)
    const valid: Ref<boolean> = ref(true)

    const onBlur = (): void => {
      context.emit('blur', props.name)
    }
    const onFocus = (): void => {
      context.emit('foucs', props.name)
    }
    const updateEmpty = (e: boolean): void => {
      empty.value = e
    }

    provide('field', {
      onBlur,
      onFocus,
      updateEmpty,
    })

    return {
      el,
      empty,
      required,
      valid,
    }
  },
  render() {
    return (
      <fieldset class={field.bem()}>
        <legend class={field.bem('legend')}>{this.legend}</legend>
        {typeof this.$slots.default === 'function' && this.$slots.default()}
      </fieldset>
    )
  },
})
