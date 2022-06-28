import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoCalendar from './calendar.component'

const bem = createNamespace('calendar-demo')

export default defineComponent({
  name: bem(),
  components: { DemoCalendar },
  render() {
    return (
      <div class={bem()}>
        <demo-calendar />
      </div>
    )
  },
})
