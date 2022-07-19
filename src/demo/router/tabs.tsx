import { defineComponent, ref } from 'vue'

import { createNamespace } from '@/utils'

const bem = createNamespace('tabs-demo')

const defaultTabs = [
  {
    legend: 'Tab A',
    name: 'a',
  },
  {
    legend: 'Tab B',
    name: 'b',
  },
  {
    legend: 'Tab C',
    name: 'c',
  },
  {
    legend: 'Tab D',
    name: 'd',
  },
  {
    legend: 'Tab E',
    name: 'e',
  },
  {
    legend: 'Tab F',
    name: 'f',
  },
  {
    legend: 'Tab G',
    name: 'g',
  },
  {
    legend: 'Tab H',
    name: 'h',
  },
  {
    legend: 'Tab I',
    name: 'i',
  },
  {
    legend: 'Tab J',
    name: 'j',
  },
  {
    legend: 'Tab K',
    name: 'k',
  },
  {
    legend: 'Tab L',
    name: 'l',
  },
  {
    legend: 'Tab M',
    name: 'm',
  },
  {
    legend: 'Tab N',
    name: 'n',
  },
  {
    legend: 'Tab O',
    name: 'o',
  },
  {
    legend: 'Tab P',
    name: 'p',
  },
  {
    legend: 'Tab Q',
    name: 'q',
  },
  {
    legend: 'Tab R',
    name: 'r',
  },
  {
    legend: 'Tab S',
    name: 's',
  },
  {
    legend: 'Tab T',
    name: 't',
  },
  {
    legend: 'Tab U',
    name: 'u',
  },
  {
    legend: 'Tab V',
    name: 'v',
  },
  {
    legend: 'Tab W',
    name: 'w',
  },
  {
    legend: 'Tab X',
    name: 'x',
  },
  {
    legend: 'Tab Y',
    name: 'y',
  },
  {
    legend: 'Tab Z',
    name: 'z',
  },
]

export default defineComponent({
  name: bem(),
  setup() {
    const selected = ref<string>(defaultTabs[1].name)

    return () => (
      <div class="demo">
        <sam-tabs
          v-model={selected.value}
          options={defaultTabs}
        />
      </div>
    )
  },
})
