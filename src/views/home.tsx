import { defineComponent } from 'vue'
import bem from '@/utils/bem'

const name = bem('home')

export default defineComponent({
  name,
  render() {
    return (
      <div class="home">
        <span>hello, world</span>
      </div>
    )
  }
})
