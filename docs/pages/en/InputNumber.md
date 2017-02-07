## InputNumber

Enter a number within certain range with the mouse or keyboard.

### Examples

::: demo
<summary>
  #### Basic
  * Enable or disable the component by `disabled`
  * Sets `size="small"` to show small size component
  * `step` - incremental step
  * `mode='s'` to set increase and decrease buttons on both sides of input
  * Sets the range by `max` and `min`
  * Sets callback by `on-change`
</summary>

```html
<input-number></input-number>

<input-number disabled></input-number>

<input-number size="small"></input-number>

<input-number mode="s"></input-number>

<input-number :max="10" :min="2"></input-number>

<input-number mode="s" :on-change="callback"></input-number>

<script>
  export default {
    methods: {
      callback(num) {
        this.$notify.open({
          content: `now the number is ${num}`,
          icon: 'smile-o',
          placement: 'top-center',
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
| val    | default value   | Number | -    |
| min    | min value   | Number | 0    |
| max | max value | Number | Infinity |
| size | size of the component,it can be `small`  | String | - |
| mode | the position of buttons，the increase and decrease buttons will be on both sides of input when value is `s`  | String | - |
| step | The number to which the current value is increased or decreased. | Number | 1   |
| disabled | Enable or disable the component  | Boolean | false   |
| on-change | The callback triggered when the value is changed.	  | Function(val) | -   |


<script>
export default {
  methods: {
    callback(num) {
      this.$notify.open({
        content: `now the number is ${num}`,
        icon: 'smile-o',
        placement: 'top-center',
      });
    },
  },
};
</script>
