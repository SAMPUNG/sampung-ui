import { computed, defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import './marquee.scss'

const bem = createNamespace('marquee')

export default defineComponent({
  name: bem(),
  props: {
    size: {
      default: 14,
      required: false,
      type: Number,
    },
  },
  setup(props) {
    const style = computed(() => ({
      height: `${props.size}px`,
      width: `${props.size * 2}px`,
    }))

    return () => <span class={bem()} style={style.value}></span>
  },
})
