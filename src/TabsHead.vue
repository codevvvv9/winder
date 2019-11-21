<template lang="">
  <div class="tabsHead">
    <slot></slot>
    <div class="actionWrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "WinderTabsHead",
    inject: ['eventBus'],
  }
</script>
<style scoped lang="scss">
  $tabs-height: 40px;

  .tabsHead {
    display: flex;
    border: 1px solid red;
    align-items: center;
    height: $tabs-height;
    >.actionWrapper {
      margin-left: auto;
    }
  }
</style>