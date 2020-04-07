<template>
  <div class="cascader">
    <div class="trigger" @click="handleTrigger"></div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./CascaderItems"
export default {
  name: "WinderCascader",
  props: {
    source: {
      type: Array
    }
  },
  components: {
    CascaderItems
  },
  data() {
    return {
      popoverVisible: false
    }
  },
  methods: {
    handleTrigger() {
      this.popoverVisible = !this.popoverVisible
    }
  },
};
</script>

<style scoped lang="scss">
  @import "var";
  .cascader {
    .trigger {
      width: 100px;
      height: 32px;
      border: 1px solid red;
    }
    .popover {
      // width: 80px;
      height: 200px; 
      display: flex;
      border: 2px solid green;
      .label {
        white-space: nowrap;
      }
    }
  }
  .label {
    border: 1px solid red;
  }
</style>
