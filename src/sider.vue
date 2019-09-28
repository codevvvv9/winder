<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="handleClose">close</button>
    </div>
  </transition>
</template>
<script>
  export default {
    name: "WinderSider",
    data() {
      return {
        visible: true
      }
    },
    methods: {
      handleClose() {
        this.visible = !this.visible
      }
    },
  }
</script>
<style lang="scss" scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all .5s; 
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px; 
  }

  .sider {
    position: relative;

    >button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
</style>