## Tag 标签

对不同事物的属性或维度进行标记和分类的小标签

### 代码演示

::: demo
<summary>
  #### 基本
  * 默认有五种主题颜色的tag，包括`primary` `info` `success` `danger` `warning`，通过`type`来设置
  * 也可以通过设置`color`直接设置颜色(color的优先级高于type)
  * 设置rounded，tag显示为圆弧形
</summary>

```html
<tag type="primary">Tag Primary</tag>
<tag type="info">Tag Info</tag>
<tag type="success">Tag Success</tag>
<tag type="danger">Tag Danger</tag>
<tag type="warning">Tag Warning</tag>
<tag type="primary" color="#f50" :closable="true">Tag Color</tag>
<br><br>
<tag type="primary" rounded>Tag Primary</tag>
<tag type="info" rounded>Tag Info</tag>
<tag type="success" rounded>Tag Success</tag>
<tag type="danger" rounded>Tag Danger</tag>
<tag type="warning" rounded>Tag Warning</tag>
```
:::

::: demo
<summary>
  #### 设置大小
  * tag有四种大小，除了默认大小还包括`small` `medium` `large`,通过`size`来设置
</summary>

```html
<tag type="primary">Size default</tag>
<tag type="info" size="small">Size small</tag>
<tag type="success" size="medium">Tag medium</tag>
<tag type="warning" size="large">Tag large</tag>
```
:::

::: demo
<summary>
  #### 关闭和回调
  * 可通过设置closable实现可关闭，on-close设置关闭时的回调函数
</summary>

```html
<tag type="primary" :closable="true">Tag with close button</tag>
<tag type="warning" size="medium" :closable="true" :on-close="close">Close with callback</tag>
<script>
  export default {
    methods: {
      close() {
        this.$notify.open({
          type: 'success',
          title: 'Tag close callback',
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
| type    | 主题颜色，可选值为`primary` `info` `success` `danger` `warning`   | String | 无    |
| color | 背景色,如#87d087 | String | 无 |
| size | 标签大小，可选值为`small` `medium` `large` | String | 无 |
| rounded | 是否圆弧形 | Boolean | false   |
| closable | 标签是否可关闭  | Boolean | false   |
| on-close | 标签关闭时的回调  | Function | 无   |

<script>
  export default {
    methods: {
      close() {
        this.$notify.open({
          type: 'success',
          title: 'Tag close callback',
        });
      },
    },
  };
</script>
