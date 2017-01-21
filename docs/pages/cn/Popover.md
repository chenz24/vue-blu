## Popover 气泡弹出框

鼠标click/hover，弹出气泡似的浮层。类似popover，但可承载更多内容

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过`trigger`设置触发方式
  * 可通过slot设置内容
  * 设置`always`为true，popover会保持打开状态
  * 设置`disabled`为true，popover会被禁用
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
  #### 基本
  * 通过`width`设置宽度
  * 通过slot='content'设置内容
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
  #### 显示位置
  * popover有12个可选位置
  * popover可根据离视图距离自适应位置
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

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|--------------|
| trigger    | 触发方式，`hover` `click` `focus`  | String | hover    |
| title | 标题 | String | 无 |
| content | 内容,可通过 `slot`设置，如 `<div slot="content">...</div>` | String | 无 |
| width | 宽度 | Number | 无 |
| placement | 位置，可选值：`top` `left` `right` `bottom` `topLeft` `topRight` `leftTop` `leftBottom` <br> `bottomLeft` `rightTop` `rightBottom` | String | 无 |
| always | 是否保持打开状态 | Boolean | false   |
| disabled | 是否禁用  | Boolean | false   |

