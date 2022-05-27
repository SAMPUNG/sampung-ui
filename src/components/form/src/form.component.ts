import { defineEmits, defineProps, provide, ref } from 'vue'
import type { Ref } from 'vue'
import { model } from '@/components/form/src/form.provide'
import type { FormEmits, FormProps } from './form.interface'

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
