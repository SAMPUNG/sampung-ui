import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoIcon from './icon.component'

const bem = createNamespace('empty-demo')

export default defineComponent({
  name: bem(),
  components: { DemoIcon },
  render() {
    return (
      <div class={bem()}>
        <demo-icon name="fa" />
      </div>
    )
  },
})
