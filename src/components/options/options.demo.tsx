import { defineComponent, ref } from 'vue'

import createNamespace from '@/utils/namespace'
import type { OptionsPicked } from '@/components/options/options.interface'
import type { Direction } from '@/types/component'

const bem = createNamespace('options-demo')

const directionOptions = [
  {
    legend: 'Horizontal',
    name: 'horizontal',
  },
  {
    legend: 'Vertical',
    name: 'vertical',
  },
]
const multipleOptions = [
  {
    legend: 'False',
    name: false,
  },
  {
    legend: 'True',
    name: true,
  },
]

const defaultOptions = [
  { legend: 'Option A', name: 'a' },
  { legend: 'Option B', name: 'b' },
  { legend: 'Option C', name: 'c' },
  { legend: 'Option D', name: 'd' },
  { legend: 'Option E', name: 'e' },
  { legend: 'Option F', name: 'f' },
  { legend: 'Option G', name: 'g' },
  { legend: 'Option H', name: 'h' },
  { legend: 'Option I', name: 'i' },
  { legend: 'Option J', name: 'j' },
  { legend: 'Option K', name: 'k' },
  { legend: 'Option L', name: 'l' },
  { legend: 'Option M', name: 'm' },
  { legend: 'Option N', name: 'n' },
  { legend: 'Option O', name: 'o' },
  { legend: 'Option P', name: 'p' },
  { legend: 'Option Q', name: 'q' },
  { legend: 'Option R', name: 'r' },
  { legend: 'Option S', name: 's' },
  { legend: 'Option T', name: 't' },
  { legend: 'Option U', name: 'u' },
  { legend: 'Option V', name: 'v' },
  { legend: 'Option W', name: 'w' },
  { legend: 'Option X', name: 'x' },
  { legend: 'Option Y', name: 'y' },
  { legend: 'Option Z', name: 'z' },
]

export default defineComponent({
  name: bem(),
  setup() {
    const direction = ref<Direction>('horizontal')
    const multiple = ref<boolean>(false)
    const selected = ref<OptionsPicked>([defaultOptions[0].name])

    return () => (
      <div class={bem()}>
        <span>Selected: {selected.value.join(',')}</span>
        <hr class={bem('line')} />
        <sam-select v-model={multiple.value} options={multipleOptions} />
        <hr class={bem('line')} />
        <sam-select v-model={direction.value} options={directionOptions} />
        <hr class={bem('line')} />
        <sam-options
          v-model={selected.value}
          direction={direction.value}
          multiple={multiple.value}
          options={defaultOptions}
        />
      </div>
    )
  },
})
