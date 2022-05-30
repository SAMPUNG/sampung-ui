import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import '@/styles/demo.scss'

export default defineComponent({
  name: bem('demo-marquee'),
  render() {
    return (
      <div class="demo">
        <div class="demo-playground">
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
    size: 25 as number
  })
})