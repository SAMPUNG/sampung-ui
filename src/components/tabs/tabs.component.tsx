import { defineComponent, defineEmits, ref } from 'vue'
import type { PropType, Ref } from 'vue'
import Namespace from '@/utils/namespace'
import type { IndicatorOffset, TabOption, TabsEmits, TabsProps, TabsValue } from './tabs.interface'
import style from './tabs.module.scss'

const tabs = new Namespace('tabs')

export default defineComponent({
  name: tabs.name,
  props: {
    modelValue: {
      default: undefined
    },
    options: {
      default: () => [],
      type: Array as PropType<TabOption[]>
    }
  },
  emits: {
    'update:modelValue' () {}
  },
  setup(props: TabsProps) {
    const dropdown: Ref<boolean> = ref(false)
    const emits = defineEmits<TabsEmits>()
    const offset: Ref<IndicatorOffset> = ref({
      transform: 'translateX(0px)',
      width: '32px',
    })

    const resolveSelected = (item: TabOption): string => {
      return item.name === props.modelValue ? 'selected' : '';
    }

    const onDropdown = (): void => {
      dropdown.value = true
    }

    const onSelect = (event: MouseEvent): void => {
      const target = event.target as HTMLLIElement
      const dataset: DOMStringMap = target.dataset

      offset.value.transform = `translateX(${target.offsetLeft}px)`;
      offset.value.width = `${target.clientWidth}px`;

      emits('update:modelValue', dataset.name);
    }
    return {
      ...props,
      offset,
      resolveSelected,
      onDropdown,
      onSelect
    }
  },
  render() {
    return (
      <div class={[style.tabs, tabs.bem([])]}>
        <ul class={style['tab-list']}>
          {
            this.options?.map(item => (
              <li
                class={[style['tab-item'], this.resolveSelected(item)]}
                data-name={item.name}
                onClick={this.onSelect}
              >
                <span>{item.title}</span>
              </li>
            ))
          }
        </ul>
        <div class={style['tabs-controls']} onClick={this.onDropdown}></div>
        <div class={style['tabs-indicator']} style={this.offset} />
      </div>
    )
  }
})
