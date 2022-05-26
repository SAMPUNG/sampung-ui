<template>
  <label :class="colon ? 'colon' : ''" :for="name">{{ label }}</label>
  <input
    :class="status"
    :max="max"
    :min="min"
    :name="name"
    :placeholder="placeholder"
    :step="step"
    :type="type"
    :value="modelValue"
    @input="inputHandler"
  />
</template>

<script lang="ts" src="./input.ts"></script>

<style lang="scss" src="./input.scss"></style>
