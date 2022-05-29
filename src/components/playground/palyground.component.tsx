import { defineComponent, defineEmits, defineProps, ref } from 'vue'
import type { Ref } from 'vue'
import bem from '@/utils/bem'
import style from './empty.module.scss'
import type { PlaygroundControls, PlaygroundEmits, PlaygroundProps, PlaygroundSource } from './playground.interface'

import Field from '@/components/field/src/field.vue'
import Form from '@/components/from/src/form.vue'
import Input from '@/components/input/src/input.vue'

import * as MOCKING from './playground.mocking'

const name = bem('playground')

export default defineComponent({
  name,
  components: { Form },
  setup() {
    const controls: Ref<PlaygroundControls> = ref(MOCKING.controls)
    const emits = defineEmits<PlaygroundEmits>()
    const props = defineProps<PlaygroundProps>()
    const source: Ref<PlaygroundSource> = ref(MOCKING.source)
    const value: Ref<unknown> = ref(MOCKING.value)

    return {
      controls,
      ...emits,
      ...props,
      source,
      value
    }
  },
  render() {
    return (
      <div class={style[name]}>
        <div class='demo-playground'>
          <component v-model={this.value} v-bind={this.source} is={this.target} />
        </div>
        <Form class="demo-controls" name="controls">
          {
            this.controls.map((item, index) =>
              <Field
                key={index}
                label={item.label}
                name={item.name}
              >
                <Input
                  v-model={this.source[item.name]}
                  label={item.label}
                  type={item.type}
                />
              </Field>
            )
          }
        </Form>
      </div >
    )
  }
})
