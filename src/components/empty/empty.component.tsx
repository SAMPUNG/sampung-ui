import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import style from './empty.module.scss'

const bem = createNamespace('empty')

export default defineComponent({
  name: bem(),
  render() {
    return <span class={bem()}></span>
  },
})
