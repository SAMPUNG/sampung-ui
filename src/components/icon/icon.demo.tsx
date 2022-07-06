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
          {manifest['material-design'].map(({ name }) => (
            <li class={bem('item')}>
              <div class={bem('icon')}>
                <demo-icon name={name} />
              </div>
              <span class={bem('text')}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
})
