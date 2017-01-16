## ScrollTo 滚动工具

平滑滚动到指定位置，预设了'滚动到顶部'，本功能基于小巧精悍的 [jump.js](https://github.com/callmecavs/jump.js)

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过 `target` 指定目标，target的值可以是任意css的选择器，如 `'.target' '#id1'`
  * 当 `target='top'` 时，会触发内置的 '返回到顶部',即在页面右下角显示返回顶部的箭头按钮
  * 通过 `distance` 设置滚动距离(优先级高于target)，正值向下滚动，负值向上滚动
</summary>

```html
<scroll-to target="#t2">
  <button class="button is-primary" id="t1">t1，滚动到id为 `t2` 的元素</button>
</scroll-to>

<scroll-to :distance="500">
  <button class="button is-primary">向下滚动500px</button>
</scroll-to>

<div style="width: 200px;height: 1000px; margin: 10px;border: 1px solid #ddd">长div</div>
<scroll-to target="#t1">
  <button class="button is-outlined" id="t2">我是t2，滚回到t1</button>
</scroll-to>
<scroll-to :distance="-500">
  <button class="button is-primary">向上滚动500px</button>
</scroll-to>
```
:::

### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| target  | 目标，target的值可以是任意css的选择器，如 `'.target' '#id1'`.当 `target='top'` 时，会触发内置的 '返回到顶部'，即在页面右下角显示返回顶部的箭头按钮  | String | 无    |
| duration | 滚动时间，单位毫秒 | Number | 500 |
| distance | 滚动距离(优先级高于target)，正值向下滚动，负值向上滚动 | Number | 无 |

<div style="width: 200px;height: 1000px;margin: 10px; "></div>


