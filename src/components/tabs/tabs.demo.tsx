import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import Namespace from '@/utils/namespace'
import DemoTabs from './tabs.component'

const demo = new Namespace('demo-tabs')

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
  },
]

export default defineComponent({
  name: demo.name,
  components: { DemoTabs },
  setup() {
    const options = ref(defaultTabs)
    const selected: Ref<string> = ref(defaultTabs[1].name)

    const onChange = (value: string): void => {
      console.log('home on change :>:> ', value, selected.value)
    }

    return {
      options,
      selected,
      onChange,
    }
  },
  render() {
    return (
      <div class="demo">
        <demo-tabs
          vModel={this.selected}
          options={this.options}
          onChange={this.onChange}
        />
        <br />
        <span>{this.selected}</span>
      </div>
    )
  },
})
