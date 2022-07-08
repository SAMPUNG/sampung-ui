import { defineComponent, onMounted, ref, watch } from 'vue'

import type { ScrollStyle } from '@/types/component'
import { createNamespace, resolveUniqueId } from '@/utils/'

import type { Item, List } from '@/components/select/select.interface'
import TabsSelect from '@/components/select/select.component'

import type { TabsValue } from './tabs.interface'
import tabsEmits from './tabs.emits'
import tabsProps from './tabs.props'
import './tabs.scss'

const bem = createNamespace('tabs')

export default defineComponent({
  name: bem(),
  components: { TabsSelect },
  props: tabsProps,
  emits: tabsEmits,
  setup(props, context) {
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
    const select = ref<typeof TabsSelect>()
    const viewport = ref<HTMLDivElement>()

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

    onMounted(() => {
      selectTab(props.modelValue)
      updateViewport()
    })

    return () => (
      <div class={[bem()]} data-value={props.modelValue} id={id.value}>
        <div class={bem('viewport')} ref={viewport}>
          <div class={bem('view')} style={menu.value}>
            <tabs-select
              class={bem('select')}
              modelValue={props.modelValue}
              options={props.options}
              onChange={onChange}
              onSelect={onSelect}
              ref={select}
              role="select"
            />
            <div class={bem('indicator')} style={indicator.value} />
          </div>
        </div>
        <div class={bem('controls')} onClick={onDropdown}>
          <button class={bem('more')}>⋯</button>
        </div>
      </div>
    )
  },
})
