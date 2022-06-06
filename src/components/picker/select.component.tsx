import { computed, defineComponent, defineEmits, withDefaults } from "vue";
import type { ComputedRef } from "vue";
import bem from '@/utils/bem'
import SelectMultiple from './select-multiple.component'
import SelectSingle from './select-single.component'
import { SelectEmits, SelectProps, SelectValue } from './select.interface'

const name = bem('select')

export default defineComponent({
  name,
  components: {
    SelectMultiple,
    SelectSingle
  },
  setup() {
    const emits = defineEmits<SelectEmits>()
    const props = withDefaults(defineProps<SelectProps>(), {
      multiple: false,
      placeholder: '请选择……',
      teleport: 'body'
    })
    const target: ComputedRef<string> = computed(() => props.multiple ? 'select-multiple' : `select-single`)

    const onChange = (value: SelectValue): void => {
      emits('update:modelValue', value)
    }
    const switchMode = (): void => {
      emits('update:modelValue', props.multiple ? [] : undefined)
    }

    return {
      ...props,
      target
    }
  },
  render() {
    return (
      <component
        vModel={this.modelValue}
        is={this.target}
        options={this.options}
        placeholder={this.placeholder}
        teleport={this.teleport}
        onChange={this.onChange}
      />
    )
  }
})