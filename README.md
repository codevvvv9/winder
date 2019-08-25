# winder - this is a awesome UI framwork using vue

[![Build Status](https://travis-ci.org/codevvvv9/winder.svg?branch=master)](https://travis-ci.org/codevvvv9/winder)

- author: Shaolin Wu

## Introduction

1. `CSS` style

Before using this framework, you should use 'border-box'

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

This feature is supported by IE8 and above.

---

You also need to set variables such as global colors (subsequently changed to `sass variable`)

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

This feature is supported by IE15 and above.

2. install `winder-test`

```javascript
npm i --save winder-test
```

3. import `winder-test`

```javascript
import { Button } from "winder-test";

export default {
  name: "app",
  components: {
    "w-button": Button
  }
};
```

## Ecosystem

## Documentation

## Questions

## Issues

## Changelog
