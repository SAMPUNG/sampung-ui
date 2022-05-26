import { defineComponent } from 'vue'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('playground'),
  props: {
    target: {
      default: 'select',
      required: true,
      type: String
    }
  },
  data: () => {
    const source: Record<string, unknown> = {
      multiple: false,
      options: [
        {
          label: '选项 A',
          value: 'a'
        },
        {
          label: '选项 B',
          value: 'b'
        },
        {
          label: '选项 C',
          value: 'c'
        },
        {
          label: '选项 D',
          value: 'D'
        },
        {
          label: '选项 E',
          value: 'e'
        },
        {
          label: '选项 F',
          value: 'f'
        },
        {
          label: '选项 G',
          value: 'g'
        }
      ],
      placeholder: '请选择……',
    }
    return {
      controls: [
        {
          label: '可多选',
          name: 'multiple',
          type: 'boolean',
          value: false
        },
        {
          label: '可选项',
          name: 'options',
          type: 'array',
          value: [
            {
              label: '选项 A',
              value: 'a'
            },
            {
              label: '选项 B',
              value: 'b'
            },
            {
              label: '选项 C',
              value: 'c'
            },
            {
              label: '选项 D',
              value: 'D'
            },
            {
              label: '选项 E',
              value: 'e'
            },
            {
              label: '选项 F',
              value: 'f'
            },
            {
              label: '选项 G',
              value: 'g'
            }
          ]
        },
        {
          label: '占位符',
          name: 'placeholder',
          type: 'string',
          value: '请选择……'
        }
      ],
      source,
      value: 'a'
    }
  },
})
