<template>
  <div class="layout" :class="layoutClasses">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layoutClasses: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "WinderSider") {
        this.layoutClasses.hasSider = true
      }
    });
  },
}
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>
