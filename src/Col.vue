<template>
  <div class="col" :class="[`col-${span}`]">
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
          return value >0 && value < 25
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .col {
    height: 100px;
    width: 50%;
    border: 1px solid red;
    background-color: #666666;
    $class-prefix: col-;

    // loops through 100 times
    @for $n from 1 through 24 {

      // for each $col_#{n}
      &.#{$class-prefix}#{$n} {

        // set the background-color to cornflowerblue and
        // each time lighten the color slightly
        width: ($n / 24) * 100%;
      }
    }
  }
</style>