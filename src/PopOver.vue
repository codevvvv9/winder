<template>
  <div class="popover" @click.stop="popoverClick">
    <div ref="contentWrapper" class="contentWrapper" v-if="contentVisible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="slotWrapper">
      <slot></slot>
    </span>
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
      if (this.contentVisible === true) {
        this.$nextTick(() => {
          let contentWrapperEl = this.$refs.contentWrapper
          document.body.appendChild(contentWrapperEl)
          let { width, height, top, left } = this.$refs.slotWrapper.getBoundingClientRect()
          contentWrapperEl.style.left = `${left}px`
          contentWrapperEl.style.top = `${top}px`
          let eventHandler = () => {
            console.log('关闭');
            this.contentVisible = false
            document.removeEventListener("click", eventHandler)
          }
          document.addEventListener("click", eventHandler)
        })
      } else {
        console.log('vm 隐藏content');
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    position: relative;
    vertical-align: top;
  }
    .contentWrapper {
      position: absolute;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      transform: translateY(-100%);
    }
</style>