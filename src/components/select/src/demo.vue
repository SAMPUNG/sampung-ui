<template>
  <div class="demo">
    <!-- Playground -->
    <div class="demo-playground">
      <sam-select v-model="value" :multiple="!!multiple" :options="options" />
    </div>
    <!-- Controls -->
    <sam-form class="demo-controls" name="controls">
      <sam-fieldset legend="属性(attrs)">
        <sam-input v-model="multiple" label="可多选(multiple)" type="boolean" />
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
    multiple: false as boolean,
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
    value: undefined
  })
})
</script>

<style lang="scss" src="@/styles/demo.scss"></style>
