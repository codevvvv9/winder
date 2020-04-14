<template>
  <div class="cascader">
    <div class="trigger" @click="handleTrigger"></div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source" :height="height"></cascader-items>
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
    },
    height: {
      type: String
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
    position: relative;
    .trigger {
      width: 100px;
      height: 32px;
      border: 1px solid red;
    }
    .popover {
      // width: 80px;
      position: absolute;
      background: white;
      // height: 200px; 
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
