<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
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
      offset: { type: [Number, String] },
      // phone: { type: Object, validator },
      ipad: { type: Object, validator, },
      narrowPc: { type: Object, validator, },
      pc: { type: Object, validator, },
      widePc: { type: Object, validator, }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      //计算span
      colClass() {
        let { span, offset, ipad, narrowPc, pc, widePc } = this
        let phoneClass = []
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          // ...(phone && [`col-phone-${phone.span}`]),
          ...(ipad ? [`col-ipad-${ipad.span}`] : []),
          ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
          ...(pc ? [`col-pc-${pc.span}`] : []),
          ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
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
    //grid每一行的布局所占百分比
    $class-prefix: col-;

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

    @media (min-width: 577px) and (max-width: 768px) {
      $class-prefix: col-ipad-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-narrow-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-wide-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>