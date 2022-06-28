import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoField from '@/components/field/field.component'
import DemoInput from '@/components/input/input.component'
import DemoForm from './form.component'

const bem = createNamespace('form-demo')

export default defineComponent({
  name: bem(),
  components: { DemoField, DemoForm, DemoInput },
  setup() {
    const value = ref(undefined)
    return {
      value,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <demo-form autocomplete="off" name="demo">
          <demo-field legend="Legend" name="name">
            <demo-input
              vModel={this.value}
              name="name-demo"
              placeholder="Please input something……"
            />
          </demo-field>
        </demo-form>
      </div>
    )
  },
})
