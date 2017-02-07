## Switch 开关

Switch 开关

::: demo
<summary>
  #### 基本
  * 可通过 `v-model` 绑定数据
  * `checked=true` 默认打开
  * `disabled` 设置为禁用
  * 通过 `on-text` `off-text` 设置开关文字
  * `size` 设置大小
</summary>

```html

<b-switch on-text="开启" off-text="关闭" v-model="val1"></b-switch>
{{ val1 }}
<br><br>
<b-switch type="primary" checked></b-switch>
<br><br>
<b-switch type="primary" disabled></b-switch>
<br><br>
<b-switch type="primary" on-text="开" off-text="关" size="small"></b-switch>
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
        const content = val ? '开启' : '关闭';
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
      const content = val ? '开启' : '关闭';
      this.$notify.info({content});
    },
  },
};
</script>

### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| type    | 主题颜色，可选值为`primary` `info` `success` `danger` `warning`   | String | 无    |
| on-text   | 开启时的文字   | String | 无    |
| off-text | 关闭时的文字 | String | 无 |
| size | 开关的大小，可选值为`small`  | String | 无 |
| checked | 是否开启  | Boolean | false   |
| disabled | 是否禁用  | Boolean | false   |
| on-change | 开关切换时的回调  | Function | 无   |
