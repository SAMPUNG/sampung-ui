import { defineComponent, PropType } from 'vue'
import { InputType, InputValue } from '@/types/input'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('input'),
  props: {
    inline: {
      default: false,
      required: false,
      type: Boolean
    },
    max: {
      default: undefined,
      required: false,
      type: Number
    },
    min: {
      default: undefined,
      required: false,
      type: Number
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
    step: {
      default: undefined,
      required: false,
      type: Number
    },
    type: {
      default: 'text',
      required: false,
      type: String
    },
  },
  computed: {
    status() {
      return bem('input', this.inline ? 'inline' : '')
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