<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WinderCollapse"
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