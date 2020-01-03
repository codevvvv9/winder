<template>
  <div class="tabsBody">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WinderTabsBody",
  inject: ['eventBus'],
  created() {
  },
}
</script>
<style>
  .tabsBody {
    
  }
</style>