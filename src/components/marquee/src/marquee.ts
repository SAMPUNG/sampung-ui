import { defineComponent } from 'vue'
import { Style } from '@/types/component'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('marquee'),
  props: {
    size: {
      default: 14,
      required: false,
      type: Number
    }
  },
  computed: {
    status() {
      return bem('marquee')
    },
    style(): Style {
      return {
        height: `${this.size}px`,
        width: `${this.size * 2}px`
      }
    }
  }
})
