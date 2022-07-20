import { defineComponent, ref } from 'vue'

import type { PopupPosition } from '@/components/popup/popup.interface'
import { BOOLEAN, POPUP_POSITION } from '@/configs'
import { HELLO_WORLD } from '@/i18n'
import { createNamespace, resolveI18n } from '@/utils'

const bem = createNamespace('popup-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const inline = ref<boolean>(true)
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
          <span {...resolveI18n(HELLO_WORLD)} />
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
          <sam-select
            v-model={inline.value}
            legend="Inline"
            name="inline"
            options={BOOLEAN}
          />
          <sam-select
            v-model={inset.value}
            legend="Inset"
            name="inset"
            options={BOOLEAN}
          />
          <sam-select
            v-model={position.value}
            legend="Position"
            name="position"
            options={POPUP_POSITION}
          />
          <div style="height: 300px" />
          <sam-popup
            v-model={visible.value}
            container="#popup-entry"
            inline={inline.value}
            inset={inset.value}
            position={position.value}
            v-slots={slots}
          />
        </div>
      </div>
    )
  },
})
