import { defineComponent } from 'vue'
import Namespace from '@/utils/namespace'
import DemoEmpty from './empty.component'

const demo = new Namespace('demo-empty')

export default defineComponent({
  name: demo.bem(),
  components: { DemoEmpty },
  render() {
    return (
      <div class={demo.bem()}>
        <demo-empty />
      </div>
    )
  },
})
