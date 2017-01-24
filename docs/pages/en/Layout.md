## Layout

Flexbox based，Powerful layout tool.

As mentioned in the previous chapter, Vue-Blu's layout system is based on the Bulma framework,The following will
introduce the main contents of the layout，More details can refer to [Bulma documentation](http://bulma.io/documentation/grid/columns/) 。

### Basic

::: demo
<summary>
  #### Basic usage
  1. Add a `columns` container
  2. Add as many `column` elements as you want
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

### 12 columns

::: demo
<summary>
  #### grid system
  * As the grid can be divided into 12 columns, there are size classes for each division:
  * `is-2` `is-3` `is-4`...
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

### Offset

::: demo
<summary>
  #### offset
  * you can use offset modifiers like `.is-offset-x` to create horizontal space around .column elements
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


### Gapless

::: demo
<summary>
  #### Gapless
  * If you want to remove the space between the columns, add the is-gapless modifier on the columns container:
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

### More

The above describes several major layout methods of Bulma,for more information(such as responsive,waterfall..)
please refer to the official site of Bulma -- [Bulma documentation](http://bulma.io/documentation/grid/columns/)


