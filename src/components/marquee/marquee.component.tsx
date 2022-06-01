import { defineComponent } from 'vue'
import { Style } from '@/types/component'
import bem from '@/utils/bem'
import style from './marquee.module.scss'

const name = bem('marquee')

export default defineComponent({
  name,
  setup() {
    
  },
  render() {
    return (
      <span class={style[name]} style={this.style}></span>
    )
  },
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
