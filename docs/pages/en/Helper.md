## Helper 帮助说明

Vue-Blu的样式库采用了bulma —— 一套新兴的、基于**Flexbox**、现代化的纯css框架。有着强大的布局功能和丰富的样式设定。就像大家可以在bootstrap上轻松写页面一样，
有了bulma将会大大减轻前端在样式和布局方面的工作量。甚至，bulma在这方面会比bootstrap做的更好。基于bulma构筑的Vue-Blu，可以说有了一个先天的优势。
使用blu不仅可以拥有丰富的Vue组件还可以使用bulma带来的布局和样式上的便利。

基于上面所述，Blu的有些基本组件并没有vue化，而是原生的html、css。其实我们并不主张过度'组件化'，像layout、button之类的元素，原生已经有了足够的表达力，
组件化之后反而会降低效率和灵活性。下面将对bulma的相关基础功能、颜色等做些介绍。

### Helpers

| Member           | Description           |
|----------------|--------------------|
| `is-clearfix`   | Fixes an element's floating children|
|  `is-pulled-left`  | Moves an element to the left(float:left)  |
|  `is-pulled-right`  | Moves an element to the right(float:right)  |
|  `is-overlay`  | Completely covers the first positioned parent  |
|  `is-fullwidth`  | Takes up the whole width (100%)|
|  `has-text-centered`  | Centers the text  |
|  `has-text-left`  | Text is left-aligned  |
|  `has-text-right`  | Text is right-aligned  |
|  `is-disabled`  | Removes any click event  |
|  `is-marginless`  | Removes any margin  |
|  `is-paddingless`  | Removes any padding  |
|  `is-unselectable`  | Prevents the text from being selectable |


### Colors

::: demo
<summary>
  #### 主要颜色
  * 五种主要颜色 `is-primary` `is-info` `is-success` `is-warning` `is-danger`
</summary>

```html
<div class="columns">
  <div class="column">
    <p class="notification is-primary">is-primary</p>
  </div>
  <div class="column">
    <p class="notification is-info">is-info</p>
  </div>
  <div class="column">
    <p class="notification is-success">is-success</p>
  </div>
  <div class="column">
    <p class="notification is-warning">is-warning</p>
  </div>
  <div class="column">
    <p class="notification is-danger">is-danger</p>
  </div>
</div>
```
:::

### 更多说明

`注：` 更多说明请见 [Bulma Documentation](http://bulma.io/documentation/overview/start/)



