import { defineComponent } from 'vue'
import Namespace from '@/utils/namespace'
import demo from '@/components/demo'

const home = new Namespace('home')

export default defineComponent({
  name: home.bem(),
  render() {
    return (
      <div class={home.bem()}>
        <span class={home.bem('title')}>hello, sampung</span>
        <ul class={home.bem('nav')} id="nav">
          {demo.map(({ name, path }) => (
            <li class={home.bem('nav-item')}>
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
