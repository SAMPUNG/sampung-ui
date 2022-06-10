import { defineComponent, ref } from 'vue'
import Namespace from '@/utils/namespace'
import DemoField from '@/components/field/field.component'
import DemoInput from '@/components/input/input.component'
import DemoForm from './form.component'

const demo = new Namespace('demo-form')

export default defineComponent({
  name: demo.bem(),
  components: { DemoField, DemoForm, DemoInput },
  setup() {
    const value = ref(undefined)
    return {
      value,
    }
  },
  render() {
    return (
      <div class={demo.bem()}>
        <demo-form autocomplete="off" name="demo">
          <demo-field legend="Legend" name="name">
            <demo-input vModel={this.value} name="name" />
          </demo-field>
        </demo-form>
      </div>
    )
  },
})
