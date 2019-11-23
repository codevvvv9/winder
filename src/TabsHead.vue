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
    created() {
      this.eventBus.$on("update:selected", (name, vm) => {
        console.log('name is', name);
        console.log('vm.$el', vm.$el);
      })
    },
  }
</script>
<style scoped lang="scss">
  $tabs-height: 40px;
  $color: blue;
  .tabsHead {
    display: flex;
    border: 1px solid red;
    height: $tabs-height;
    position: relative;
    >.line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $color;
      width: 100px;
    }
    >.actionWrapper {
      margin-left: auto;
    }
  }
</style>