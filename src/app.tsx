import { createApp, defineComponent } from 'vue'

import { createNamespace } from '@/utils'

// Theme
import './themes/faiz.scss'
// Reset
import './styles/reset.scss'
// Palette
import './styles/palette.scss'
// Animate
import './styles/animate.scss'
// Font
import './styles/font.scss'
// Styles
import './styles/appearance.scss'
// Effect
import './styles/effect.scss'
// Language
import './styles/lang.scss'

const bem = createNamespace('home')

const app = defineComponent({
  name: bem(),
  setup() {
    return () => <router-view />
  },
})

export default createApp(app)
