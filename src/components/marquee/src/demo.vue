<template>
  <div class="demo">
    <!-- Playground -->
    <div class="demo-playground">
      <sam-marquee :size="size" />
    </div>
    <!-- Controls -->
    <sam-form name="controls">
      <sam-fieldset legend="属性(attrs)">
        <sam-field label="尺寸(size)" name="size">
          <sam-input
            v-model="size"
            :max="200"
            :min="12"
            name="size"
            :step="1"
            type="number"
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
  name: bem('demo-marquee'),
  data: () => ({
    size: 25 as number
  })
})
</script>

<style lang="scss" src="@/styles/demo.scss"></style>
