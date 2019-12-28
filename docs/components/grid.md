---
title: Grid
---

# Grid
## Basic Usage
This is the basic usage of the Grid component, it contains Col and Row component.

<ClientOnly>
  <Grid></Grid>
</ClientOnly>

``` html
<w-row gutter="20">
  <w-col span="12" class="blueCol">col-12</w-col>
  <w-col span="12" class="darkBlueCol">col-12</w-col>
</w-row>
```
You should use **gutter** in **Row** and use **span** in **Col**, but wrap by default.
In this case, no wrap.

``` css
$first-color: #00a0e9b3;
$second-color: #2fc0ff;
.blueCol {
  background: $second-color;
}
.darkBlueCol {
  background: $first-color
}
.row {
  flex-wrap: nowrap;
}
```
## CSS Media Query
Grid components display differently in different devices size.

<ClientOnly>
  <GridMedia></GridMedia>
</ClientOnly>

``` html
<w-row gutter="20">
  <w-col span="12" class="blueCol" :ipad="ipadObj">col-12</w-col>
  <w-col span="12" class="darkBlueCol">col-12</w-col>
</w-row>
```
In this case ipad need a ipad prop, named ipadObj.

``` javascript
ipadObj: {
  span: "3",
  offset: "2"
}
```

