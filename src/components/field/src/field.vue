<template>
  <div :class="status">
    <label :for="name">{{ label }}{{ split }}</label>
    <slot />
  </div>
</template>

<script lang="ts" src="./field.ts"></script>

<style lang="scss" src="./field.scss"></style>
