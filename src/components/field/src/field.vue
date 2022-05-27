<template>
  <fieldset :class="status">
    <legend>{{ legend }}</legend>
    <label :for="name">{{ legend }}</label>
    <slot />
  </fieldset>
</template>

<script lang="ts" src="./field.ts"></script>

<style lang="scss" src="./field.scss"></style>
