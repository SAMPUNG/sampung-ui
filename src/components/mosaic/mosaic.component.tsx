import { defineComponent } from 'vue'

import { HELLO_WORLD } from '@/i18n'

import { createNamespace, resolveI18n } from '@/utils'

import style from './mosaic.module.scss'

const bem = createNamespace('mosaic')

export default defineComponent({
  name: bem(),
  setup() {
    return () => <div class={style[bem()]}>
      <span {...resolveI18n(HELLO_WORLD)}/>
    </div>
  },
})
