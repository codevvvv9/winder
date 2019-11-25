<template>
  <div class="popover" @click="popoverClick">
    <div class="contentWrapper" v-if="contentVisible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WinderPopover",
  data() {
    return {
      contentVisible: false
    }
  },
  methods: {
    popoverClick() {
      this.contentVisible = !this.contentVisible
    }
  },
}
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    position: relative;
    vertical-align: top;
    .contentWrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)
    }
  }
</style>