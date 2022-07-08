import { defineComponent, ref, type Ref } from 'vue'

import createNamespace from '@/utils/namespace'

import DemoCarousel from './carousel.component'

const bem = createNamespace('carousel-demo')

const demoOptions = ['/img/iu.jpg', '/img/jal-mahal.jpg', '/img/mesa.jpg']

export default defineComponent({
  name: bem(),
  components: { DemoCarousel },
  setup() {
    const options: Ref<string[]> = ref(demoOptions)

    return () => (
      <div class={bem()}>
        <demo-carousel options={options.value} />
      </div>
    )
  },
})
