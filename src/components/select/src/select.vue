<template>
  <component
    v-model="value"
    :is="target"
    :options="options"
    :placeholder="placeholder"
    :teleport="teleport"
    @change="onChange"
  />
</template>

<script lang="ts" src="./select.component.ts"></script>
