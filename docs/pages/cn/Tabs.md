## Tabs 标签页

选项卡切换，常用于内容的收纳和展现

### 代码演示

::: demo
<summary>
  #### 基本
  * 三种样式，默认 `boxed` `toggle`
  * 通过 `slot` 设置内容
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs>
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>

  <div class="column">
    <tabs type="boxed">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

<div class="columns">
  <div class="column">
    <tabs type="toggle">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
```
:::

### 样式和图标

::: demo
<summary>
  #### 样式
  * 通过 `is-full-width` 设置是否占满一行
  * 通过 `size` 设置tab的大小
  * 通过 `alignment` 设置对齐方式 `right` `left` `centered`
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs type="toggle" :is-full-width="true">
      <tab-item label="Pictures" icon="image">Pictures Tab</tab-item>
      <tab-item label="Music" icon="music">Music Tab</tab-item>
      <tab-item label="Videos" icon="film">Video Tab</tab-item>
      <tab-item label="Documents" icon="file-text-o">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
<hr>
<div class="columns">
  <div class="column">
    <tabs size="small">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
  <div class="column">
    <tabs alignment="centered">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

```
:::

### 布局

::: demo
<summary>
  #### 布局
  * 通过 `layout` 设置布局，可选值有 `left / right / bottom / top`
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs layout="left">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>

  <div class="column">
    <tabs layout="right">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Document">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
<hr>
<div class="columns">
  <div class="column">
    <tabs layout="bottom">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

```
:::

### 激活、禁用和回调

::: demo
<summary>
  #### 激活、禁用和回调
  * 通过 `active-index` 设置默认打开第几个选项卡
  * 通过 `disabled` 禁用某个选项卡
  * 通过 `on-tab-click` 设置回调
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs :active-index="2">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>

  <div class="column">
    <tabs>
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music" disabled>Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Document">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
<hr>
<div class="columns">
  <div class="column">
    <tabs :on-tab-click="tabCallback">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

```
:::

### API

#### Tabs

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| type | tab样式类型，可选值有 `boxed / toggle` 和默认  | String | 无 |
| is-full-width  | 是否铺满整行   | Boolean | false    |
| layout | 布局，可选值有 `left / right / bottom / top`  | String | top |
| size | tab大小，可选值为`small / large` | String | 无 |
| alignment | 对齐方式 可选值为`left / right` | String | left   |
| active-index | 初始打开tab的index(从0开始计数)  | Number | 0   |
| on-tab-click | 标签切换时的回调  | Function | 无   |


#### TabItem

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| icon | 图标  | String | 无 |
| label  | tab标签标题   | String(`required`) | 无    |

<script>
export default {
  methods: {
    tabCallback(index) {
      this.$notify.info({
        content: `打开了第 ${index + 1} 个tab`,
      });
    },
  },
};
</script>

