<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="contentWrapper" v-if="contentVisible"
      :class="{[`position-${position}`]: true}">
      <slot name="content" :close="close"></slot>
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
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0
        }
      }
    },
    mounted() {
      if(this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.popoverClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    //addEventListener后防止内存泄漏
    destroyed() {
      if(this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.popoverClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
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
        const { width, height, top, left } = slotWrapper.getBoundingClientRect()
        const { height: contentHeight } = contentWrapper.getBoundingClientRect()
        const allPosition = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY + (height - contentHeight)/2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - contentHeight)/2,
            left: left + window.scrollX + width
          },
        }
        contentWrapper.style.top = allPosition[this.position].top + 'px'
        contentWrapper.style.left = allPosition[this.position].left + 'px'
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
        border-bottom: none;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
        border-bottom: none;
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-bottom-color: black;
        border-top: none;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
        border-top: none;
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
        border-right: none;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
        border-right: none;
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
        border-left: none;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
        border-left: none;
      }
    }
  }
</style>