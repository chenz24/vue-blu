## Form 表单

对于表单的样式和布局等展现方面的实现，我们认为原生的HTML元素加CSS足以满足，特别是有了Bulma。所以Blu的Form基本全部依赖于Bulma。对于某些功能性的表单组件如AutoComplete、Select，
Blu会另有封装。

下面介绍一下Form，内容主要来自于 [http://bulma.io/documentation/elements/form/](http://bulma.io/documentation/elements/form/)

### 代码演示

::: demo
<summary>
  #### 基本
  * 使用 `control` 作为元素的容器
  * 使用 `.label` `.input` `.textarea` `.select` `.checkbox` `.radio` `.button` `.help` 控制相应表单元素的样式
</summary>

```html
<label class="label">Name</label>
<p class="control">
  <input class="input" type="text" placeholder="Text input">
</p>
<label class="label">Username</label>
<p class="control has-icon has-icon-right">
  <input class="input is-success" type="text" placeholder="Text input" value="bulma">
  <i class="fa fa-check"></i>
  <span class="help is-success">This username is available</span>
</p>
<label class="label">Email</label>
<p class="control has-icon has-icon-right">
  <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
  <i class="fa fa-warning"></i>
  <span class="help is-danger">This email is invalid</span>
</p>
<label class="label">Subject</label>
<p class="control">
  <span class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </span>
</p>
<label class="label">Message</label>
<p class="control">
  <textarea class="textarea" placeholder="Textarea"></textarea>
</p>
<p class="control">
  <label class="checkbox">
    <input type="checkbox">
    Remember me
  </label>
</p>
<p class="control">
  <label class="radio">
    <input type="radio" name="question">
    Yes
  </label>
  <label class="radio">
    <input type="radio" name="question">
    No
  </label>
</p>
<p class="control">
  <button class="button is-primary">Submit</button>
  <button class="button is-link">Cancel</button>
</p>
```
:::

#### Color 颜色

::: demo
<summary>
  #### 颜色
  * 五种主题颜色 `is-primary` `is-info` `is-success` `is-warning` `is-danger`
</summary>

```html
<p class="control">
  <input class="input is-primary" type="text" placeholder="Primary input">
</p>
<p class="control">
  <input class="input is-info" type="text" placeholder="Info input">
</p>
<p class="control">
  <input class="input is-success" type="text" placeholder="Success input">
</p>
<p class="control">
  <input class="input is-warning" type="text" placeholder="Warning input">
</p>
<p class="control">
  <input class="input is-danger" type="text" placeholder="Danger input">
</p>
```
:::

#### Size 大小

::: demo
<summary>
  #### 尺寸
  * 针对input和select有效 `is-small` `空` `is-medium` `is-large`
</summary>

```html
<p class="control has-icon">
  <input class="input is-small" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input is-medium" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input is-large" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
```
:::

#### State 状态

::: demo
<summary>
  #### 状态
  * loading 或 disabled `is-loading` `is-disabled`
</summary>

```html
<p class="control is-loading">
  <input class="input" type="text" placeholder="Loading input">
</p>

<p class="control">
  <input class="input" type="text" placeholder="Disabled input" disabled>
</p>
<p class="control">
  <textarea class="textarea" placeholder="Disabled textarea" disabled></textarea>
</p>
<p class="control">
  <label class="checkbox is-disabled">
    <input type="checkbox" disabled>
    Remember me
  </label>
</p>
<p class="control">
  <label class="radio is-disabled">
    <input type="radio" name="question" disabled>
    Yes
  </label>
  <label class="radio is-disabled">
    <input type="radio" name="question" disabled>
    No
  </label>
</p>
<p class="control">
  <button class="button is-primary" disabled>Submit</button>
  <button class="button" disabled>Cancel</button>
</p>

```
:::

#### Icon 配合Font Awesome

::: demo
<summary>
  #### Icon
  * 通过 `has-icon` 轻松设置icon
</summary>

```html
<p class="control has-icon">
  <input class="input" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input" type="password" placeholder="Password">
  <i class="fa fa-lock"></i>
</p>
<p class="control">
  <button class="button is-success">
    Login
  </button>
</p>

<p class="control has-icon has-icon-right">
  <input class="input is-small" type="email" placeholder="Email">
  <i class="fa fa-check"></i>
</p>
```
:::


#### Addons 表单组合

::: demo
<summary>
  #### 组合
  * 通过 `has-addons` 设置表单与按钮等元素的组合显示
  * 通过 `has-addons-centered` `has-addons-right` 设置对齐
</summary>

```html
<p class="control has-addons">
  <input class="input" type="text" placeholder="Find a repository">
  <a class="button is-info">
    Search
  </a>
</p>
<!-- happy divider line -->
<p class="control has-addons">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input is-expanded" type="text" placeholder="Amount of money">
  <a class="button">
    Transfer
  </a>
</p>

<p>对齐方式</p>
<p class="control has-addons has-addons-centered">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input" type="text" placeholder="Amount of money">
  <a class="button is-primary">
    Transfer
  </a>
</p>
<p class="control has-addons has-addons-right">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input" type="text" placeholder="Amount of money">
  <a class="button is-primary">
    Transfer
  </a>
</p>
```
:::

#### 表单组

::: demo
<summary>
  #### 表单组
  * 如果你想把 `control` 容器放在一行， 可以通过在`.control` 上添加 `is-grouped`样式实现
</summary>

```html
<div class="control is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Find a repository">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
  <p class="control has-addons has-addons-right">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
    <input class="input" type="text" placeholder="Amount of money">
    <a class="button is-primary">
      Transfer
    </a>
  </p>
</div>
```
:::


#### 水平表单

::: demo
<summary>
  #### 水平表单
  * 在 `control` 容器上添加 `is-horizontal`
  * 使用 `control-label` 作为label的容器
  * 使用 `control` 作为表单元素的容器
</summary>

```html
<div class="control is-horizontal">
  <div class="control-label">
    <label class="label">From</label>
  </div>
  <div class="control is-grouped">
    <p class="control is-expanded">
      <input class="input" type="text" placeholder="Name">
    </p>
    <p class="control is-expanded">
      <input class="input" type="email" placeholder="Email">
    </p>
  </div>
</div>
<div class="control is-horizontal">
  <div class="control-label">
    <label class="label">Subject</label>
  </div>
  <div class="control">
    <div class="select is-fullwidth">
      <select>
        <option>General enquiry</option>
      </select>
    </div>
  </div>
</div>
<div class="control is-horizontal">
  <div class="control-label">
    <label class="label">Question</label>
  </div>
  <div class="control">
    <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
  </div>
</div>
```
:::

