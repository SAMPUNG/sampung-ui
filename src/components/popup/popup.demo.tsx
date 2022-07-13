import { defineComponent, ref } from 'vue'

import createNamespace from '@/utils/namespace'
import popupBounds from '@/components/popup/popup.bounds'
import type { PopupPosition } from '@/components/popup/popup.interface'

const bem = createNamespace('popup-demo')
const options = {
  inset: [
    {
      legend: 'False',
      name: false,
    },
    {
      legend: 'True',
      name: true,
    },
  ],
  position: popupBounds.map(({ name }) => ({ legend: name, name })),
}

export default defineComponent({
  name: bem(),
  setup() {
    const inset = ref<boolean>(false)
    const position = ref<PopupPosition>('center')
    const slots = {
      default: () => (
        <div
          style={{
            height: '150px',
            lineHeight: '150px',
            textAlign: 'center',
            width: '300px',
          }}
        >
          hello, world
        </div>
      ),
      entry: () => (
        <sam-button
          class={bem('entry')}
          id="popup-entry"
          legend="Entry by Slot"
          onClick={() => {
            visible.value = true
          }}
        />
      ),
    }
    const visible = ref<boolean>(false)

    return () => (
      <div class={bem()}>
        <div class={bem('display')}>
          <sam-select v-model={inset.value} options={options.inset} />
          <hr class={bem('line')} />
          <sam-select v-model={position.value} options={options.position} />
          <hr class={bem('line')} />
          <div style="height: 300px" />
          <sam-popup
            v-model={visible.value}
            container="#popup-entry"
            inset={inset.value}
            position={position.value}
            v-slots={slots}
          />
        </div>
      </div>
    )
  },
})
