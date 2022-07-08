import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import DemoCalendar from '@/components/calendar/calendar.component'

const bem = createNamespace('calendar-demo')

export default defineComponent({
  name: bem(),
  components: { DemoCalendar },
  setup() {
    return () => (
      <div class={bem()}>
        <demo-calendar />
      </div>
    )
  },
})
