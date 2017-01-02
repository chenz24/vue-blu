## Checkbox 复选框

### 代码演示

::: demo
<summary>
  #### 基本
  * icon默认有四种大小，除了默认大小还包括`small` `medium` `large`
</summary>

```html
<checkbox label="Remember me" v-model="isChecked" val="john"></checkbox>
<checkbox label="Remember me" v-model="checkedNames" val="jack" checked></checkbox>
{{ checkedNames }}
{{ isChecked }}

<checkbox-group v-model="groupVal">
  <checkbox label="Kobe" val="kobe"></checkbox>
  <checkbox label="James" val="james"></checkbox>
  <checkbox label="wade" val="wade"></checkbox>
</checkbox-group>
{{ groupVal }}
```
:::

<script>
export default {
  data() {
    return {
      isChecked: 'john',
      checkedNames: '',
      groupVal: ['kobe'],
    };
  },
  watch: {
    checked(val) {
      console.log(val);
    }
  },
  methods: {
    getVal() {

    }
  },
};
</script>
