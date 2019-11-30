<template>
  <div class="popover" @click.stop="popoverClick">
    <div ref="contentWrapper" class="contentWrapper" v-if="contentVisible">
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
      //添加contentWrapper到body,并定位
      setContentWrapperPosition() {
        let contentWrapperEl = this.$refs.contentWrapper
        document.body.appendChild(contentWrapperEl)
        let {
          width,
          height,
          top,
          left
        } = this.$refs.slotWrapper.getBoundingClientRect()
        contentWrapperEl.style.left = `${left+window.scrollX}px`
        contentWrapperEl.style.top = `${top + window.scrollY}px`
      },
      //关闭contentWrapper
      closeContentWrapper() {
        let eventHandler = (e) => {
          if (this.$refs.contentWrapper && !this.$refs.contentWrapper.contains(e.target)) {
            //点击的是内容区域不想关闭弹框
            console.log('button click事件关闭');
            this.contentVisible = false
            document.removeEventListener("click", eventHandler)
          }
        }
        document.addEventListener("click", eventHandler)
      },
      popoverClick(event) {
        let clickTarget = event.target
        if (this.$refs.slotWrapper.contains(clickTarget)) {
          this.contentVisible = !this.contentVisible
          if (this.contentVisible === true) {
            this.$nextTick(() => {
              this.setContentWrapperPosition()
              this.closeContentWrapper()
            })
          }
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