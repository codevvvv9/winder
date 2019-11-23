<template lang="">
  <div class="tabsItem" @click="onItemClick" :class="tabsItemClasses">
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
        active: this.active,
        disabled: this.disabled
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
    onItemClick() {
      if (!this.disabled) {
        this.eventBus.$emit("update:selected", this.name, this)
      } else {
        console.log('disabled is true');
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  $color: blue;
  $disabled-text-color: gray;
  .tabsItem {
    cursor: pointer;
    padding: 0 2em;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $color;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: no-drop;
    }
  }
</style>