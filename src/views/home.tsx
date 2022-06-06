import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import bem from '@/utils/bem'

const name = bem('home')

const defaultTabs = [
  {
    legend: 'Tab A',
    name: 'a',
  },
  {
    legend: 'Tab B',
    name: 'b',
  },
  {
    legend: 'Tab C',
    name: 'c',
  }
]

export default defineComponent({
  name,
  setup() {
    const options = ref(defaultTabs)
    const selected: Ref<string> = ref(defaultTabs[1].name)

    const onChange = (value: string): void => {
      console.log('home on change :>:> ', value, selected.value)
    }

    return {
      options,
      selected,
      onChange
    }
  },
  render() {
    return (
      <div class="home">
        <sam-tabs vModel={this.selected} options={this.options} onChange={this.onChange} />
        <span>hello, world</span>
        <br />
        <span>{this.selected}</span>
      </div>
    )
  }
})
