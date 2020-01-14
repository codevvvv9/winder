<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <winder-cascader-item
      :sourceItem="item"
      v-for="(item, index) in sourceItem.children"
      :key="index"
      v-if="sourceItem.children">
    </winder-cascader-item>
  </div>
</template>

<script>
const componentItem =  {
  name: "WinderCascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  },
  components: {
    WinderCascaderItem: componentItem
  },
};
export default componentItem
</script>

<style scoped lang="scss">
  .cascaderItem {
    border: 1px solid red;
    margin: 10px;
  }
</style>
