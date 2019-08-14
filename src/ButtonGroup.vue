<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted() {
      // console.log(`this.$children is ${this.$children}`)
      // console.log("this.$children is", this.$children) //this.$children is (3) [VueComponent, VueComponent, VueComponent]
      // console.log("this.$el is", this.$el) // 当前组件的所有子元素
      // console.log("this.$el.children is", this.$el.children) // 当前组件的所有子元素
      for (const node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        // console.log(`name is ${name}`);
        if ( name !== 'button') {
          console.error(`g-button-group的子元素应该全是 g-button,但是您写了 ${name}`)
        }
      }
    },
  }
</script>
<style lang="scss">
  .w-button-group {
    display: inline-flex;
    vertical-align: top; //目前写不写都可以，不知道为什么
    >.w-button {
      border-radius: 0;
      &:not(:first-child) {margin-left: -1px;}
      // margin-left: -1px;

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius)
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius)
      }
      &:hover {position: relative;}
    }
  }
</style>