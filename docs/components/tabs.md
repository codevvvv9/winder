---
title: Tabs
---

# Tabs
## Basic Usage
This is the basic usage of the Tabs component.

<ClientOnly>
  <Tabs></Tabs>
</ClientOnly>

``` html
<w-tabs selected="finance">
  <w-tabs-head>
    <w-tabs-item name="sports" :disabled="true"> 体育 </w-tabs-item>
    <w-tabs-item name="finance"> 经济</w-tabs-item>
    <w-tabs-item name="history"> 历史 </w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="sports"> 体育新闻 </w-tabs-pane>
    <w-tabs-pane name="finance"> 财经新闻 </w-tabs-pane>
    <w-tabs-pane name="history"> 历史趣事 </w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```
You can set the **disabled** attribute in the tabs item, and the item has the **name** attribute, which can be selected by default **selected** attribute.