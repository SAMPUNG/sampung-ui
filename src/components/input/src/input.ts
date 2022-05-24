import { defineComponent, PropType } from 'vue'
import { InputType, InputValue } from '@/types/input'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('input'),
  props: {
    label: {
      default: '',
      required: false,
      type: String
    },
    modelValue: {
      default: undefined,
      required: true,
      type: [String, Number, Boolean] as PropType<InputType>
    },
    name: {
      default: '',
      required: false,
      type: String
    },
    placeholder: {
      default: '请输入……',
      required: false,
      type: String
    },
    type: {
      default: 'text',
      required: false,
      type: String
    },
  },
  data: () => ({
    dropdown: false as boolean
  }),
  computed: {
    status() {
      return bem('select', this.dropdown? 'dropdown' : '')
    },
  },
  methods: {
    inputHandler(event: Event): void {
      const target = event.target as HTMLInputElement
      const value: InputValue = target.value
      this.$emit('update:modelValue', value)
    }
  }
})