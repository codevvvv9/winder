<template>
  <div>
    <w-tabs selected="finance">
      <w-tabs-head>
        <w-tabs-item name="sports"> 体育 </w-tabs-item>
        <w-tabs-item name="finance"> 经济</w-tabs-item>
        <w-tabs-item name="history"> 历史 </w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="sports"> 体育新闻 </w-tabs-pane>
        <w-tabs-pane name="finance"> 财经新闻 </w-tabs-pane>
        <w-tabs-pane name="history"> 历史趣事 </w-tabs-pane>
      </w-tabs-body>
    </w-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/Tabs'
  import TabsItem from '../../../src/TabsItem'
  import TabsHead from '../../../src/TabsHead.vue'
  import TabsBody from '../../../src/TabsBody.vue'
  import TabsPane from '../../../src/TabsPane.vue'
  export default {
    components: {
      "w-tabs": Tabs,
      "w-tabs-item": TabsItem,
      "w-tabs-head": TabsHead,
      "w-tabs-body": TabsBody,
      "w-tabs-pane": TabsPane
    },
  };
</script>

<style>

</style>