<template>
  <fieldset :class="status" :disabled="disabled" :form="form" :name="name">
    <legend>{{ legend }}</legend>
    <slot />
  </fieldset>
</template>

<script lang="ts" src="./fieldset.ts"></script>

<style lang="scss" src="./fieldset.scss"></style>
