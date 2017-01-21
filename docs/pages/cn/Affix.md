## Affix 固钉

将元素钉在固定位置，常用于顶部菜单或者侧边菜单

### 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法
</summary>

```html
<affix>
  <button class="button is-primary">固定在顶部</button>
</affix>
```
:::

::: demo
<summary>
  #### 设置偏移量
  设置距离顶部达到指定距离时触发
</summary>

```html
<affix :offset="200">
  <button class="button is-primary">固定距离顶部200px的位置</button>
</affix>
```
:::

::: demo
<summary>
  #### 设置边界父容器
  指定父容器ID后，affix元素会在父容器内浮动，即给浮动元素指定了边界
</summary>

```html
<div id="parent" style="height: 120px; text-align: center">
  <affix :offset="0" boundary="#parent">
    <button class="button is-primary">在指定容器内浮动</button>
  </affix>
</div>
```
:::

::: demo
<summary>
  #### 回调函数
  可设置固定状态改变时触发的回调函数
</summary>

```html
<div style="text-align: right">
  <affix :on-affix="onAffixed">
    <button class="button is-primary">触发回调</button>
  </affix>
</div>
<script>
export default {
  methods: {
    onAffixed(status) {
      this.$notify.open({
        type: 'success',
        title: `回调状态${status}`,
      });
    },
  },
};
</script>
```
:::



### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| offset    | 距离窗口顶部达到指定偏移量后触发   | Number |    0     |
| boundary | 设置 `Affix` 的活动范围，值为affix上级元素的id(可以是父元素，也可以是父元素的父元素...)| String(#parent) |
| on-affix | 固定状态改变时触发的回调函数   | Function(affixed) | 无        |


<script>
  export default {
    methods: {
      onAffixed(status) {
        this.$notify.open({
          type: 'success',
          title: `回调状态${status}`,
        });
      },
    },
  };
</script>
