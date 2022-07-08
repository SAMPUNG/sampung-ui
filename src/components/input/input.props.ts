import { validateRegular } from '@/utils/'

export default {
  autocomplete: {
    default: 'off',
    required: false,
    type: String,
  },
  inline: {
    default: false,
    required: false,
    type: Boolean,
  },
  max: {
    default: undefined,
    required: false,
    type: Number,
  },
  min: {
    default: undefined,
    required: false,
    type: Number,
  },
  modelValue: {
    default: undefined,
    required: true,
    // type: [String, Number, Boolean, undefined] as PropType<InputValue>,
    validator: validateRegular,
  },
  name: {
    default: '',
    required: false,
    type: String,
  },
  placeholder: {
    default: '',
    required: false,
    type: String,
  },
  step: {
    default: undefined,
    required: false,
    type: Number,
  },
  type: {
    default: 'text',
    required: false,
    type: String,
  },
}
