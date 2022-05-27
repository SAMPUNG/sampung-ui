import { defineEmits, defineProps, inject, ref } from 'vue'
import type { Ref } from 'vue'
import { model } from '@/components/form/src/form.provide'
import type { FieldEmits, FieldProps } from './field.interface'


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