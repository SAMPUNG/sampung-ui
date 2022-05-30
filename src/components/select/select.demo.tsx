import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import '@/styles/demo.scss'

export default defineComponent({
  name: bem('demo-marquee'),
  render() {
    return (
      <div class="demo">
        <div class="demo-playground">
          <sam-select
            vModel={this.value}
            options={this.options}
            placeholder={this.placeholder}
          />
        </div>
        <sam-form name="controls">
          <sam-fieldset legend="属性(attrs)">
            <sam-field legend="占位符(placeholder)" name="placeholder">
              <sam-input
                v-model={this.placeholder}
                name="placeholder"
                type="text"
              />
            </sam-field>
          </sam-fieldset>
        </sam-form>
      </div>
    )
  },
  data: () => ({
    options: [
      {
        label: 'AA',
        value: 'aa'
      },
      {
        label: 'BB',
        value: 'bb'
      },
      {
        label: 'CC',
        value: 'cc'
      }
    ],
    placeholder: '请选择……',
    value: undefined
  })
})