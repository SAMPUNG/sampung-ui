import { defineComponent, provide, ref } from 'vue'
import type { Ref } from 'vue'
import Namespace from '@/utils/namespace'
import { model } from './form.provide'
import './form.scss'

const form = new Namespace('form')

const formEmits = {
  reset: (name: string) => true,
  submit: (name: string) => true,
}

const formProps = {
  action: {
    default: '',
    required: false,
    type: String,
  },
  autocomplete: {
    default: 'on',
    required: false,
    type: String,
  },
  disabled: {
    default: false,
    required: false,
    type: Boolean,
  },
  enctype: {
    default: '',
    required: false,
    type: String,
  },
  method: {
    default: '',
    required: false,
    type: String,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  target: {
    default: '',
    required: false,
    type: String,
  },
}
export default defineComponent({
  name: form.name,
  props: formProps,
  emits: formEmits,
  setup(props, context) {
    const el = ref<HTMLInputElement | null>(null)
    const valid: Ref<boolean> = ref(false)

    provide(model, el.value)

    const onReset = (): void => {
      context.emit('reset', props.name)
    }
    const onSubmit = (): void => {
      context.emit('submit', props.name)
    }

    return {
      valid,
    }
  },
  render() {
    return (
      <form
        action={this.action}
        autocomplete={this.autocomplete}
        class={form.bem()}
        enctype={this.enctype}
        method={this.method}
        name={this.name}
        target={this.target}
      >
        {typeof this.$slots.default === 'function' && this.$slots.default()}
      </form>
    )
  },
})
