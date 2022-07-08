import { computed, defineComponent, defineEmits, withDefaults } from 'vue'
import type { ComputedRef } from 'vue'
import createNamespace from '@/utils/namespace'
import SelectMultiple from './select-multiple.component'
import SelectSingle from './select-single.component'
import { SelectEmits, SelectProps, SelectValue } from './select.interface'

const bem = createNamespace('select')

export default defineComponent({
  name: bem(),
  components: {
    SelectMultiple,
    SelectSingle,
  },
  setup(props) {
    const emits = defineEmits<SelectEmits>()
    const props = withDefaults(defineProps<SelectProps>(), {
      multiple: false,
      placeholder: '请选择……',
      teleport: 'body',
    })
    const target: ComputedRef<string> = computed(() =>
      props.multiple ? 'select-multiple' : `select-single`
    )

    const onChange = (value: SelectValue): void => {
      emits('update:modelValue', value)
    }
    const switchMode = (): void => {
      emits('update:modelValue', props.multiple ? [] : undefined)
    }

    return () => (
      <component
        vModel={props.modelValue}
        is={props.target}
        options={props.options}
        placeholder={props.placeholder}
        teleport={props.teleport}
        onChange={onChange}
      />
    )
  },
})
