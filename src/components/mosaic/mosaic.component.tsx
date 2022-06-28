import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import style from './mosaic.module.scss'

const bem = createNamespace('mosaic')

export default defineComponent({
  name: bem(),
  render() {
    return <div class={style[bem()]}>hello, world</div>
  },
})
