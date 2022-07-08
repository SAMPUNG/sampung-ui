import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import DemoAffix from '@/components/affix/affix.component'

const bem = createNamespace('affix-demo')

export default defineComponent({
  name: bem(),
  components: { DemoAffix },
  setup() {
    return () => (
      <div class={bem()}>
        <demo-affix />
      </div>
    )
  },
})
