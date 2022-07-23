import { defineComponent, watch } from 'vue'

import LatheField from '@/components/field/field.component'
import LatheForm from '@/components/form/form.component'
import LatheInput from '@/components/input/input.component'
import LatheLegend from '@/components/legend/legend.component'

import { createNamespace, block } from '@/utils'

import latheEmits from './lathe.emits'
import type { LatheSource } from './lathe.interface'
import latheProps from './lathe.props'
import './lathe.scss'

const bem = createNamespace('lathe')

export default defineComponent({
  name: bem(),
  components: {
    LatheField,
    LatheForm,
    LatheInput,
    LatheLegend,
  },
  props: latheProps,
  emits: latheEmits,
  setup(props, context) {
    const onUpdateSource = (target: LatheSource, source: LatheSource): void => {
      Object.entries(target).forEach(([key, value]) => {
        if (value !== source[key]) {
          context.emit('update', key, value)
        }
      })
    }

    const renderFields = () => {
      return props.options.map((item) => (
        <lathe-field
          legend={item.legend}
          name={item.name}
        >
          <lathe-input
            v-model={props.source[item.name]}
            type={item.type}
          />
        </lathe-field>
      ))
    }
    const renderTarget = () => {
      if (!props.target) {
        return ''
      }
      const Target = block + '-' + props.target
      return <Target {...props.source} />
    }

    watch(() => props.source, onUpdateSource, { deep: true })

    return () => (
      <div
        class={bem()}
        data-name={props.name}
      >
        <lathe-legend
          class={bem('legend')}
          legend={props.legend}
        />
        <div class={bem('bed')}>{renderTarget()}</div>
        <lathe-form
          class={bem('form')}
          name="controls"
        >
          {renderFields()}
        </lathe-form>
      </div>
    )
  },
})
