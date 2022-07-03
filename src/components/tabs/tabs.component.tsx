import { defineComponent, type PropType, ref, watch } from 'vue'
import type { Item, List } from '@/components/select/select.interface'
import TabsSelect from '@/components/select/select.component'
import type { ScrollStyle } from '@/types/component'
import { resolveUniqueId, verifyRegular } from '@/utils/data'
import createNamespace from '@/utils/namespace'
import type { TabsOption, TabsProps, TabsValue } from './tabs.interface'

import './tabs.scss'

const bem = createNamespace('tabs')

export default defineComponent({
  name: bem(),
  components: { TabsSelect },
  props: {
    modelValue: {
      default: '',
      type: [String, Number, Boolean, undefined] as PropType<TabsValue>,
      validator: verifyRegular,
    },
    options: {
      default: () => [],
      type: Array as PropType<TabsOption[]>,
    },
  },
  emits: {
    change(value: TabsValue) {
      return value
    },
    'update:modelValue'(value: TabsValue) {
      return value
    },
  },
  setup(props: TabsProps, context) {
    const dropdown = ref<boolean>(false)
    const id = ref<string>(resolveUniqueId())
    const indicator = ref<ScrollStyle>({
      transform: 'translateX(8px)',
      width: '32px',
    })
    const menu = ref<ScrollStyle>({
      transform: 'translateX(0px)',
      width: '9999px',
    })
    const select = ref<typeof TabsSelect | null>(null)
    const viewport = ref<HTMLDivElement | null>(null)

    const onChange = (value: TabsValue) => {
      const limit = viewport.value?.clientWidth || 0
      const target: Item = resolveOption(value)

      if (target) {
        const offset = target.offsetLeft - limit / 2
        const max = Number(menu.value.width.replace(/px/, '')) - limit * 0.95
        if (offset > max) {
          menu.value.transform = `translateX(${-max}px)`
        } else if (offset > 0) {
          menu.value.transform = `translateX(${-offset}px)`
        } else {
          menu.value.transform = 'translateX(0px)'
        }
      }

      context.emit('change', value)
      context.emit('update:modelValue', value)
    }

    const onDropdown = (): void => {
      dropdown.value = true
    }

    const onSelect = (target: HTMLLIElement): void => {
      // offset.value.transform = `translateX(${target.offsetLeft}px)`;
      // offset.value.width = `${target.clientWidth}px`;
      console.log('tabs on select :>:> ')
      console.dir(target)
    }

    const resolveOption = (name?: TabsValue): Item => {
      const ul: List = document.querySelector(`#${id.value} ul[role="select"]`)
      const selector = name ? `li[data-option="${name}"]` : 'li:last-child'
      return ul?.querySelector(selector)
    }

    const selectTab = (name: TabsValue): void => {
      select.value?.selectOption(name)

      const target: Item = resolveOption(name)
      if (target) {
        indicator.value.transform = `translateX(${target.offsetLeft}px)`
        indicator.value.width = `${target.clientWidth * 0.618}px`
      }
    }

    const updateViewport = (): void => {
      const end: Item = resolveOption()
      if (end) {
        const width = end.offsetWidth + end.offsetLeft + 1
        menu.value.width = `${width}px`
      }
    }

    watch(() => props.modelValue, selectTab)

    context.expose({
      selectTab,
    })

    return {
      id,
      indicator,
      menu,
      onChange,
      onDropdown,
      onSelect,
      selectTab,
      updateViewport,
      viewport,
    }
  },
  render() {
    return (
      <div class={[bem()]} data-value={this.modelValue} id={this.id}>
        <div class={bem('viewport')} ref="viewport">
          <div class={bem('view')} style={this.menu}>
            <tabs-select
              class={bem('select')}
              modelValue={this.modelValue}
              options={this.options}
              onChange={this.onChange}
              onSelect={this.onSelect}
              ref="select"
              role="select"
            />
            <div class={bem('indicator')} style={this.indicator} />
          </div>
        </div>
        <div class={bem('controls')} onClick={this.onDropdown}>
          <button class={bem('more')}>⋯</button>
        </div>
      </div>
    )
  },
  mounted() {
    this.selectTab(this.modelValue)
    this.updateViewport()
  },
})
