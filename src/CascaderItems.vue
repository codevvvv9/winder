<template>
  <div class="cascaderItem">
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="index"
        @click="leftSelected = item"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <winder-cascader-items :items="rightItems"></winder-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: "WinderCascaderItems",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      leftSelected: null,
    };
  },
  computed: {
    rightItems() {
      //左边选中了，并且有子选项才渲染右边
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.cascaderItem {
  display: flex;
  //下面两句保证高度不会过分的长
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
    margin-top: -1px;
  }
}
</style>
