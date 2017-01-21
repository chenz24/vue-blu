## Helper 帮助说明

Vue-Blu的样式库采用了bulma —— 一套新兴的、基于**Flexbox**、现代化的纯css框架。有着强大的布局功能和丰富的样式设定。就像大家可以在bootstrap上轻松写页面一样，
有了bulma将会大大减轻前端在样式和布局方面的工作量。甚至，bulma在这方面会比bootstrap做的更好。基于bulma构筑的Vue-Blu，可以说有了一个先天的优势。
使用blu不仅可以拥有丰富的Vue组件还可以使用bulma带来的布局和样式上的便利。

基于上面所述，Blu的有些基本组件并没有vue化，而是原生的html、css。其实我们并不主张过度'组件化'，像layout、button之类的元素，原生已经有了足够的表达力，
组件化之后反而会降低效率和灵活性。下面将对bulma的相关基础功能、颜色等做些介绍。

### 帮助类

| 成员           | 说明               |
|----------------|--------------------|
| `is-clearfix`   | 清除浮动 |
|  `is-pulled-left`  | 左浮动 即float:left  |
|  `is-pulled-right`  | 右浮动 即float:right  |
|  `is-overlay`  | 完全覆盖父层  |
|  `is-fullwidth`  | 占据全部宽度  |
|  `has-text-centered`  | 文字居中  |
|  `has-text-left`  | 文字居左  |
|  `has-text-right`  | 文字居右  |
|  `is-disabled`  | 禁止click事件  |
|  `is-marginless`  | 去除margin  |
|  `is-paddingless`  | 去除padding  |
|  `is-unselectable`  | 禁止文字被选中  |


### 颜色

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



