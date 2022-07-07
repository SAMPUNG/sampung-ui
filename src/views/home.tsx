import { defineComponent, ref } from 'vue'
import createNamespace from '@/utils/namespace'
import demo from '@/components/demo'
import '@/styles/demo.scss'

const bem = createNamespace('home')

export default defineComponent({
  name: bem(),
  setup() {
    const dark = ref<boolean>(true)
    const changeMode = (): void => {
      dark.value = !dark.value
      document.documentElement.dataset.mode = dark.value ? 'dark' : 'light'
    }

    return {
      changeMode,
    }
  },
  mounted() {
    document.documentElement.dataset.theme = 'dark'
  },
  render() {
    return (
      <div class={bem()}>
        <router-link class={bem('title')} to="/">
          <span>hello, sampung</span>
        </router-link>
        <sam-button
          class={bem('mode')}
          icon="adjust"
          legend="Click To Change Mode"
          onClick={this.changeMode}
          palette="primary"
        />
        <ul class={bem('nav')}>
          {demo.map(({ name, path }) => (
            <li class={bem('nav-item')}>
              <router-link to={'/' + path}>
                <span class="label">Demo</span>
                <span class="value">{name}</span>
              </router-link>
            </li>
          ))}
        </ul>
        <router-view />
      </div>
    )
  },
})
