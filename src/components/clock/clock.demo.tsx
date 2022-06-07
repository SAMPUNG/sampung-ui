import { defineComponent } from 'vue'
import Namespace from '@/utils/namespace'
import DemoClock from './clock.component'

const demo = new Namespace('demo-clock')

export default defineComponent({
  name: demo.bem(),
  components: { DemoClock },
  render() {
    return (
      <div class={demo.bem()}>
        <demo-clock />
      </div>
    )
  },
})
