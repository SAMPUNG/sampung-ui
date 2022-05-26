<template>
  <div class="demo">
    <!-- Playground -->
    <div class="demo-playground">
      <sam-select
        v-model="value"
        :options="options"
        :placeholder="placeholder"
      />
    </div>
    <!-- Controls -->
    <sam-form name="controls">
      <sam-fieldset legend="属性(attrs)">
        <sam-field label="占位符(placeholder)" name="placeholder">
          <sam-input
            v-model="placeholder"
            label="占位符(placeholder)"
            type="boolean"
          />
        </sam-field>
      </sam-fieldset>
    </sam-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bem from '@/utils/bem'

export default defineComponent({
  name: bem('demo-select'),
  data: () => ({
    options: [
      {
        label: 'AA',
        value: 'aa'
      },
      {
        label: 'BB',
        value: 'bb'
      },
      {
        label: 'CC',
        value: 'cc'
      }
    ],
    placeholder: '请选择……',
    value: undefined
  })
})
</script>

<style lang="scss" src="@/styles/demo.scss"></style>
