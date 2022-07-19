import { defineComponent, defineEmits, defineProps, ref } from 'vue'
import type { Ref } from 'vue'
import { createNamespace } from '@/utils'
import style from './playground.module.scss'
import type {
  PlaygroundControls,
  PlaygroundEmits,
  PlaygroundProps,
  PlaygroundSource,
} from './playground.interface'

import pgField from '@/components/field/field.component'
import pgForm from '@/components/form/form.component'
import pgInput from '@/components/input/input.component'

const bem = createNamespace('playground')

export default defineComponent({
  name: bem(),
  components: {
    pgField,
    pgForm,
    pgInput,
  },
  setup() {
    const controls: Ref<PlaygroundControls> = ref([])
    const emits = defineEmits<PlaygroundEmits>()
    const props = defineProps<PlaygroundProps>()
    const source: Ref<PlaygroundSource> = ref({})
    const value: Ref<unknown> = ref(undefined)

    return {
      controls,
      ...emits,
      ...props,
      source,
      value,
    }
  },
  render() {
    return () => (
      <div class={style[bem()]}>
        <div class="playground-demo">
          <component
            v-model={this.value}
            v-bind={this.source}
            is={this.target}
          />
        </div>
        <pg-form
          class="controls-demo"
          name="controls"
        >
          {this.controls.map((item, index) => (
            <pg-field
              key={index}
              legend={item.legend}
              name={item.name}
            >
              <pg-input
                v-model={this.source[item.name]}
                type={item.type}
              />
            </pg-field>
          ))}
        </pg-form>
      </div>
    )
  },
})
