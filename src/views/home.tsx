import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import bem from '@/utils/bem'

const name = bem('home')

const defaultTabs = [
  {
    name: 'a',
    title: 'Tab A'
  },
  {
    name: 'b',
    title: 'Tab B'
  },
  {
    name: 'c',
    title: 'Tab C'
  }
]

export default defineComponent({
  name,
  setup() {
    const options = ref(defaultTabs)
    const selected: Ref<string> = ref(defaultTabs[0].name)

    return {
      options,
      selected
    }
  },
  render() {
    return (
      <div class="home">
        <span>hello, world</span>
        <sam-tabs vModel={this.selected} options={this.options} />
      </div>
    )
  }
})
