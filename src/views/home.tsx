import { defineComponent } from 'vue'
import createNamespace from '@/utils/namespace'
import demo from '@/components/demo'

const bem = createNamespace('home')

export default defineComponent({
  name: bem(),
  render() {
    return (
      <div class={bem()}>
        <span class={bem('title')}>hello, sampung</span>
        <ul class={bem('nav')} id='nav'>
          {demo.map(({ name, path }) => (
            <li class={bem('nav-item')}>
              <router-link to={'/' + path}>
                <span>{name}</span>
              </router-link>
            </li>
          ))}
        </ul>
        <router-view />
      </div>
    )
  },
})
