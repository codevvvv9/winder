<template lang="">
  <div class="tabsItem" @click="itemClick" :class="tabsItemClasses">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WinderTabsItem",
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    tabsItemClasses() {
      return {
        active: this.active
      }
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      if (this.name === name) {
        this.active = true
      } else {
        this.active = false
      }
    })
  },
  methods: {
    itemClick() {
      this.eventBus.$emit("update:selected", this.name)
    }
  },
}
</script>
<style lang="scss" scoped>
  $color: blue;
  .tabsItem {
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $color;
      font-weight: bold;
    }
  }
</style>