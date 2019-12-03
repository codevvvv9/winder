<template>
  <div class="popover" @click.stop="popoverClick" ref="popover">
    <div ref="contentWrapper" class="contentWrapper" v-if="contentVisible"
      :class="{[`position-${position}`]: true}">
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
    props: {
      position: {
        type: String,
        default: "top",
        validator(position) {
          return ['top', 'bottom', 'left', 'right'].indexOf(position) >= 0
        }
      }
    },
    methods: {
      //点击事件的监听器
      eventHandler(e) {
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
          return
        }
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
          return
        }
        this.close()
      },
      //添加contentWrapper到body,并定位
      setContentWrapperPosition() {
        const { contentWrapper, slotWrapper } = this.$refs
        document.body.appendChild(contentWrapper)
        let { width, height, top, left } = slotWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          contentWrapper.style.left = `${left+window.scrollX}px`
          contentWrapper.style.top = `${top + window.scrollY}px`
        } else if (this.position === 'bottom') {
          contentWrapper.style.left = `${left+window.scrollX}px`
          contentWrapper.style.top = `${top + height + window.scrollY}px`
        } else if (this.position === 'left') {
          contentWrapper.style.left = `${left+window.scrollX}px`
          let { height: contentHeight } = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = `${top + window.scrollY + (height - contentHeight)/2}px`
        } else if (this.position === 'right') {
          contentWrapper.style.left = `${left+window.scrollX + width}px`
          let { height: contentHeight } = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = `${top + window.scrollY + (height - contentHeight)/2}px`
        }
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
    padding: .5em 1em;
    max-width: 20em;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    word-break: break-all;
    background: white;
    &::before, &::after {
      content: "";
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%)
      }
      &::before {
        left: 100%;
        border-left-color: black;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%)
      }
      &::before {
        right: 100%;
        border-right-color: black;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }
</style>