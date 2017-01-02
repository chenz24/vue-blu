## Switch 开关

Switch 开关

::: demo
<summary>
  #### 基本
  * icon默认有四种大小，除了默认大小还包括`small` `medium` `large`
</summary>

```html
<b-switch on-text="开启" off-text="关闭" v-model="val1"></b-switch>
{{ val1 }}
<b-switch type="primary" checked></b-switch>
<b-switch type="primary" disabled></b-switch>
<b-switch type="primary" on-text="开" off-text="关" size="small"></b-switch>

```
:::
<script>
export default {
  data() {
    return {
      val1: true,
    };
  },
};
</script>
