## Tooltip

A simple text popup tip.

### Examples

::: demo
<summary>
  #### Basic
  * Three `trigger` modes
  * keep the tooltip open by setting `always="true"`
  * Tooltip can be disabled
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
  #### Placement
  * There are 12 placement options available.
  * Tooltip can be adapted to the viewport.
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

| Properties | Description    | Type        | Default       |
|------------|----------------|-------------------|--------------|
| trigger    | triggering mode, can be hover, focus, or click. | String | hover    |
| content    | content of tooltip | String | - |
| placement | to set the position, which can be one of：`top` `left` `right` `bottom` `topLeft` `topRight` `leftTop` `leftBottom` `bottomLeft` `rightTop` `rightBottom` | String | top |
| always | Whether the tooltip is always open | Boolean | false   |
| disabled | Disable the tooltip  | Boolean | false   |


<style>
.tooltip-placement .button{
  width: 120px;
  margin: 5px 0;
}
</style>
