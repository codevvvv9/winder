<template lang="">
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: "WinderTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  created() {
    // this.$emit("update:selected", "emitMessage")
    // console.log('this.eventBus', this.eventBus);
    // console.log('this', this);
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "WinderTabsHead") {
        vm.$children.forEach(childVm => {
          if (childVm.$options.name === "WinderTabsItem" && childVm.name === this.selected) {
            this.eventBus.$emit("update:selected", this.selected, childVm)
          }
        });
      }
    });
  },
}
</script>
<style lang="">
  .tabs {

  }
</style>