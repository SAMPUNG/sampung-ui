import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import style from './mosaic.module.scss'

const name = bem('mosaic')

export default defineComponent({
  name,
  render() {
    return (
      <div class={style[name]}>hello, world</div>
    )
  }
})