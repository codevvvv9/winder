<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "WinderCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    if (this.single) {
      return {
        eventBus: this.eventBus
      }
    }
  },
}
</script>

<style lang="scss">
  $border-radius: 4px;
  $border-color: #ddd;
  .collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    // border-bottom: none;
  }
</style>