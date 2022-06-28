import { defineComponent } from 'vue'
import { Style } from '@/types/component'
import createNamespace from '@/utils/namespace'
import style from './marquee.module.scss'

const bem = createNamespace('marquee')

export default defineComponent({
  name: bem(),
  setup() {},
  render() {
    return <span class={style[bem()]} style={this.style}></span>
  },
  props: {
    size: {
      default: 14,
      required: false,
      type: Number,
    },
  },
  computed: {
    status() {
      return bem('marquee')
    },
    style(): Style {
      return {
        height: `${this.size}px`,
        width: `${this.size * 2}px`,
      }
    },
  },
})
