import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import '@/styles/demo.scss'

const bem = createNamespace('marquee-demo')

export default defineComponent({
  name: bem(),
  render() {
    return (
      <div class={bem()}>
        <div class="playground-demo">
          <sam-marquee size={this.size} />
        </div>
        <sam-form name="controls">
          <sam-fieldset legend="属性(attrs)">
            <sam-field legend="尺寸(size)" name="size">
              <sam-input
                v-model="size"
                max={200}
                min={12}
                name="size"
                step={1}
                type="number"
              />
            </sam-field>
          </sam-fieldset>
        </sam-form>
      </div>
    )
  },
  data: () => ({
    size: 25 as number,
  }),
})
