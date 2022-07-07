import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoEffect from './effect.component'

const bem = createNamespace('effect-demo')

export default defineComponent({
  name: bem(),
  components: { DemoEffect },
  setup() {
    const effect = ref<typeof DemoEffect | null>(null)

    const onClick = (): void => {
      // effect.value?.clear()
      // effect.value?.push('loading')
    }

    return {
      effect,
      onClick,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <div class={bem('cube')}>
          <demo-effect ref="effect" onClick={this.onClick} />
        </div>
      </div>
    )
  },
})
