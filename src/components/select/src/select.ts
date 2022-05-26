import { defineComponent, PropType } from 'vue'
import type { InputValue } from '@/types/input'
import type { SelectOption } from '@/types/select'
import bem from '@/utils/bem'
import { resolveUnassigned } from '@/utils/data'

export default defineComponent({
  name: bem('select'),
  emits: ['update:modelValue'],
  props: {
    multiple: {
      default: false,
      required: false,
      type: Boolean
    },
    modelValue: {
      default: undefined,
      required: true,
      // tyep: [string, number, boolean, Array<unknown>, Record<string, unknown>]
      // type: [String, Number, Boolean, Array, Object]
    },
    options: {
      default: () => [],
      required: false,
      type: Array as PropType<SelectOption[]>
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
      return bem('select', this.multiple ? 'multiple' : '')
    },
    selection() {
      return bem('selection', this.dropdown ? 'dropdown' : '')
    },
  },
  watch: {
    multiple: 'switchMode'
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
      if (this.multiple) {
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
      } else {
        this.results = [label]
        this.$emit('update:modelValue', value)
      }
    },
    switchMode() {
      let source = this.modelValue
      let target = undefined
      const unassigned = resolveUnassigned(source)
      console.log(this.multiple, source)
      if (this.multiple) {
        target = unassigned ? [source] : []
      } else {
        target = unassigned ? source.pop() : undefined
      }
      console.log(this.multiple, target)
      this.$emit('update:modelValue', target)
    }
  }
})