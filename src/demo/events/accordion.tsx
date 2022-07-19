import { defineComponent, ref } from 'vue'

import { HELLO_WORLD } from '@/i18n'

import { createNamespace, resolveI18n } from '@/utils'

const bem = createNamespace('accordion-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const expaned = ref<boolean>(false)
    return () => (
      <div class={bem()}>
        <sam-accordion
          v-model={expaned.value}
          icon="api"
          legend="Accordion"
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
            <span {...resolveI18n(HELLO_WORLD)}/>
          </div>
        </sam-accordion>
      </div>
    )
  },
})
