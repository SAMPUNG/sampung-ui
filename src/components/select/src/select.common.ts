import { defineEmits, defineProps, ref } from 'vue'
import type { Ref } from 'vue'
import type { InputValue } from '@/types/input'
import type { SelectOption } from '@/types/select'

const props = defineProps<{
  multiple?: boolean
  name?: string
  options?: SelectOption[]
}>()

const emit = defineEmits<{
  (event: 'blur', name?: string): void
  (event: 'foucs', name?: string): void
  (event: 'select', value: unknown, label: string, name?: string): void
}>()

const dropdown: Ref<boolean> = ref(false)
const results: Ref<Array<string>> = ref([])

const onBlur = (): void => {
  dropdown.value = false
  emit('blur', props.name)
}

const onFocus = (): void => {
  dropdown.value = true
  emit('foucs', props.name)
}

const onSelect = (value: InputValue, label: string): void => {
  updateResults(label)
  emit('select', value, label, props.name)
}

const updateResults = (label: string): void => {
  const index: number = results.value.indexOf(label)
  if (index === -1) {
    results.value.push(label)
  } else {
    results.value.splice(index, 1)
  }
}

type SelectOptions = Array<SelectOption>