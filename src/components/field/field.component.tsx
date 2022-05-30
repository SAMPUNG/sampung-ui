import { defineComponent, defineEmits, defineProps, inject, ref } from 'vue'
import type { Ref } from 'vue'
import bem from '@/utils/bem'
import { model } from '@/components/form/form.provide'
import type { FieldEmits, FieldProps } from './field.interface'
import style from './field.module.scss'

const name = bem('field')

export default defineComponent({
  name,
  render() {
    return (
      <fieldset class={style[name]}>
      <legend>{this.legend}</legend>
      <label for={this.name}>{this.legend}</label>
      <slot />
    </fieldset>
    )
  },
  setup() {
    const el = inject(model)
    const emit = defineEmits<FieldEmits>()
    const empty: Ref<boolean> = ref(false)
    const pending: Ref<boolean> = ref(true)
    const props = defineProps<FieldProps>()
    const required: Ref<boolean> = ref(false)
    const valid: Ref<boolean> = ref(true)
    
    const onBlur = (): void => {
      emit('blur', props.name)
    }
    const onFocus = (): void => {
      emit('foucs', props.name)
    }
    
    const updatePending = (): boolean => {
      return pending.value
    }

    return {
      el,
      empty,
      ...props,
      required,
      valid
    }
  }
})
