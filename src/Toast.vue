<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WinderToast",
  created() {}
};
</script>
<style lang="scss">
$font-size: 14px;
$line-height: 1.8;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
.toast {
  position: fixed;
  height: $toast-height;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: $line-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
}
</style>