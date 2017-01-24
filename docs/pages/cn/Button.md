## Button 按钮

通过按钮触发一个操作/事件

### 代码演示

::: demo
<summary>
  #### 基本
  * 六种色调 除了default还包括`primary` `info` `success` `danger` `warning`
  * 四种大小，除了默认大小还包括`small` `medium` `large`
</summary>

```html
<a class="button is-white">White</a>
<a class="button is-light">Light</a>
<a class="button is-dark">Dark</a>
<a class="button is-black">Black</a>
<a class="button is-link">Link</a>
<br><br>

<a class="button">Button</a>
<a class="button is-primary">Primary</a>
<a class="button is-info">Info</a>
<a class="button is-success">Success</a>
<a class="button is-warning">Warning</a>
<a class="button is-danger">Danger</a>
<br><br>

<a class="button is-small">Small</a>
<a class="button">Normal</a>
<a class="button is-medium">Medium</a>
<a class="button is-large">Large</a>
```
:::

#### 不同Style

::: demo
<summary>
  #### 不同Style
  * 通过设置 `is-outlined` 显示边框
  * Inverted，文字颜色和背景颜色颠倒互换
</summary>

```html
<a class="button is-outlined">Outlined</a>
<a class="button is-primary is-outlined">Outlined</a>
<a class="button is-info is-outlined">Outlined</a>
<a class="button is-success is-outlined">Outlined</a>
<a class="button is-danger is-outlined">Outlined</a>
<br><br>

<a class="button is-primary is-inverted">Inverted</a>
<a class="button is-info is-inverted">Inverted</a>
<a class="button is-success is-inverted">Inverted</a>
<a class="button is-danger is-inverted">Inverted</a>
<br><br>
<a class="button is-danger is-outlined is-fullwidth">Outlined</a>

```
:::

#### States 状态

::: demo
<summary>
  #### 不同状态
  * 通过设置 `is-loading` 显示加载中
  * 通过设置 `is-active` 显示激活状态
  * 通过设置 `is-disabled` 禁用
</summary>

```html
<a class="button is-loading">Loading</a>
<a class="button is-primary is-loading">Loading</a>
<a class="button is-info is-loading">Loading</a>
<a class="button is-success is-loading">Loading</a>
<a class="button is-warning is-loading">Loading</a>
<a class="button is-danger is-loading">Loading</a>
<br><br>

<a class="button is-active">Active</a>
<a class="button is-primary is-active">Active</a>
<a class="button is-info is-active">Active</a>
<a class="button is-success is-active">Active</a>
<a class="button is-warning is-active">Active</a>
<a class="button is-danger is-active">Active</a>
<br><br>

<a class="button is-disabled">Disabled</a>
<a class="button is-primary is-disabled">Disabled</a>
<a class="button is-info is-disabled">Disabled</a>
<a class="button is-success is-disabled">Disabled</a>
<a class="button is-warning is-disabled">Disabled</a>
<a class="button is-danger is-disabled">Disabled</a>
```
:::

::: demo
<summary>
  #### Icon 图标
  * 可内嵌图标，具体见下面代码
</summary>

```html
<a class="button">
  <span class="icon">
    <i class="fa fa-github"></i>
  </span>
  <span>GitHub</span>
</a>
<a class="button is-primary">
  <span class="icon">
    <i class="fa fa-twitter"></i>
  </span>
  <span>Twitter</span>
</a>
<a class="button is-success">
  <span class="icon">
    <i class="fa fa-check"></i>
  </span>
  <span>Save</span>
</a>
<a class="button is-danger">
  <span>Delete</span>
  <span class="icon">
    <i class="fa fa-times"></i>
  </span>
</a>
<a class="button is-danger is-outlined">
  <span class="icon"><i class="fa fa-times"></i></span>
  <span>Delete</span>
</a>
```
:::

::: demo
<summary>
  #### 按钮组
  * 按钮可成组显示
</summary>

```html
<p class="control has-addons">
  <a class="button">
    <span class="icon is-small">
      <i class="fa fa-align-left"></i>
    </span>
    <span>Left</span>
  </a>
  <a class="button">
    <span class="icon is-small">
      <i class="fa fa-align-center"></i>
    </span>
    <span>Center</span>
  </a>
  <a class="button">
    <span class="icon is-small">
      <i class="fa fa-align-right"></i>
    </span>
    <span>Right</span>
  </a>
</p>

<p class="control has-addons">
  <a class="button is-primary">
    <span class="icon is-small"><i class="fa fa-angle-left"></i></span>
    <span>Go back</span>
  </a>
  <a class="button is-primary">
    <span>Go Forward</span>
    <span class="icon is-small"><i class="fa fa-angle-right"></i></span>
  </a>
</p>
```
:::


