import { defineComponent, PropType } from 'vue'
import type { InputValue } from '@/types/input'
import type { SelectOption } from '@/types/select'
import bem from '@/utils/bem'
import SelectMultiple from './select-multiple.vue'
import SelectSingle from './select-single.vue'

export default defineComponent({
  name: bem('select'),
  components: {
    SelectMultiple,
    SelectSingle
  },
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
    placeholder: {
      default: '请选择……',
      required: false,
      type: String
    },
    teleport: {
      default: 'body',
      required: false,
      type: String
    },
  },
  data: () => ({
    value: undefined,
  }),
  computed: {
    target() {
      return this.multiple ? 'select-multiple' :`select-single`
    },
  },
  watch: {
    multiple: 'switchMode'
  },
  methods: {
    onChange(value: InputValue) {
      this.$emit('update:modelValue', value)
    },
    switchMode() {
      this.$emit('update:modelValue', this.multiple ? [] : undefined)
    }
  }
})