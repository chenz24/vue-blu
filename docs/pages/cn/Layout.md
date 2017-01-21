## Layout 布局

基于flexbox，强大的布局工具。

如前一章所说，Vue-Blu的布局系统是基于Bulma框架的，下面将对布局的主要内容做一下介绍，更多详情可以参考 [Bulma官方文档](http://bulma.io/documentation/grid/columns/) 。

### 简单布局

::: demo
<summary>
  #### 基本
  1. 添加 class为 `columns` 的容器
  2. 添加 任意多的 `column` 元素
</summary>

```html
<div class="columns">
  <div class="column">
    <p class="notification is-primary">First column</p>
  </div>
  <div class="column">
    <p class="notification is-success">Second column</p>
  </div>
  <div class="column">
    <p class="notification is-warning">Third column</p>
  </div>
  <div class="column">
    <p class="notification is-danger">Fourth column</p>
  </div>
</div>
```
:::

### 12列布局

::: demo
<summary>
  #### 基本
  * 采用12列布局，通过 `is-2` `is-3` `is-4`... 设置column所占的比例
</summary>

```html
<div class="columns">
  <div class="column is-2">
    <p class="notification is-primary"><code>is-2</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-3">
    <p class="notification is-primary"><code>is-3</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centerced">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    <p class="notification is-primary"><code>is-4</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-5">
    <p class="notification is-primary"><code>is-5</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-6">
    <p class="notification is-primary"><code>is-6</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-7">
    <p class="notification is-primary"><code>is-7</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-8">
    <p class="notification is-primary"><code>is-8</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-9">
    <p class="notification is-primary"><code>is-9</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-10">
    <p class="notification is-primary"><code>is-10</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="notification is-success has-text-centered">1</p>
  </div>
</div>

<div class="columns">
  <div class="column is-11">
    <p class="notification is-primary"><code>is-11</code></p>
  </div>
  <div class="column">
    <p class="notification is-warning has-text-centered">1</p>
  </div>
</div>
```
:::

### offset 偏移

::: demo
<summary>
  #### 设置偏移
  * 通过 `is-offset-*` 设置偏移量，如 `is-offset-2`
</summary>

```html
<div class="columns">
  <div class="column is-5 is-offset-2">
    <p class="notification is-primary has-text-centered"><code>is-5</code></p>
  </div>
</div>
<div class="columns">
  <div class="column is-4 is-offset-8">
    <p class="notification is-primary has-text-centered"><code>is-4</code></p>
  </div>
</div>
```
:::


### 去除间隙

::: demo
<summary>
  #### Gapless
  * 通过设置 `is-gapless` 去除column之间的间隙
</summary>

```html
<div class="columns is-gapless">
  <div class="column">
    <p class="notification is-info">First column</p>
  </div>
  <div class="column">
    <p class="notification is-success">Second column</p>
  </div>
  <div class="column">
    <p class="notification is-warning">Third column</p>
  </div>
  <div class="column">
    <p class="notification is-danger">Fourth column</p>
  </div>
</div>
```
:::

### 更多

以上介绍了几个主要的布局方法，另外bulma还有响应式、瀑布式等更多功能的布局方式，这里不再一一介绍，
请到官方网站查看 [Bulma官方文档](http://bulma.io/documentation/grid/columns/)


