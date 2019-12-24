---
title: Input
---

# Input
## Basic Usage
This is the basic usage of the Button component, you can set a property called *value* that will prompt you for your input.

<ClientOnly>
  <Input></Input>
</ClientOnly>

``` html
<w-input value="请输入姓名"></w-input>
```
All Input Component have four methods.

``` javascript
@change="$emit('change', $event.target.value)" 
@input="$emit('input', $event.target.value)"
@focus="$emit('focus', $event.target.value)"
@blur="$emit('blur', $event.target.value)"
```
## Use Disabled
In this case, user can't enter.

<ClientOnly>
  <InputDisabled></InputDisabled>
</ClientOnly>

``` html
<w-input :disabled="true"></w-input>
```
## Readonly
In this case, input is readonly.

<ClientOnly>
  <InputReadonly></InputReadonly>
</ClientOnly>

``` html
<w-input :readonly="true" value="这是只读的"></w-input>
```
## Error Message
In this case, you got a error messgae.

<ClientOnly>
  <InputError></InputError>
</ClientOnly>

``` html
<w-input error="用户名输入错误"></w-input>
```
