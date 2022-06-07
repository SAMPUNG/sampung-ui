import { defineComponent, ref, type Ref } from 'vue'
import Namespace from '@/utils/namespace'
import DemoCarousel from './carousel.component'

const demo = new Namespace('demo-carousel')

const demoOptions = [
  '/img/iu.jpg',
  '/img/jal-mahal.jpg',
  '/img/mesa.jpg',
]

export default defineComponent({
  name: demo.bem(),
  components: { DemoCarousel },
  setup() {
    const options: Ref<string[]> = ref(demoOptions)
    return {
      options,
    }
  },
  render() {
    return (
      <div class={demo.bem()}>
        <demo-carousel options={this.options} />
      </div>
    )
  },
})
