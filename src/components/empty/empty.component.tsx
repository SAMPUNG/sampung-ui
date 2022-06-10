import { defineComponent } from 'vue'
import Namespace from '@/utils/namespace'
import style from './empty.module.scss'

const empty = new Namespace('empty')

export default defineComponent({
  name: empty.name,
  render() {
    return <span class={empty.bem()}></span>
  },
})
