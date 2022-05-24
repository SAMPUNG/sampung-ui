<template>
  <label :for="name">{{ label }}</label>
  <input
    :class="status"
    :name="name"
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @input="inputHandler"
  />
</template>

<script lang="ts" src="./input.ts"></script>

<style lang="scss" src="./input.scss"></style>
