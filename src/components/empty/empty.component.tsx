import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import style from './empty.module.scss'

const name = bem('empty')

export default defineComponent({
  name,
  render() {
    return (
      <span class={style[name]}></span>
    )
  }
})
