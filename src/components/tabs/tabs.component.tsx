import { defineComponent, onMounted, ref, watch } from 'vue'

import type { ScrollStyle } from '@/types'
import { createNamespace, resolveUniqueId } from '@/utils'

import TabsOptions from '@/components/options/options.component'
import type {
  OptionElement,
  OptionList,
} from '@/components/options/options.interface'

import tabsEmits from './tabs.emits'
import tabsProps from './tabs.props'
import type { TabsValue } from './tabs.interface'
import './tabs.scss'

const bem = createNamespace('tabs')

export default defineComponent({
  name: bem(),
  components: { TabsOptions },
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
    const options = ref<typeof TabsOptions>()
    const viewport = ref<HTMLDivElement>()

    const onChange = (values: TabsValue[]) => {
      const value = values[0]

      context.emit('change', value)
      context.emit('update:modelValue', value)
    }

    const onDropdown = (): void => {
      dropdown.value = true
    }

    const onPick = (target: HTMLLIElement): null => {
      if (!target) {
        return null
      }
      const limit = viewport.value?.clientWidth || 0
      const offset = target.offsetLeft - limit / 2
      const max = Number(menu.value.width.replace(/px/, '')) - limit * 0.95

      if (offset > max) {
        menu.value.transform = `translateX(${-max}px)`
      } else if (offset > 0) {
        menu.value.transform = `translateX(${-offset}px)`
      } else {
        menu.value.transform = 'translateX(0px)'
      }

      return null
    }

    const renderControls = () => {
      return (
        <div
          class={bem('controls')}
          onClick={onDropdown}
        >
          <button class={bem('more')}>⋯</button>
        </div>
      )
    }

    const resolveOption = (name?: TabsValue): OptionElement => {
      const ul: OptionList = document.querySelector(
        `#${id.value} ul[role="options"]`
      )
      const selector: string = name
        ? `li[data-name="${name}"]`
        : 'li:last-child'
      return ul ? ul.querySelector(selector) : null
    }

    const selectTab = (name: TabsValue): void => {
      options.value?.pick(name)

      const target: OptionElement = resolveOption(name)
      if (target) {
        indicator.value.transform = `translateX(${target.offsetLeft}px)`
        indicator.value.width = `${target.clientWidth * 0.618}px`
      }
    }

    const updateViewport = (): void => {
      const end: OptionElement = resolveOption()
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
      <div
        class={[bem()]}
        data-value={props.modelValue}
        id={id.value}
      >
        <div
          class={bem('viewport')}
          ref={viewport}
        >
          <div
            class={bem('view')}
            style={menu.value}
          >
            <tabs-options
              class={bem('options')}
              flex={false}
              height={props.height}
              modelValue={[props.modelValue]}
              multiple={false}
              onChange={onChange}
              onPick={onPick}
              options={props.options}
              ref={options}
              role="options"
            />
            <div
              class={bem('indicator')}
              style={indicator.value}
            />
          </div>
        </div>
        {renderControls()}
      </div>
    )
  },
})
