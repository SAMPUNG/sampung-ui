import { defineComponent, ref } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('dialog-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const visible = ref<boolean>(false)

    return () => (
      <div class={bem()}>
        <div class={bem('controls')}>
          <sam-button
            legend="열다 대화"
            onClick={() => {
              visible.value = true
            }}
          />
        </div>
        <div class={bem('display')}>
          <sam-dialog
            v-model={visible.value}
            icon="flare"
            legend="대화 타이틀"
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
              <span>전 세계 여러분 안녕하세요</span>
            </div>
          </sam-dialog>
        </div>
      </div>
    )
  },
})
