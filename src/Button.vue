<template>
  <button class="w-button" :class="{ [`icon-${iconPosition}`]: true}" @click="click">
    <w-icon v-if="icon && !loading" :name="icon" class="icon"></w-icon>
    <w-icon class="loading icon" v-if="loading" name="loading"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  // import Vue from 'vue'
  import Icon from './Icon.vue'
  // Vue.component("w-icon", Icon) // 这种是全局注册，没必要
  export default {
    name: "WinderButton",
    components: {
      "w-icon": Icon
    },
    // props: ['icon', 'iconPosition'] // props的数组式写法，直接把props当成数组元素写进去即可
    props: {
      icon: {
        type: String
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          if (value !== 'left' && value !== "right") {
            console.error(`iconPosition只能是left或者right,然而你输入了一个${value}`)
          }
          return value === 'left' || value === 'right'
        }
      }
    },
    methods: {
      click() {
        this.$emit('click')
      }
    },
  };
</script>
<style lang="scss" scoped>
  @keyframes spin {
    0% { transform: rotate(0deg) };
    100% { transform: rotate(360deg) };
  }

  .w-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;

    &:hover { border-color: var(--border-color-hover); }

    &:active { background-color: var(--button-active-bg); }

    &:focus { outline: none; }

    >.icon { order: 1; margin-right: .45em; }

    >.content { order: 2; }

    &.icon-right {
      >.icon { order: 2; margin-left: .45em; margin-right: 0; }

      >.content { order: 1; }

    }

    .loading { animation: spin 2s infinite linear; }
  }
</style>