import { defineComponent, defineEmits, defineProps, provide, ref } from 'vue'
import type { Ref } from 'vue'
import bem from '@/utils/bem'
import type { FormEmits, FormProps } from './form.interface'
import { model } from './form.provide'
import style from './empty.module.scss'

const name = bem('marquee')

export default defineComponent({
  name,
  setup() {
    const el = ref<HTMLInputElement | null>(null)
    const emit = defineEmits<FormEmits>()
    const props = defineProps<FormProps>()
    const valid: Ref<boolean> = ref(false)

    provide(model, el.value)

    const onReset = (): void => {
      emit('reset', props.name)
    }
    const onSubmit = (): void => {
      emit('submit', props.name)
    }

    return {
      ...emit,
      ...props,
      valid
    }
  },
  render() {
    return (
      <form
        action={this.action}
        autocomplete={this.autocomplete}
        class={style[name]}
        enctype={this.enctype}
        method={this.method}
        name={this.name}
        target={this.target}
      >
        <slot />
      </form>
    )
  }
})