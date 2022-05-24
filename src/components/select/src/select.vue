<template>
  <div :class="status">
    <input type="hidden" :value="modelValue" @change="changeHandler" />
    <ul class="results">
      <li v-for="(item, index) in results" :key="index">{{ item }}</li>
    </ul>
  </div>
  <teleport to="body">
    <ul :class="[teleport, 'options']">
      <li
        v-for="({ label, value }, index) in options"
        :key="index"
        @click="selectHandler(value, label)"
      >
        {{ label }}
      </li>
    </ul>
  </teleport>
</template>

<script lang="ts" src="./select.ts"></script>

<style lang="scss" src="./select.scss"></style>
