## Switch

Switching Selector.

### Examples

::: demo
<summary>
  #### Basic
  * support two-way binding by `v-model`
  * Enable or disable the component by `disabled`
  * With text
  * Sets `size="small"` to show small size component
</summary>

```html

<b-switch on-text="ON" off-text="OFF" v-model="val1"></b-switch>
{{ val1 }}
<br><br>
<b-switch type="primary" checked></b-switch>
<br><br>
<b-switch type="primary" disabled></b-switch>
<br><br>
<b-switch type="primary" on-text="on" off-text="off" size="small"></b-switch>
<br><br>
<b-switch type="primary" :on-change="onChange"></b-switch>
<script>
  export default {
    data() {
      return {
        val1: true,
      };
    },
    methods: {
      onChange(val) {
        const content = val ? 'open' : 'off';
        this.$notify.info({content});
      },
    },
  };
</script>
```
:::
<script>
export default {
  data() {
    return {
      val1: true,
    };
  },
  methods: {
    onChange(val) {
      const content = val ? 'open' : 'off';
      this.$notify.info({content});
    },
  },
};
</script>

### API

| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| type    | color of Switch, it can be one of `primary` `info` `success` `danger` `warning`   | String |  -  |
| on-text   | text displayed when the checked state is on   | String | -  |
| off-text | text displayed when the checked state is off | String | - |
| size | size of the component,it can be `small`  | String | - |
| checked | determine whether the `Switch` is checked  | Boolean | false   |
| disabled | Enable or disable the component  | Boolean | false   |
| on-change | The callback triggered when the checked state is changing  | Function | -  |
