---
title: Layout
---

# Layout
## Basic Usage
This is the basic usage of the Layout component, it contain four parts-header,content,footer or sider.

<ClientOnly>
  <LayoutDemo></LayoutDemo>
</ClientOnly>

``` html
<w-layout>
  <w-header class="w-header">header</w-header>
  <w-content class="w-content">content</w-content>
  <w-footer class="w-footer">footer</w-footer>
</w-layout>
<style>
  .w-header, .w-footer {
    text-align: center;
    line-height: 60px;
    background: #b3c0d1;
  }
  .w-content {
    line-height: 160px;
    background: #e9eef3;
    text-align: center;
  }
</style>
```
## Sider
Of course, there will be classic sidebars for layout components.
<ClientOnly>
  <LayoutSider></LayoutSider>
</ClientOnly>

``` html
<w-layout>
  <w-sider class="w-sider">sider</w-sider>
  <w-layout>
    <w-header class="w-header">header</w-header>
    <w-content class="w-content">content</w-content>
    <w-footer class="w-footer">footer</w-footer>
  </w-layout>
</w-layout>
<style>
  .w-header,
  .w-footer {
    text-align: center;
    line-height: 60px;
    background: #b3c0d1;
  }

  .w-content {
    line-height: 160px;
    background: #e9eef3;
    text-align: center;
  }

  .w-sider {
    width: 100px;
    background: #d3dce6;
  }
</style>
```
when you use sider, this Layout component will change flex-direction from **column** to **row**.
