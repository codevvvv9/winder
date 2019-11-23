<template lang="">
  <div class="tabsHead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actionWrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "WinderTabsHead",
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on("update:selected", (name, vm) => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect()
        this.$refs.line.style.left = `${left}px`
        this.$refs.line.style.width = `${width}px`
      })
    },
  }
</script>
<style scoped lang="scss">
  $tabs-height: 40px;
  $color: blue;
  $border-color: #dddddd;
  .tabsHead {
    display: flex;
    height: $tabs-height;
    position: relative;
    border-bottom: 1px solid $border-color;
    >.line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $color;
      transition: all 350ms;
    }
    >.actionWrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em;
    }
  }
</style>