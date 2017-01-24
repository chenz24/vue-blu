## Alert

Alert message，show information that need to pay attention to.

### Examples

::: demo
<summary>
  #### Basic
  * There are 6 types of Alert : `primary` `info` `success` `danger` `warning` and default，sets it by `type` parameter
  * Enable or disable close button by setting `closable` parameter
  * Show loading icon when the `type='loading'`
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
  #### Icon and Callback
  * Sets icon by `icon`，when `:animated="true"` the icon can spin
  * Sets close callback by `on-close`
</summary>

```html
<alert title="well done!" type="primary" icon="smile-o">
  Well done! You successfully read this important alert message.
</alert>

<alert title="well done!" type="warning" :animated="true" icon="meh-o">
  Well done! You successfully read this important alert message.
</alert>

<alert title="Callback" type="success" :closable="true" :on-close="close">
  Well done! You successfully read this important alert message.
</alert>

```
:::


### API

| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| type    | Type of Alert styles，accepted values: `primary` `info` `success` `danger` `warning` `loading`   | String | default    |
| title    | Sets the alert title | String | -   |
| icon    | Sets the alert icon | String | -   |
| animated  | Whether the icon can be animated | Boolean | false  |
| closable | Whether Alert can be closed  | Boolean | false   |
| on-close | Callback when close Alert  | Function | -   |

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
