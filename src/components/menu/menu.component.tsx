import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import MenuAccordion from '@/components/accordion/accordion.component'
import MenuIcon from '@/components/icon/icon.component'
import { createNamespace, resolveDataset } from '@/utils/'

import menuEmits from './menu.emits'
import menuProps from './menu.props'
import type { MenuOption, MenuValue } from './menu.interface'
import './menu.scss'

const bem = createNamespace('menu')

export default defineComponent({
  name: bem(),
  components: { MenuAccordion, MenuIcon },
  props: menuProps,
  emits: menuEmits,
  setup(props, context) {
    const expands = ref<MenuValue[]>(props.expanded)
    const route = useRoute()
    const router = useRouter()
    const svelte = ref<boolean>(false)
    const width = computed(() => ({
      width: svelte.value ? 'var(--input)' : `${props.width}px`,
    }))

    const onExpand = (value: MenuValue): void => {
      const index = expands.value.indexOf(value)
      if (props.accordion) {
        expands.value.splice(0)
      }
      if (index === -1) {
        expands.value.push(value)
      } else {
        expands.value.splice(index, 1)
      }
    }
    const onLink = (event: MouseEvent, option: MenuOption) => {
      option.path && router.push(option.path)
      event.preventDefault()
      event.stopPropagation()
      return false
    }
    const onSvelte = (value?: boolean): void => {
      svelte.value = typeof value === 'boolean' ? value : !svelte.value
      context.emit('svelte', svelte.value, props.name)

      if (svelte.value) {
        context.emit('grow', props.name)
      } else {
        context.emit('shrink', props.name)
      }
    }

    const renderHeader = () => {
      if (context.slots.header) {
        return context.slots.header()
      }
      const homepage: MenuOption = {
        icon: props.icon,
        legend: props.legend,
        name: props.name,
        path: props.homepage,
      }
      return (
        <header class={bem('header')}>
          {renderLink(homepage, '0th')}
          <div class={bem('controls')}>
            <menu-icon
              class={bem('status')}
              name="keyboard-double-arrow-left"
              onClick={onSvelte}
            />
          </div>
        </header>
      )
    }
    const renderMenu = () => {
      if (svelte.value) {
        return props.options.map((item: MenuOption) => renderLink(item, '1st'))
      }
      return props.options.map((item: MenuOption) =>
        item.children ? (
          <menu-accordion
            class={bem('submenu')}
            data-name={item.name}
            data-level={1}
            data-selected={props.modelValue === item.name}
            icon={item.icon}
            legend={item.legend}
            name={item.name}
            modelValue={resolveExpanded(item.name)}
            onClick={() => onExpand(item.name)}
          >
            {renderMenu2nd(item.children)}
          </menu-accordion>
        ) : (
          renderLink(item, '1st')
        )
      )
    }
    const renderLink = (option: MenuOption, level: string = '1st') => (
      <a
        class={bem('link', [level])}
        data-name={option.name}
        data-level={level}
        data-selected={props.modelValue === option.name}
        data-path={option.path}
        href={option.path}
        onClick={(event: MouseEvent) => onLink(event, option)}
        target={option.target}
      >
        <menu-icon class={bem('icon')} name={option.icon} />
        <span class={bem('legend')}>{option.legend}</span>
      </a>
    )
    const renderMenu2nd = (subitems: MenuOption[]) => {
      return subitems.map((subitem: MenuOption) => renderLink(subitem, '2nd'))
    }

    const resolveExpanded = (value: MenuValue): boolean => {
      return expands.value.includes(value)
    }

    const updateMenu = (): void => {
      context.emit('update:modelValue', route.name)
    }

    watch(() => route.name, updateMenu)

    return () => (
      <div
        class={bem()}
        {...resolveDataset(props, ['accordion', 'legend', 'name'])}
        data-svelte={svelte.value ? 'shrink' : 'grow'}
        style={width.value}
      >
        {renderHeader()}
        {renderMenu()}
      </div>
    )
  },
})
