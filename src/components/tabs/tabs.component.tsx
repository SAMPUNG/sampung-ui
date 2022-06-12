import { defineComponent, ref, watch } from 'vue'
import type { PropType, Ref } from 'vue'
import { resolveUniqueId, verifyRegular } from '@/utils/data'
import Namespace from '@/utils/namespace'
import type {
  IndicatorOffset,
  TabsOption,
  TabsProps,
  TabsValue,
} from './tabs.interface'
import TabsSelect from '../select/select.component'

import './tabs.scss'

const tabs = new Namespace('tabs')

export default defineComponent({
  name: tabs.name,
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
    'change'(value: TabsValue) {
      return value
    },
    'update:modelValue'(value: TabsValue) {
      return value
    },
  },
  setup(props: TabsProps, context) {
    const dropdown: Ref<boolean> = ref(false)
    const id = ref<string>(resolveUniqueId())
    const offset: Ref<IndicatorOffset> = ref({
      transform: 'translateX(8px)',
      width: '32px',
    })
    const select = ref<typeof TabsSelect | null>(null)
    const selected = ref<TabsValue>(props.modelValue)

    const onChange = (value: TabsValue) => {
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

    const selectTab = (name: TabsValue): void => {
      select.value?.selectOption(name)

      const selector = `#${id.value} li[data-option="${name}"]`
      const target: HTMLLIElement | null = document.querySelector(selector)

      if (target) {
        offset.value.transform = `translateX(${target.offsetLeft}px)`
        offset.value.width = `${target.clientWidth}px`
      }
    }

    watch(() => props.modelValue, selectTab)

    context.expose({
      selectTab,
    })

    return {
      id,
      offset,
      onChange,
      onDropdown,
      onSelect,
      selected,
      selectTab,
    }
  },
  render() {
    return (
      <div class={[tabs.bem()]} id={this.id}>
        <tabs-select
          vModel={this.selected}
          options={this.options}
          onChange={this.onChange}
          onSelect={this.onSelect}
          ref="select"
        />
        <div class={tabs.bem('controls')} onClick={this.onDropdown}>
          <button class={tabs.bem('controls-more')}>⋯</button>
        </div>
        <div class={tabs.bem('indicator')} style={this.offset} />
      </div>
    )
  },
  mounted() {
    this.selectTab(this.modelValue)
  },
})
