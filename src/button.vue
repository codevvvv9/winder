<template>
  <button class="w-button" :class="{ [`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    // props: ['icon', 'iconPosition'] // props的数组式写法，直接把props当成数组元素写进去即可
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          console.log('value is', value);
          
          if (value !== 'left' && value !== 'right') {
            return false
          } else {
            return true
          }
        }
      }
    }
  };
</script>
<style lang="scss">
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
    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
    > .icon {
      order: 1;
      margin-right: .45em;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .45em;
        margin-right: 0;
      }
      > .content {
        order: 1;
      }
    }
  }
</style>