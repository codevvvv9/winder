<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      span: {
        type: [Number, String],
        validator(value) {
          if (value < 0 || value > 24) {
            console.error(`span的值只能在(0, 24]之间设置,然而你却设置了span的值为${value}`)
          }
          return value > 0 && value < 25
        }
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      //计算span
      colClass() {
        let {
          span,
          offset
        } = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`
        ]
      },
      //计算gutter
      colStyle() {
        return {
          "padding-left": this.gutter / 2 + 'px',
          "padding-right": this.gutter / 2 + 'px'
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .col {
    height: 100px;
    // width: 50%;
    //grid每一行的布局所占百分比
    $class-prefix: col-;

    // loops through 100 times
    @for $n from 1 through 24 {

      // for each $col_#{n}
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    //grid每一行之间的偏移量
    $class-prefix: offset-;

    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>