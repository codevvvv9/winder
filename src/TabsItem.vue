<template lang="">
  <div class="tabsItem">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WinderTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="">
  .tabsItem {
    
  }
</style>