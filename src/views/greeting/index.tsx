import { defineComponent, ref } from 'vue'

import { createNamespace, resolveI18n } from '@/utils'
import type { Language } from '@/types'

import lang from './lang'

const bem = createNamespace('greeting')

const defaultOptions = [
  {
    legend: 'Chinese',
    name: 'zh',
  },
  {
    legend: 'English',
    name: 'en',
  },
  {
    legend: 'Korean',
    name: 'kr',
  },
]

export default defineComponent({
  name: bem(),
  setup() {
    const selected = ref<Language>('en')

    const onChange = (value: Language): void => {
      document.documentElement.lang = value
    }

    return () => (
      <div class={bem('pack')}>
        <sam-select
          v-model={selected.value}
          options={defaultOptions}
          onChange={onChange}
        />
        <span
          class={bem()}
          {...resolveI18n(lang.greeting)}
        ></span>
      </div>
    )
  },
})
