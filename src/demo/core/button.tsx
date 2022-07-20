import { defineComponent, ref } from 'vue'

import type { ButtonMode } from '@/components/button/button.interface'
import { APPEARANCE, BUTTON_MODE, ICONS, PALETTE } from '@/configs'
import type { Appearance, Palette } from '@/types'
import { createNamespace } from '@/utils'

const bem = createNamespace('button-demo')

export default defineComponent({
  name: bem(),
  setup() {
    const appearance = ref<Appearance>('outline')
    const icon = ref<string>(ICONS[0].name)
    const mode = ref<ButtonMode>('normal')
    const palette = ref<Palette>('primary')

    return () => (
      <div class={bem()}>
        <sam-button
          appearance={appearance.value}
          icon={icon.value}
          legend="Button"
          mode={mode.value}
          palette={palette.value}
        />
        <hr class={bem('line')} />
        <sam-select
          v-model={appearance.value}
          legend="Appearance"
          name="appearance"
          options={APPEARANCE}
        />
        <sam-select
          v-model={palette.value}
          legend="Palette"
          name="palette"
          options={PALETTE}
        />
        <sam-select
          v-model={mode.value}
          legend="Mode"
          name="mode"
          options={BUTTON_MODE}
        />
        <sam-select
          v-model={icon.value}
          legend="Icon"
          name="icon"
          options={ICONS.slice(0, 10)}
        />
      </div>
    )
  },
})
