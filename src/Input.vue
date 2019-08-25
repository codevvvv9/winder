<template>
  <div class="wrapper" :class="{'error': error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon class="icon-error" name="error"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './Icon.vue'
  export default {
    components: {
      Icon
    },
    name: "winder-input", // name属性可以使用dev-tools方便调试
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgb(0, 0, 0, 0.5);
  $border-error: #f1453d;
  .wrapper {
    display: inline-flex;
    font-size: $font-size;
    align-items: center;
    > *:not(:last-child) { margin-right: .5em;}
    > input { height: $height; border: 1px solid $border-color; padding: 0 8px; border-radius: $border-radius; font-size: inherit; &:hover { border-color: $border-color-hover; }
      &:focus { outline: none; box-shadow: 0 1px 3px 0px $box-shadow-color; }
      &[disabled], &[readonly] { border-color: #aaaaaa; color: #aaaaaa; cursor: not-allowed; }
    }
    &.error {
      > input {
        border-color: $border-error;
      }
    }
    .icon-error {
      fill: #f1453d;
    }
    .error-message {
      color: #f1453d;
    }
  }
</style>