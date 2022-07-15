import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import '@/styles/demo.scss'

const bem = createNamespace('select-demo')

export default defineComponent({
  name: bem(),
  data: () => ({
    options: [
      {
        label: 'AA',
        value: 'aa',
      },
      {
        label: 'BB',
        value: 'bb',
      },
      {
        label: 'CC',
        value: 'cc',
      },
    ],
    placeholder: '请选择……',
    value: undefined,
  }),
  render() {
    return () => (
      <div class="demo">
        <div class="playground-demo">
          <sam-select
            v-model={this.value}
            legend="Placeholder"
            name="placeholder"
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
})
