import { defineComponent, ref } from 'vue'

import createNamespace from '@/utils/namespace'

const bem = createNamespace('accordion-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const expaned = ref<boolean>(false)
    return () => (
      <div class={bem()}>
        <sam-accordion
          icon="api"
          legend="Accordion"
          vModel={expaned.value}
          with-footer
        >
          <div
            class={bem('content')}
            style={{
              height: '400px',
              lineHeight: '400px',
              textAlign: 'center',
              width: '600px',
            }}
          >
            hello, world
          </div>
        </sam-accordion>
      </div>
    )
  },
})
