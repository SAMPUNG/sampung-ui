<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="demo">
      <sam-marquee :size="25" />
      <sam-select v-model="value" :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    value: [],
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
    ]
  })
})
</script>

<style lang="scss" scoped>
.demo {
  text-align: center;
}
</style>
