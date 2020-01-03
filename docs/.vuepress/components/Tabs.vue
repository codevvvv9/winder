<template>
  <div>
    <w-tab selected="item2" direction="vertical">
      <w-tab-item name="item1">item1</w-tab-item>
      <w-tab-item name="item2">item2</w-tab-item>
      <w-tab-item name="item3">item3</w-tab-item>
    </w-tab>
  </div>
</template>

<script>
import Tabs from '../../../src/Tabs'
import TabsItem from '../../../src/TabsItem'
export default {
  components: {
    "w-tab": Tabs,
    "w-tab-item": TabsItem
  },
};
</script>

<style>

</style>
