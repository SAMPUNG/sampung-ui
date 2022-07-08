import { defineComponent, ref } from 'vue'

import createNamespace from '@/utils/namespace'

import DemoDropdown from '@/components/dropdown/dropdown.component'
import DemoField from '@/components/field/field.component'
import DemoInput from '@/components/input/input.component'
import DemoForm from '@/components/form/form.component'

const bem = createNamespace('dropdown-demo')

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
  components: { DemoDropdown, DemoField, DemoForm, DemoInput },
  setup() {
    const maxHeight = ref<number>(325)
    const selected = ref<string>(defaultOptions[1].name)

    return () => (
      <div class={bem()}>
        <div class={bem('controls')}>
          <demo-form autocomplete="off" name="demo">
            <demo-field legend="max-height" name="maxHeight">
              <demo-input
                vModel={maxHeight.value}
                name="maxHeight"
                placeholder="Please input max height of dropdown"
                type="number"
              />
            </demo-field>
          </demo-form>
        </div>
        <div class={bem('display')}>
          <demo-dropdown
            legend="Dropdown"
            max-height={maxHeight.value}
            vModel={selected.value}
            options={defaultOptions}
          />
        </div>
      </div>
    )
  },
})
