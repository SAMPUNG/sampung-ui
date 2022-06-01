<template>
  <div class="home-carousel">
    <div class="carousel-view">
      <ul class="carousel-list" :style="listStyle">
        <li
          v-for="(url, index) in options"
          :key="index"
          class="carousel-item"
          :style="itemStyle"
        >
          <img class="image" :src="url" />
        </li>
      </ul>
    </div>
    <!-- Tools -->
    <div class="carousel-tool left" @click="changeDisplayInOrder(-1)">
      <i class="fks-icon-arrow-left" />
    </div>
    <div class="carousel-tool right" @click="changeDisplayInOrder(1)">
      <i class="fks-icon-arrow-right" />
    </div>
    <!-- Indicator -->
    <ul class="indicator">
      <li
        v-for="(item, index) in options"
        :key="index"
        :class="['indicator-item', resolveDisplay(index)]"
        @click="changeDisplay(index)"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeCarousel',
  props: {
    options: {
      default: () => [],
      required: true,
      type: Array,
    },
  },
  data: () => ({
    offset: 0,
  }),
  computed: {
    itemStyle() {
      const itemWidth = (100 / this.options.length).toFixed(2);
      return {
        width: `${itemWidth}%`,
      };
    },
    listStyle() {
      const itemWidth = (100 / this.options.length).toFixed(2);
      return {
        width: `${this.options.length * 100}%`,
        transform: `translateX(-${this.offset * itemWidth}%)`,
      };
    },
  },
  mounted() {
    this.changeDisplay(0);
  },
  methods: {
    changeDisplay(index) {
      this.offset = index;
    },
    changeDisplayInOrder(step) {
      const limit = this.options.length;
      this.offset = (step + this.offset + limit) % limit;
    },
    resolveDisplay(index = 0) {
      return index === this.offset ? 'active' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.home-carousel {
  height: 220px;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:hover .carousel-tool {
    opacity: 1;
    visibility: visible;
  }
}

.carousel-view {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  .image {
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }
}
.carousel-list {
  height: 100%;
  transition-duration: 0.3s;
}
.carousel-item {
  display: inline-block;
  height: 100%;
}

.carousel-tool {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-16px);
  transition-duration: 0.3s;
  text-align: center;
  visibility: hidden;
  width: 32px;

  &.left {
    left: 8px;
  }
  &.right {
    right: 8px;
  }

  i {
    color: #fff;
  }
}

.indicator {
  bottom: 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: center;
  left: 0;
  padding: 0 0 12px 0;
  position: absolute;
  right: 0;

  &-item {
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    height: 8px;
    margin: 0 5px;
    opacity: 0.5;
    width: 8px;

    &.active {
      cursor: text;
      opacity: 1;
    }
  }
}
</style>
