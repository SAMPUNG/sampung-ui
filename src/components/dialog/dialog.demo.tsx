import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoButton from '@/components/button/button.component'
import DemoDialog from '@/components/dialog/dialog.component'

const bem = createNamespace('dialog-demo')

export default defineComponent({
  name: bem(),
  components: { DemoButton, DemoDialog },
  setup() {
    const visible = ref<boolean>(false)

    return {
      visible,
    }
  },
  render() {
    return (
      <div class={bem()}>
        <div class={bem('controls')}>
          <demo-button
            legend="Open Dialog"
            onClick={() => {
              this.visible = true
            }}
          />
        </div>
        <div class={bem('display')}>
          <demo-dialog icon="fa" legend="Dialog Title" vModel={this.visible}>
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
          </demo-dialog>
        </div>
      </div>
    )
  },
})
