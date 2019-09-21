<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', "right"].includes(value)
        }
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
      },
      //计算row的位置
      rowClass() {
        let {align} = this
        console.log('align', align);
        return [align && `align-${align}`]
      }
    },
  }
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
    //允许换行
    flex-wrap: wrap;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>