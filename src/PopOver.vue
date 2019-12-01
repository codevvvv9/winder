<template>
  <div class="popover" @click.stop="popoverClick" ref="popover">
    <div ref="contentWrapper" class="contentWrapper" v-if="contentVisible">
      <slot name="content"></slot>
    </div>
    <span ref="slotWrapper" style="display: inline-block;">
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
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
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
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    position: relative;
    vertical-align: top;
  }

  .contentWrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    transform: translateY(-100%);
    padding: .5em 1em;
    margin-top: -10px;
    &::before {
      content: "";
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      border-top-color: black;
      position: absolute;
      top: 100%;
      left: 10px;
    }
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top-color: white;
      position: absolute;
      top: calc(100% - 1px);
      left: 10px;
    }
    
  }
</style>