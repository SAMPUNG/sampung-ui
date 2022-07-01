import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import DemoIcon from './icon.component'
import { manifest } from './icon.config'

const bem = createNamespace('icon-demo')

export default defineComponent({
  name: bem(),
  components: { DemoIcon },
  render() {
    return (
      <div class={bem()}>
        <ul class={bem('list')}>
          {Object.keys(manifest).map((item) => (
            <li class={bem('item')}>
              <div class={bem('icon')}>
                <demo-icon name={item} />
              </div>
              <span class={bem('text')}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
})
