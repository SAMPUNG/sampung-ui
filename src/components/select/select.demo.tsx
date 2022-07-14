import { defineComponent, ref } from 'vue'

import createNamespace from '@/utils/namespace'
import type { SelectValue } from '@/components/select/select.interface'

const bem = createNamespace('select-demo')

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
    const selected = ref<SelectValue>('')

    return () => (
      <div class={bem()}>
        <sam-select
          v-model={selected.value}
          legend="Select"
          name="select"
          options={defaultOptions}
          placeholder="Please select one option"
        />
      </div>
    )
  },
})
