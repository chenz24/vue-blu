## Affix

Make an element sticky to viewport.

### Examples

::: demo
<summary>
  #### Basic
  The simplest usage.
</summary>

```html
<affix>
  <button class="button is-primary">Affix top</button>
</affix>
```
:::

::: demo
<summary>
  #### Define an offset
  You can also position the element below the viewport edge
</summary>

```html
<affix :offset="200">
  <button class="button is-primary">Stick 200px below the top</button>
</affix>
```
:::

::: demo
<summary>
  #### Sticky boundary
  You can define the boundary of a sticky element by setting the boundary parameter.This keeps the sticky element
  within the dimensions of the boundary element
</summary>

```html
<div id="parent" style="height: 120px; text-align: center">
  <affix :offset="0" boundary="#parent">
    <button class="button is-primary">Sticky bound to parent container</button>
  </affix>
</div>
```
:::

::: demo
<summary>
  #### Callback
  Callback with affixed state.
</summary>

```html
<div style="text-align: right">
  <affix :on-affix="onAffixed">
    <button class="button is-primary">callback</button>
  </affix>
</div>
<script>
export default {
  methods: {
    onAffixed(status) {
      this.$notify.open({
        type: 'success',
        content: `Sticky state ${status}`,
      });
    },
  },
};
</script>
```
:::



### API

| Properties        | Description           | Type               | Default       |
|------------|----------------|--------------------|--------------|
| offset    | Top offset when affix should be triggered| Number |    0     |
| boundary |  Set a Css id selector to bind sticky to a specific element.(parent element or parent's parent...)| String(#parent) |
| on-affix | Callback when affix state is changed   | Function(affixed) | -       |


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
