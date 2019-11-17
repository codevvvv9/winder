<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "WinderToast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === 'number' 
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        let positionArray = ["top", "bottom", "middle"];
        let index = positionArray.indexOf(value);
        if (index >= 0) {
          return true;
        } else {
          console.error(
            `position is not legal, you enter a error value, ${value}`
          );
          return true;
        }
      }
    }
  },
  created() {},
  computed: {
    toastClasses() {
      let { position } = this;
      return [`position-${position}`];
    }
  },
  mounted() {
    this.updateStyles();
    this.executeClose();
  },
  methods: {
    //执行自动关闭功能
    executeClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    //使用js更新线条的高度
    updateStyles() {
      this.$nextTick(() => {
        // console.log( "this.$refs.toast", this.$refs.toast.getBoundingClientRect() );
        console.log('this.$refs.line', this.$refs.line);
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    //测试，可以在callback中传递实例
    log() {
      console.log("测试");
    },
    onClickClose() {
      this.close();
      //通知调用的被关闭了
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this); //这里this === toast实例
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
$animation-duration: 300ms;

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.wrapper {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;

  &.position-top {
    top: 0;

    .toast {
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-bottom {
    bottom: 0;

    .toast {
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.position-middle {
    animation: fade-in $animation-duration;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.toast {
  min-height: $toast-min-height;
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