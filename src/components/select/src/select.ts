import { defineComponent, PropType } from 'vue'

import type { InputValue } from '@/types/input'
import type { SelectOption } from '@/types/select'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('select'),
  model: {
    event: 'change'
  },
  props: {
    dropdown: {
      default: false,
      required: false,
      type: Boolean
    },
    multiple: {
      default: false,
      required: false,
      type: Boolean
    },
    modelValue: {
      default: undefined,
      required: true,
      // tyep: [string, number, boolean, Array<unknown>, Record<string, unknown>]
      type: [String, Number, Boolean, Array, Object]
    },
    options: {
      default: () => [],
      required: false,
      type: Array as PropType<SelectOption[]>
    },
  },
  data: () => ({
    results: [] as string[]
  }),
  computed: {
    status() {
      return bem('select', this.dropdown ? 'dropdown' : '')
    },
    teleport() {
      return bem('teleport', this.dropdown ? 'dropdown' : '')
    },
  },
  methods: {
    changeHandler(value: InputValue): void {
      this.$emit('update:modelValue', value)
    },
    selectHandler(value: InputValue, label: string): void {
      if (this.multiple) {
        const modelValue = this.modelValue as Array<string | number | boolean>
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
    }
  }
})