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
    //当layout组件加载完毕之后，看所有的子组件，是不是有一个叫WinderSider的组件
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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // border: 1px solid red;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>
