<template lang="">
  <div class="tabsHead">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default {
  name: "WinderTabsHead",
  inject: ['eventBus'],
}
</script>
<style lang="">
  .tabsHead {
    
  }
</style>