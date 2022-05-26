<template>
  <div :class="status" @click="onFocus">
    <input type="hidden" :value="modelValue" @change="onChange" />
    <ul class="results">
      <li v-for="(item, index) in results" :key="index">{{ item }}</li>
    </ul>
  </div>
  <teleport :to="teleport">
    <ul :class="[selection, 'options']" :style="offset">
      <li
        v-for="({ label, value }, index) in options"
        :key="index"
        @click="onSelect(value, label)"
      >
        {{ label }}
      </li>
    </ul>
  </teleport>
</template>

<script lang="ts" src="./select-single.ts"></script>

<style lang="scss" src="./select-single.scss"></style>
