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
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    // if (this.single) {
    //   return {
    //     eventBus: this.eventBus
    //   }
    // }
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected)
    this.eventBus.$on("update:selected", (name) => {
      this.$emit("update:selected", name)
    })
    // this.$children.forEach(vm => {
    //   vm.single = this.single
    // });
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