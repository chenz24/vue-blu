## Collapse 折叠面板

可折叠展开的内容区域

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过`accordion`设置是否同时只能展开一个面板
</summary>

```html
<collapse accordion>
  <collapse-item title="Collapsible Group Item #1">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
  <collapse-item title="Collapsible Group Item #2" actived>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
  <collapse-item title="Collapsible Group Item #3">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
</collapse>

```
:::

::: demo
<summary>
  #### 基本
  * 同时打开多个面板
  * 支持嵌套面板
</summary>

```html
<collapse>
  <collapse-item title="Collapsible Group Item #1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
  <collapse-item title="Collapsible Group Item #2" actived>
    <collapse>
      <collapse-item title="Sub Collapse #1">Sub Collapse #1</collapse-item>
      <collapse-item title="Sub Collapse #2">Sub Collapse #2</collapse-item>
    </collapse>
  </collapse-item>
  <collapse-item title="Collapsible Group Item #3" actived>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
</collapse>
```
:::

### API

#### Collapse


| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| accordion | 手风琴模式，即同时只能展开一个面板 | Boolean | false   |


#### CollapseItem


| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| title    | 面板标题   | String | 无    |
| actived | 是否展开 | Boolean | false   |
