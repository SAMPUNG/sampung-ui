import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import Empty from './empty.component'

const name = bem('empty-demo')

export default defineComponent({
  name,
  components: { Empty },
  render() {
    return 
    <div class="demo">
      <Empty />
    </div>
  },
})
