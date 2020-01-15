<template>
  <div class="cascader">
    <div class="trigger" @click="handleTrigger"></div>
    <div class="popover" v-if="popoverVisible">
      <div class="level1" >
        <div class="label" v-for="(item1, index) in source" :key="index" 
          @click="level1Selected = item1">
          {{ item1.name }}
        </div>
      </div>
      <div class="level2">
        <div class="label" v-for="(item2, index) in level2Items" :key="index" 
          @click="level2Selected = item2">
          {{ item2.name }}
        </div>
      </div>
      <div class="level3">
        <div class="label" v-for="(item3, index) in level3Items" :key="index">
          {{ item3.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./CascaderItem"
export default {
  name: "WinderCascader",
  props: {
    source: {
      type: Array
    }
  },
  components: {
    CascaderItem
  },
  computed: {
    level2Items() {
      if (this.level1Selected) {
        return this.level1Selected.children
      } else {
        return []
      }
    },
    level3Items() {
      if (this.level2Selected) {
        return this.level2Selected.children
      } else {
        return []
      }
    },
  },
  data() {
    return {
      popoverVisible: false,
      level1Selected: null,
      level2Selected: null,
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
