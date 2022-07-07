import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoEffect from './effect.component'
import type { EffectInstance } from './effect.interface'

const bem = createNamespace('effect-demo')

export default defineComponent({
  name: bem(),
  components: { DemoEffect },
  setup() {
    let active: boolean = false
    const effect = ref<EffectInstance>()

    const onClick = (): void => {
      if (active) {
        active = false
        effect.value?.drop('active')
      } else {
        active = true
        effect.value?.push('active')
      }
    }

    return () => (
      <div class={bem()}>
        <div class={bem('cube')}>
          <demo-effect ref={effect} onClick={onClick} />
        </div>
      </div>
    )
  },
})
