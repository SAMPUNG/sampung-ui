import { defineComponent } from 'vue'
import Namespace from '@/utils/namespace'
import DemoCalendar from './calendar.component'

const calendar = new Namespace('demo-calendar')

export default defineComponent({
  name: calendar.bem(),
  components: { DemoCalendar },
  render() {
    return (
      <div class={calendar.bem()}>
        <demo-calendar />
      </div>
    )
  },
})
