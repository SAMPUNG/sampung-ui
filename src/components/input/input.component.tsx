import { defineComponent, defineEmits, defineProps } from 'vue'
import { InputValue } from '@/types/input'
import bem from '@/utils/bem'
import type { InputEmits, InputProps } from './input.interface'
import style from './input.module.scss'

const name = bem('input')

export default defineComponent({
  name,
  setup() {
    const emits = defineEmits<InputEmits>()
    const props = defineProps<InputProps>()

    const inputHandler = (event: Event): void => {
      const target = event.target as HTMLInputElement
      const value: InputValue = target.value
      emits('update:modelValue', value, props.name)
    }

    return {
      inputHandler,
      ...props
    }
  },
  render() {
    return (
      <input
        class={style[name]}
        max={this.max}
        min={this.min}
        name={this.name}
        placeholder={this.placeholder}
        step={this.step}
        type={this.type}
        value={this.modelValue}
        onInput={this.inputHandler}
      />
    )
  },
})
