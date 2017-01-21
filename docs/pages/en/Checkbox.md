## Checkbox 复选框

复选框

### 代码演示

::: demo
<summary>
  #### 基本
  * 可通过 `v-model` 绑定数据
  * 通过 `disabled` 设置禁用状态
</summary>

```html
<checkbox val="john">Checkbox</checkbox>

<br><br>
<checkbox v-model="checkedNames" val="Jackie" checked>Jackie Chan</checkbox>
{{ checkedNames }}

<br><br>
<checkbox label="Checkbox" val="john" disabled>Checkbox</checkbox>

<br><br>
<checkbox label="Checkbox" val="john" @change="changeFunc">Checkbox</checkbox>

<script>
  export default {
    data() {
      return {
        checkedNames: '',
      };
    },
  };
</script>

```
:::

::: demo
<summary>
  #### checkbox-group
  * 绑定数据到同一数组
</summary>

```html
<checkbox-group v-model="groupVal">
  <checkbox val="Kobe">Kobe</checkbox>
  <checkbox val="James">James</checkbox>
  <checkbox val="Wade">Wade</checkbox>
</checkbox-group>
{{ groupVal }}

<script>
  export default {
    data() {
      return {
        groupVal: ['Kobe'],
      };
    },
  };
</script>
```
:::

### API

#### checkbox

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| name    | 绑定的原生checkbox的name  | String | 无    |
| val | checkbox的value值 | String, Number, Boolean | 无 |
| disabled | 是否禁用 | Boolean | false   |
| checked | 是否已选  | Boolean | false   |
| change | 值变化时的回调  | Function | 无   |

#### checkbox-group

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|--------------|
| value | 指定选中的选项  | Array | 无   |
| change | 值变化时的回调  | Function | 无   |

<script>
export default {
  data() {
    return {
      checkedNames: '',
      groupVal: ['Kobe'],
    };
  },
  watch: {
    checked(val) {
      console.log(val);
    }
  },
  methods: {
    changeFunc(p) {
      console.log(p);
    },
  },
};
</script>
