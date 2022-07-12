import { defineComponent } from 'vue'

import createNamespace from '@/utils/namespace'

import { manifest } from '@/components/icon/icon.config'

const bem = createNamespace('icon-demo')

export default defineComponent({
  name: bem(),
  setup() {
    return () => (
      <div class={bem()}>
        <ul class={bem('list')}>
          {manifest['material-design'].map(({ name }) => (
            <li class={bem('item')}>
              <div class={bem('icon')}>
                <sam-icon name={name} />
              </div>
              <span class={bem('text')}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
})
