<template>
  <div class="popover" @click.stop="popoverClick" ref="popover">
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
      //点击事件的监听器
      eventHandler(e) {
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
          return
        }
        this.close()
      },
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
      open() {
        this.contentVisible = true
        this.$nextTick(() => {
          this.setContentWrapperPosition()
          document.addEventListener("click", this.eventHandler)
        })
      },
      close() {
        this.contentVisible = false
        document.removeEventListener("click", this.eventHandler)
      },
      popoverClick(event) {
        let clickTarget = event.target
        if (this.$refs.slotWrapper.contains(clickTarget)) {
          if (this.contentVisible === true) {
            this.close()
          } else {
            this.open()
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