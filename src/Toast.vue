<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</span>
  </div>
</template>
<script>
  export default {
    name: "WinderToast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        type: Object,
        default () {
          return {
            text: "关闭",
            callback: undefined
          };
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    created() {},
    mounted() {
      this.updateStyles()
      this.executeClose()
    },
    methods: {
      //执行自动关闭功能
      executeClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close();
          }, this.autoCloseDelay * 1000);
        }
      },
      //使用js更新线条的高度
      updateStyles() {
        this.$nextTick(() => {
          console.log('this.$refs.toast', this.$refs.toast.getBoundingClientRect());
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      close() {
        this.$el.remove();
        this.$destroy();
      },
      //测试，可以在callback中传递实例
      log() {
        console.log('测试');
      },
      onClickClose() {
        this.close()
        //通知调用的被关闭了
        if (this.closeButton && typeof this.closeButton.callback === "function") {
          this.closeButton.callback(this) //这里this === toast实例
        }
      }
    }
  };
</script>
<style lang="scss">
  $font-size: 14px;
  $line-height: 1.8;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);

  .toast {
    position: fixed;
    min-height: $toast-min-height;
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
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }

    .line {
      border-left: 1px solid #666;
      // height: 100%;
      margin-left: 16px;
    }
  }
</style>