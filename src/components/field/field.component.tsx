import {
  defineComponent,
  inject,
  type PropType,
  provide,
  type Ref,
  ref,
} from 'vue'
import { type InputValue } from '@/components/input/input.interface'
import { model } from '@/components/form/form.provide'
import type { Appearance } from '@/types/component'
import createNamespace from '@/utils/namespace'
import { fieldProvide } from './field.interface'
import './field.scss'

const bem = createNamespace('field')

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
  name: bem(),
  props: fieldProps,
  emits: fieldEmits,
  setup(props, context) {
    const el = inject(model)
    const required: Ref<boolean> = ref(false)
    const status: Ref<string[]> = ref(['empty'])
    const valid: Ref<boolean> = ref(true)

    const onBlur = (): void => {
      context.emit('blur', props.name)
      updateStatus('foucs', false)
    }
    const onFocus = (): void => {
      context.emit('foucs', props.name)
      updateStatus('foucs', true)
    }
    const updateStatus = (key: string, value: boolean): void => {
      const index = status.value.indexOf(key)
      if (value && index === -1) {
        status.value.push(key)
      } else if (index !== -1) {
        status.value.splice(index, 1)
      }
    }

    provide(fieldProvide, {
      onBlur,
      onFocus,
      updateStatus,
    })

    return {
      el,
      required,
      status,
      valid,
    }
  },
  render() {
    return (
      <fieldset class={[bem(this.status)]}>
        <legend class={bem('legend')}>{this.legend}</legend>
        {typeof this.$slots.default === 'function' && this.$slots.default()}
      </fieldset>
    )
  },
})
