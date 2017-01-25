## Tag

Tag for categorizing or markuping.

### Examples

::: demo
<summary>
  #### Basic
  * There are 6 types of Alert: `primary` `info` `success` `danger` `warning` and default. sets it by `type` parameter.
  * apply a different background color by `color` parameter (Higher priority than type)
  * tag can be rounded
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
  #### Sizes
  * There are 4 sizes of tag: `small` `medium` `large`
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
  #### Close and Callback
  * Tag could be closable by set closable property. Closable Tag supports onClose events
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
          content: 'Tag close callback',
        });
      },
    },
  };
</script>
```
:::


### API

| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| type    | There are 6 types of Tag: `primary` `info` `success` `danger` `warning` and default   | String | -    |
| color | The background color of Tag, such as #87d087 | String | - |
| size | size of tag，accepted values: `small` `medium` `large` | String | - |
| rounded | Whether the icon is rounded | Boolean | false   |
| closable | Tag can be closed.  | Boolean | false   |
| on-close | Callback when tag was closed  | Function | -   |

<script>
  export default {
    methods: {
      close() {
        this.$notify.open({
          type: 'success',
          content: 'Tag close callback',
        });
      },
    },
  };
</script>
