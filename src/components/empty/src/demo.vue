<template>
  <div class="demo">
    <sam-empty />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import SamEmpty from './empty.vue'

export default defineComponent({
  name: bem('demo-empty'),
  components: { SamEmpty }
})
</script>

<style lang="scss" scoped>
.demo {
  text-align: center;
}
</style>
