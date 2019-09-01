<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      });
    },
    computed: {
      //计算row的gutter
      rowStyle() {
        let {gutter} = this
        return {
          "margin-left": -gutter / 2 + 'px',
          "margin-right": -gutter / 2 + 'px'
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>