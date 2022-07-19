import { includesBaseProps } from "@/utils"

export default {
  ...includesBaseProps(),

  modelValue: {
    default: false,
    required: true,
    type: Boolean,
  },
  withFooter: {
    default: false,
    required: false,
    type: Boolean,
  },
}
