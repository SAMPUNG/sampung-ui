import { computed, defineComponent, onMounted, ref } from 'vue'

import { createNamespace } from '@/utils'

import carouselProps from './carousel.props'
import './carousel.scss'

const bem = createNamespace('carousel')

export default defineComponent({
  name: bem(),
  props: carouselProps,
  setup(props) {
    const offset = ref<number>(0)

    const changeDisplay = (index: number) => {
      offset.value = index
    }
    const changeDisplayInOrder = (step: number) => {
      const limit = props.options.length
      offset.value = (step + offset.value + limit) % limit
    }
    const resolveDisplay = (index = 0) => {
      return index === offset.value ? 'active' : ''
    }

    const itemStyle = computed(() => {
      const itemWidth = (100 / props.options.length).toFixed(2)
      return {
        width: `${itemWidth}%`,
      }
    })
    const listStyle = computed(() => {
      const itemWidth: number = Number((100 / props.options.length).toFixed(2))
      return {
        width: `${props.options.length * 100}%`,
        transform: `translateX(-${offset.value * itemWidth}%)`,
      }
    })

    onMounted(() => {
      changeDisplay(0)
    })

    return () => (
      <div class={bem()}>
        <div class="carousel-view">
          <ul
            class="carousel-list"
            style={listStyle.value}
          >
            {props.options?.map((url: string, index: number) => (
              <li
                key={index}
                class="carousel-item"
                style={itemStyle.value}
              >
                <img
                  class="image"
                  src={url}
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          class="carousel-tool left"
          onClick={() => changeDisplayInOrder(-1)}
        >
          <i class="fks-icon-arrow-left" />
        </div>
        <div
          class="carousel-tool right"
          onClick={() => changeDisplayInOrder(1)}
        >
          <i class="fks-icon-arrow-right" />
        </div>
        <ul class="indicator">
          {props.options?.map((url: string, index: number) => (
            <li
              key={index}
              class={['indicator-item', resolveDisplay(index)]}
              onClick={() => changeDisplay(index)}
            />
          ))}
        </ul>
      </div>
    )
  },
})
