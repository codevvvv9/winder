<template lang="">
  <div class="tabsItem" @click="itemClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WinderTabsItem",
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
  inject: ['eventBus'],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      console.log('name is', name);
    })
  },
  methods: {
    itemClick() {
      this.eventBus.$emit("update:selected", this.name)
    }
  },
}
</script>
<style lang="">
  .tabsItem {
    
  }
</style>