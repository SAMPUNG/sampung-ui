import { defineComponent, PropType } from 'vue'
import type { InputValue } from '@/types/input'
import type { SelectOption } from '@/types/select'
import bem from '@/utils/bem'

export const Select = defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      default: undefined,
      required: true,
      type: Array
    },
    options: {
      default: () => [],
      required: false,
      type: Array as PropType<SelectOption[]>
    },
    placeholder: {
      default: '请选择……',
      required: false,
      type: String
    },
  },
  data: () => ({
    dropdown: false,
    offset: {
      bottom: 'unset',
      left: 'unset',
      right: 'unset',
      top: 'unset'
    },
    results: [] as string[],
    teleport: 'body'
  }),
  computed: {
    status() {
      return bem('select', this.dropdown ? 'dropdown' : '')
    },
    selection() {
      return bem('selection-single', this.dropdown ? 'dropdown' : '')
    },
  },
  methods: {
    onChange(event: Event): void {
      const target = event.target as HTMLInputElement
      const value: InputValue = target.value
      this.$emit('update:modelValue', value)
    },
    onFocus(event: Event) {
      const target = event.target as HTMLDivElement
      this.dropdown = true
      this.offset.left = target.offsetLeft + 'px'
      this.offset.top = target.offsetTop  + target.offsetHeight + 'px'
    },
    onSelect(value: InputValue, label: string): void {
      this.dropdown = false
      const modelValue = (this.modelValue || []) as Array<string | number | boolean>
      const index = modelValue?.indexOf(value)
      const values = modelValue?.slice()
      if (index === -1) {
        values.push(value)
        this.results.push(label)
      } else {
        values.splice(index, 1)
        this.results.splice(index, 1)
      }
      this.$emit('update:modelValue', values)
    },
  }
})