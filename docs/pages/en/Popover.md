## Popover

The floating card popped by clicking or hovering.

-


### Examples

::: demo
<summary>
  #### Basic
  * Three `trigger` modes
  * keep the popover open by setting `always="true"`
  * popover can be disabled
</summary>

```html
<popover title="Basic Popover" :always="false">
  <button class="button is-primary">Basic Popover!</button>
  <div slot="content">
    <h4>全面、灵活且强大的ui组件</h4>
    <ul>
      <li>样式基于<strong>Bulma框架</strong>(Flexbox based)，能够轻松布局并可定制化</li>
    </ul>
  </div>
</popover>

<popover title="Always Popover" content="Duis mollis, est non commodo luctus" :always="true">
  <button class="button is-primary">Always Popover!</button>
</popover>

<popover title="Always Popover" content="Duis mollis, est non commodo luctus" :disabled="true">
  <button class="button is-warning">Disabled Popover!</button>
</popover>

<popover content="No title! Duis mollis, est non commodo luctus">
  <button class="button is-info">No title!</button>
</popover>

```
:::

::: demo
<summary>
  #### Width and Content
  * set width by `width`
  * `slot="content"` to set the content of the popover
</summary>

```html
<popover title="Width Popover" :always="false" :width="400">
  <button class="button is-primary">Width Popover!</button>
  <div slot="content">
    <h4>全面、灵活且强大的ui组件</h4>
    <ul>
      <li>样式基于<strong>Bulma框架</strong>(Flexbox based)，能够轻松布局并可定制化</li>
    </ul>
  </div>
</popover>

<popover title="free content" :width="500">
  <button class="button is-primary">Free content!</button>
  <div slot="content">
    <img class="image" src="https://pek3a.qingstor.com/warehouse1/20161205045719651.jpg" style="float: left;margin-bottom: 8px" width="260">
    <p>这里是亚得里亚海，海龙卷自远处黑暗的云层间从天而降，你来掌镜摄影师Ivan Stulić在克罗地亚一个小岛上拍下了这张照片。
      “眼前的海龙卷距离左边的船只大概只有50-100米的距离，所幸人员和船只都没事。”他这样说道。</p>
  </div>
</popover>

<popover title="Always Popover" content="Duis mollis, est non commodo luctus" trigger="hover">
  <button class="button is-info">Trigger Popover!</button>
</popover>

```
:::



::: demo
<summary>
  #### Placement
  * There are 12 placement options available.
  * Popover can be adapted to the viewport
</summary>

```html
<div class="tooltip-placement">
  <div style="margin-left: 60px">
    <popover title="topLeft" content="popover topLeft popover topLeft!" placement="topLeft">
      <button class="button">topLeft</button>
    </popover>

    <popover title="top" content="popover top!" placement="top">
      <button class="button">top</button>
    </popover>

    <popover title="topRight" content="popover topRight! popover topRight!" placement="topRight">
      <button class="button">topRight</button>
    </popover>
  </div>

  <div style="width: 60px; float: left">
    <popover title="leftTop" content="popover leftTop!" placement="leftTop">
      <button class="button">leftTop</button>
    </popover>

    <popover title="left" content="popover left!" placement="left">
      <button class="button">left</button>
    </popover>

    <popover title="leftBottom" content="popover leftBottom!" placement="leftBottom">
      <button class="button">leftBottom</button>
    </popover>
  </div>

  <div style="width: 60px; margin-left: 360px">
    <popover title="rightTop" content="Basic rightTop!" placement="rightTop">
      <button class="button">rightTop</button>
    </popover>

    <popover title="right" content="popover right!" placement="right">
      <button class="button">right</button>
    </popover>

    <popover title="rightBottom" content="popover rightBottom!" placement="rightBottom">
      <button class="button">rightBottom</button>
    </popover>
  </div>

  <div style="margin-left: 60px; clear: both">
    <popover content="popover bottomLeft! Basic bottomLeft!" placement="bottomLeft">
      <button class="button">bottomLeft</button>
    </popover>

    <popover content="popover bottom!" placement="bottom">
      <button class="button">bottom</button>
    </popover>

    <popover content="popover bottomRight! popover bottomRight!" placement="bottomRight">
      <button class="button">bottomRight</button>
    </popover>
  </div>
</div>
```
:::

### API

| Properties        | Description           | Type        | Default       |
|------------|----------------|-------------------|--------------|
| trigger    | triggering mode: can be hover, focus, or click.| String | hover    |
| title | title of the Popover | String | - |
| content | content of the Popover,can be set by `slot`，such as `<div slot="content">...</div>` | String | - |
| width | width of the Popover | Number | - |
| placement | to set the position, which can be one of：`top` `left` `right` `bottom` `topLeft` `topRight` `leftTop` `leftBottom` `bottomLeft` `rightTop` `rightBottom` | String | - |
| always | Whether the popover is always open | Boolean | false   |
| disabled | Disable the popover  | Boolean | false   |

