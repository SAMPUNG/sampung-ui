<template>
  <div class="playground">
    <!-- Playground -->
    <div class="demo-playground">
      <component v-model="value" v-bind="source" :is="target" />
    </div>
    <!-- Controls -->
    <sam-form class="demo-controls" name="controls">
      <sam-field
        v-for="(item, index) in controls"
        :key="index"
        :label="item.label"
        :name="item.name"
      >
        <sam-input
          v-model="source[item.name]"
          :label="item.label"
          :type="item.type"
        />
      </sam-field>
    </sam-form>
  </div>
</template>

<script lang="ts" src="./playground.ts"></script>

<style lang="scss" module="style" src="./playground.scss"></style>
