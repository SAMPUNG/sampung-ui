<template>
  <div class="home">
    <sam-demo-marquee />
    <sam-demo-select />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bem from '@/utils/bem'
import SamDemoMarquee from '@/components/marquee/src/demo.vue'
import SamDemoSelect from '@/components/select/src/demo.vue'

export default defineComponent({
  name: bem('home'),
  components: { SamDemoMarquee, SamDemoSelect }
})
</script>

<style lang="scss" scoped></style>
