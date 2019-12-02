---
slug: '/5-ways-to-center-align-in-css'
date: '2019-12-01'
updatedAt: '2019-12-01'
title: '5 Ways to Center Align in CSS'
# Description should be no more than 160 characters in length
description: '5 ways to achieve (vertical and horizontal) center alignment in CSS'
categories: ['css']
banner: './images/banner.png'
---

import Link from "$components/Link";
import Quote from "$components/mdx/Quote";

![banner](./images/banner.png)

I will show you 5 different ways to center align an element vertically and horizontally within its parent element. Below is our HTML markup. Our goal is to center align `child-box` within `box`.


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <div id="app">
      <div class="box">
        <div class="child-box"></div>
      </div>
    </div>
  </body>

  <style type="text/css">
    body {
      background: #051221;
    }
  </style>
</html>
```
---

![fixedWidthHeight](./images/result.jpg)
<span class="caption">Final result</span>

### 1. Absolute positioning + negative margin

```css
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #564787;
  position: relative;
}

.child-box {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #da4267;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
```

### 2. Absolute positioning + transform

```css
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #564787;
  position: relative;
}

.child-box {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #da4267;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

### 3. Auto margin

```css
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #564787;
  position: relative;
}

.child-box {
  width: 100px;
  height: 100px;
  margin: 25% 25%;
  /* or equivalently: */
  /* margin: 25% auto; */
  /* margin: auto auto; does NOT work */
  /* because if `margin-top` or `margin-bottom` is `auto`, */
  /* their used value is 0 */
  background: #da4267;
}
```

### 4. Flexbox

```css
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #564787;
  display: flex;
  justify-content: center;
  align-items: center;
}

.child-box {
  width: 100px;
  height: 100px;
  background: #da4267;
}
```

### 5. Grid

```css
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #564787;
  display: grid;
}

.child-box {
  margin: auto;
  width: 100px;
  height: 100px;
  background: #da4267;
}
```
