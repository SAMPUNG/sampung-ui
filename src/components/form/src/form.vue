<template>
  <form
    :action="action"
    :class="status"
    :enctype="enctype"
    :method="method"
    :name="name"
    :target="target"
  >
    <slot />
  </form>
</template>

<script lang="ts" src="./form.ts"></script>

<style lang="scss" src="./form.scss"></style>
