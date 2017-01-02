## Tooltip 文字提示

简单的文字提示气泡框，常用于鼠标hover时

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过`trigger`设置触发方式
  * 设置`always`为true，tooltip会保持打开状态
  * 设置`disabled`为true，tooltip会被禁用
</summary>

```html
<tooltip content="Basic Tooltip!">
  <button class="button">Basic Tooltip</button>
</tooltip>

<tooltip content="Tooltip Trigger!" trigger="click">
  <button class="button is-primary">Click Trigger</button>
</tooltip>

<tooltip content="Tooltip Always!" :always="true">
  <button class="button is-primary">Tooltip Always</button>
</tooltip>

<tooltip content="Tooltip Disabled!" :disabled="true">
  <button class="button is-primary">Tooltip Disabled</button>
</tooltip>
<br><br>
<p class="control">
  <tooltip content="Focus Tooltip！" trigger="focus">
    <input class="input" type="text" placeholder="Focus Tooltip！">
  </tooltip>
</p>
```
:::


::: demo
<summary>
  #### 显示位置
  * tooltip有12个可选位置
  * tooltip可根据离视图距离自适应位置
</summary>

```html
<div class="tooltip-placement">
  <div style="margin-left: 60px">
    <tooltip content="Tooltip topLeft Tooltip topLeft!" placement="topLeft">
      <button class="button">topLeft</button>
    </tooltip>

    <tooltip content="Tooltip top!" placement="top">
      <button class="button">top</button>
    </tooltip>

    <tooltip content="Tooltip topRight! Tooltip topRight!" placement="topRight">
      <button class="button">topRight</button>
    </tooltip>
  </div>

  <div style="width: 60px; float: left">
    <tooltip content="Tooltip leftTop!" placement="leftTop">
      <button class="button">leftTop</button>
    </tooltip>

    <tooltip content="Tooltip left!" placement="left">
      <button class="button">left</button>
    </tooltip>

    <tooltip content="Tooltip leftBottom!" placement="leftBottom">
      <button class="button">leftBottom</button>
    </tooltip>
  </div>

  <div style="width: 60px; margin-left: 360px">
    <tooltip content="Basic rightTop!" placement="rightTop">
      <button class="button">rightTop</button>
    </tooltip>

    <tooltip content="Tooltip right!" placement="right">
      <button class="button">right</button>
    </tooltip>

    <tooltip content="Tooltip rightBottom!" placement="rightBottom">
      <button class="button">rightBottom</button>
    </tooltip>
  </div>

  <div style="margin-left: 60px; clear: both">
    <tooltip content="Tooltip bottomLeft! Basic bottomLeft!" placement="bottomLeft">
      <button class="button">bottomLeft</button>
    </tooltip>

    <tooltip content="Tooltip bottom!" placement="bottom">
      <button class="button">bottom</button>
    </tooltip>

    <tooltip content="Tooltip bottomRight! Tooltip bottomRight!" placement="bottomRight">
      <button class="button">bottomRight</button>
    </tooltip>
  </div>
</div>
```
:::

### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|--------------|
| trigger    | 触发方式  | String | hover    |
| content | 内容 | String | 无 |
| placement | 位置，可选值：`top` `left` `right` `bottom` `topLeft` `topRight` `leftTop` `leftBottom` <br> `bottomLeft` `rightTop` `rightBottom` | String | 无 |
| always | 是否保持打开状态 | Boolean | false   |
| disabled | 是否禁用  | Boolean | false   |


<style>
.tooltip-placement .button{
  width: 120px;
  margin: 5px 0;
}
</style>
