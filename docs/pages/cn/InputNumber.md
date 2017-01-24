## InputNumber

用在数字的输入场景中，可使用鼠标和键盘操作

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过 `val` 设置初始值
  * 通过 `disabled` 设置禁用状态
  * 设置 `size="small"` 显示小尺寸
  * 通过 `step` 设置步长
  * `mode='s'` 设置增减按钮放在input的两边
  * 通过 `max` `min` 设置范围
  * 通过 `on-change` 设置回调
</summary>

```html
<input-number :val="5"></input-number>

<input-number disabled></input-number>

<input-number size="small"></input-number>

<input-number mode="s"></input-number>

<input-number :max="10" :min="-5" :on-change="callback"></input-number>

<input-number mode="s" :on-change="callback"></input-number>

<script>
  export default {
    methods: {
      callback(num) {
        this.$notify.open({
          content: `现在的数字是${num}`,
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

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| val    | 初始值   | Number | 无    |
| min    | 最小值   | Number | 0    |
| max | 最大值 | Number | Infinity |
| size | 标签大小，可选值为`small`  | String | 无 |
| mode | 按钮展现方式，当值为`s`时，按钮放在两边  | String | 无 |
| step | 步长 | Number | 1   |
| disabled | 设置禁用状态  | Boolean | false   |
| on-change | 数字改变时的回调  | Function(val) | 无   |


<script>
export default {
  methods: {
    callback(num) {
      this.$notify.open({
        content: `现在的数字是${num}`,
        icon: 'smile-o',
        placement: 'top-center',
      });
    },
  },
};
</script>
