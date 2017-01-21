## Radio 单选框

单选框


::: demo
<summary>
  #### 基本
  * tag有四种大小，除了默认大小还包括`small` `medium` `large`,通过`size`来设置
</summary>

```html
<radio>Radio</radio>

<br><br>
<radio v-model="radio1" val="test">v-model绑定</radio> {{ radio1 }}

<br><br>
<radio v-model="radio1" val="test" disabled>Radio(disabled)</radio>

```
:::

::: demo
<summary>
  #### radio-group
  * 一组互斥的 Radio 配合使用
</summary>

```html
<radio-group v-model="group1">
  <radio val="Kobe">Kobe</radio>
  <radio val="James" disabled>James</radio>
  <radio val="Wade">Wade</radio>
</radio-group>
<div>{{ group1 }}</div>
```
:::

::: demo
<summary>
  #### radio-button
  * 按钮样式的单选组
</summary>

```html
<radio-group v-model="group1">
  <radio-button val="Kobe" icon="dribbble">Kobe</radio-button>
  <radio-button val="James" icon="chrome">James</radio-button>
  <radio-button val="Wade">Wade</radio-button>
</radio-group>
<div>{{ group1 }}</div>
```
:::

### API

#### radio

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| name    | 绑定的原生checkbox的name  | String | 无    |
| val | checkbox的value值 | String, Number, Boolean | 无 |
| disabled | 是否禁用 | Boolean | false   |
| checked | 是否已选  | Boolean | false   |
| on-change | 值变化时的回调  | Function | 无   |


#### radio-button

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| name    | 绑定的原生checkbox的name  | String | 无    |
| val | checkbox的value值 | String, Number, Boolean | 无 |
| icon | 按钮上的icon  | String | 无    |
| disabled | 是否禁用 | Boolean | false   |
| checked | 是否已选  | Boolean | false   |
| on-change | 值变化时的回调  | Function | 无   |


#### radio-group

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| value | 指定选中的选项  | Array | 无   |
| on-change | 值变化时的回调  | Function | 无   |

<script>
export default {
  data() {
    return {
      radio1: 'test',
      group1: '',
    };
  },
};
</script>
