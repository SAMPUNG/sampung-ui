import { defineComponent, defineEmits, defineProps } from 'vue'
import bem from '@/utils/bem'
import Field from '../field/field.component'
import Fieldset from '../fieldset/fieldset.component'
import Form from '../form/form.component'
import Input from './input.component'

const name = bem('input')

export default defineComponent({
  name,
  components: {
    Field,
    Fieldset,
    Form,
    Input
  },
  setup() {

    return {
    }
  },
  render() {
    return (
      <Form>
        <Fieldset>
          <Field>
            <Input />
          </Field>
        </Fieldset>
      </Form>
    )
  },
})
