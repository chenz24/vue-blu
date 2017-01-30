## PopConfirm

A simple and compact confirmation dialog of an action.

### Examples

::: demo
<summary>
  #### Basic
  * Display or hidden buttons by `show-ok` and `show-cancel`.
  * Customize text of buttons by `ok-text` and `cancel-text`.
  * Sets callback by `on-ok` and `on-cancel`.
  * Support setting icon
</summary>

```html
<pop-confirm content="Are you sure delete this task?？">
  <button class="button">PopConfirm</button>
</pop-confirm>

<pop-confirm content="Are you sure？" :show-cancel="false" icon="question-circle-o">
  <button class="button is-primary">Icon Button</button>
</pop-confirm>

<pop-confirm content="Are you sure？" icon="question-circle-o" :on-ok="ok" :on-cancel="cancel">
  <button class="button is-primary">Callback</button>
</pop-confirm>

<script>
  export default {
    methods: {
      ok() {
        this.$notify.success({content: 'Delete successfully!'});
      },
      cancel() {
        this.$notify.open({content: 'Cancel!'});
      },
    },
  };
</script>
```
:::

### API

PopConfirm is inherited from Popover,Consult <router-link to="/en/components/popover" exact>Popover's documentation</router-link> to find more APIs.

| Properties | Description    | Type        | Default       |
|------------|----------------|--------------------|--------------|
| type    | color of icon，accepted value: `primary` `info` `success` `danger` `warning`   | String | -    |
| icon    | icon   | String | - |
| ok-text | text of the confirmation button | String | OK |
| cancel-text | text of the cancel button | String | Cancel |
| on-ok | callback of confirmation | Function | - |
| on-cancel | callback of cancel | Function | - |
| show-ok | whether the ok button is visible or not | Boolean | true  |
| show-cancel | whether the cancel button is visible or not | Boolean | true  |


<script>
export default {
  methods: {
    ok() {
      this.$notify.success({content: 'Delete successfully!'});
    },
    cancel() {
      this.$notify.open({content: 'Cancel!'});
    },
  },
};
</script>
