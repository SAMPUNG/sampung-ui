import { computed, defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import Namespace from '@/utils/namespace'
import type { Style } from '@/types/component'
import  './carousel.scss'

const carousel = new Namespace('carousel')

const CarouselProps = {
  options: {
    default: () => [],
    required: true,
    type: Array as PropType<string[]>,
  },
}

export default defineComponent({
  name: carousel.bem(),
  props: CarouselProps,
  setup(props) {
    const offset: Ref<number> = ref(0)

    const changeDisplay = (index: number) => {
      offset.value = index;
    }
    const changeDisplayInOrder = (step: number) => {
      const limit = props.options.length;
      offset.value = (step + offset.value + limit) % limit;
    }
    const resolveDisplay = (index = 0) => {
      return index === offset.value ? 'active' : '';
    }

    const itemStyle: ComputedRef<Style> = computed(() => {
      const itemWidth = (100 / props.options.length).toFixed(2);
      return {
        width: `${itemWidth}%`,
      };
    })
    const listStyle: ComputedRef<Style> = computed(() => {
      const itemWidth: number = Number((100 / props.options.length).toFixed(2));
      return {
        width: `${props.options.length * 100}%`,
        transform: `translateX(-${offset.value * itemWidth}%)`,
      };
    })

    return {
      changeDisplay,
      changeDisplayInOrder,
      resolveDisplay,
      itemStyle,
      listStyle,
    }
  },
  render() {
    return (
      <div class={carousel.bem()}>
      <div class="carousel-view">
          <ul class="carousel-list" style={this.listStyle}>
            {
              this.options?.map((url: string, index: number) => (
                <li
                    key={index}
                    class="carousel-item"
                    style={this.itemStyle}
                >
                  <img class="image" src={url} />
                </li>
              ))
            }
        </ul>
      </div>
      <div class="carousel-tool left" onClick={() => this.changeDisplayInOrder(-1)}>
        <i class="fks-icon-arrow-left" />
      </div>
      <div class="carousel-tool right" onClick={() => this.changeDisplayInOrder(1)}>
        <i class="fks-icon-arrow-right" />
      </div>
      <ul class="indicator">
        {
          this.options?.map((url: string, index: number) => (
            <li
              key={index}
              class={['indicator-item', this.resolveDisplay(index)]}
              onClick={() => this.changeDisplay(index)}
            />
          ))
        }
      </ul>
    </div>
    )
  },
  mounted() {
    this.changeDisplay(0);
  },
})
