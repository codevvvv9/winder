# winder - this is a awesome UI framwork using vue

[![Build Status](https://travis-ci.org/codevvvv9/winder.svg?branch=master)](https://travis-ci.org/codevvvv9/winder)

- author: Shaolin Wu

## Introduction

1. `CSS`样式

使用本框架前，先开启`border-box`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

该特性`IE 8`以上支持

---

你还需要设置全局颜色等变量(后续会改为`sass变量`）

```css
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999999;
  --border-color-hover: #666;
}
```

该特性`IE15`以上才支持

2. 安装 `winder-test`

```javascript
npm i --save winder-test
```

3. 引入`winder-test`

```javascript
import { Button } from "winder-test";

export default {
  name: "app",
  components: {
    "w-button": Button
  }
};
```

4. 如果使用`icon`,需要引入`svg`

```javascript
```

## Ecosystem

## Documentation

## Questions

## Issues

## Changelog
