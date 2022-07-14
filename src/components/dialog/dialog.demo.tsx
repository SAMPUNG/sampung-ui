import { defineComponent, ref } from 'vue'

import createNamespace from '@/utils/namespace'

const bem = createNamespace('dialog-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const visible = ref<boolean>(false)

    return () => (
      <div class={bem()}>
        <div class={bem('controls')}>
          <sam-button
            legend="Open Dialog"
            onClick={() => {
              visible.value = true
            }}
          />
        </div>
        <div class={bem('display')}>
          <sam-dialog
            v-model={visible.value}
            icon="flare"
            legend="Dialog Title"
            with-close={true}
            with-footer={true}
            with-header={true}
          >
            <div
              style={{
                height: '400px',
                lineHeight: '400px',
                textAlign: 'center',
                width: '600px',
              }}
            >
              hello, world
            </div>
          </sam-dialog>
        </div>
      </div>
    )
  },
})
