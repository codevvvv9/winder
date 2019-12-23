---
title: Button
---

# Button

## Basic Use
This is the basic use of the Button component.  

<ClientOnly>
  <Button></Button>
</ClientOnly>

``` html
<w-button>默认按钮</w-button>
<w-button icon="setting">设置</w-button>
<w-button :loading="true">加载</w-button>
<w-button icon="awesome">👍</w-button>
<w-button disabled>禁止</w-button>
<w-button icon="left">上一页</w-button>
<w-button icon="right" iconPosition="right">下一页</w-button>
```

You can use different icons, or disable or set the left and right positions.

## Button Group
when you want to use two or more buttons, there has ButtonGroup component.

<ClientOnly>
  <ButtonGroup></ButtonGroup>
</ClientOnly>

``` html
<w-button-group>
  <w-button icon="setting">设置</w-button>
  <w-button :loading="true">加载</w-button>
  <w-button icon="awesome">👍</w-button>
  <w-button icon="left">上一页</w-button>
  <w-button icon="right" iconPosition="right">下一页</w-button>
</w-button-group>
```
***You might say that there is no difference between the two ways of writing***.

::: tip No No No
:point_up:
If you analyze their DOM structure carefully.

:one: The first way: Every button is in its own DOM.

:two:The second way: Every button is in **div.w-button-group**.
:::
