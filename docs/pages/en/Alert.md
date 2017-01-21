## Alert

Alert message，show information that need to pay attention to.

### Examples

::: demo
<summary>
  #### Basic
  * There are 6 types of Alert : `primary` `info` `success` `danger` `warning`，sets it by `type` parameter
  * Enable or disable close button by setting `closable` parameter
  * type为`loading`时，显示动态载入效果
</summary>

```html
<alert>
  Well done! You successfully read this important alert message.
</alert>

<alert title="well done!" type="primary">
  Well done! You successfully read this important alert message.
</alert>

<alert title="info!" type="info" :closable="true">
  Well done! You successfully read this important alert message.
</alert>

<alert title="success!" type="success" :closable="true">
  Well done! You successfully read this important alert message.
</alert>


<alert title="warning!" type="warning" :closable="true">
  Well done! You successfully read this important alert message.
</alert>

<alert title="danger!" type="danger" :closable="true">
  Well done! You successfully read this important alert message.
</alert>

<alert type="loading">
  Loading! You successfully read this important alert message.
</alert>

```
:::

::: demo
<summary>
  #### 图标和关闭回调
  * 通过`icon` 可设置图标，`animated`设置是否动画
  * `on-close`设置关闭时的回调
</summary>

```html
<alert title="well done!" type="primary" icon="smile-o">
  Well done! You successfully read this important alert message.
</alert>

<alert title="well done!" type="warning" :animated="true" icon="meh-o">
  Well done! You successfully read this important alert message.
</alert>

<alert title="回调" type="success" :closable="true" :on-close="close">
  Well done! You successfully read this important alert message.
</alert>

```
:::


### API

| Properties        | Description           | Type               | Default       |
|------------|----------------|--------------------|--------------|
| type    | 主题颜色，可选值为`primary` `info` `success` `danger` `warning` `loading`   | String | 无    |
| title    | 标题 | String | 无   |
| icon    | 图标 | String | 无   |
| animated  | 图标是否旋转 | Boolean | false  |
| closable | 是否可关闭  | Boolean | false   |
| on-close | 关闭时的回调  | Function | 无   |

<script>
  export default {
    methods: {
      close() {
        this.$notify.open({
          type: 'success',
          title: 'alert close callback',
        });
      },
    },
  };
</script>
