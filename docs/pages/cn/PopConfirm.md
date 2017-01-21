## PopConfirm 气泡确认框

轻量级的确认对话框，基于 Popover 开发

### 代码演示

::: demo
<summary>
  #### 基本
  * 基于 Popover 开发，除了内容只能是纯文字外，Popover的其他API都支持
  * 支持通过 `show-ok` `show-cancel` 隐藏或显示按钮
  * 通过 `ok-text` `cancel-text` 自定义按钮文字
  * 通过 `on-ok` `on-cancel` 设置对应的回调
  * 通过 `icon` 设置图标
</summary>

```html
<pop-confirm content="确定删除此条内容？不可恢复">
  <button class="button">PopConfirm</button>
</pop-confirm>

<pop-confirm content="通过审核？" :show-cancel="false" icon="question-circle-o">
  <button class="button is-primary">Icon Button</button>
</pop-confirm>

<pop-confirm content="通过审核？" icon="question-circle-o" :on-ok="ok" :on-cancel="cancel">
  <button class="button is-primary">Callback</button>
</pop-confirm>

<script>
  export default {
    methods: {
      ok() {
        this.$notify.success({content: '删除成功!'});
      },
      cancel() {
        this.$notify.open({content: '取消删除!'});
      },
    },
  };
</script>
```
:::

### API

只列出相对 `Popover` 新增的

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| type    | 图标颜色，可选值为`primary` `info` `success` `danger` `warning`   | String | 无    |
| icon    | 图标   | String | 无    |
| ok-text | 确定按钮的文字 | String | OK |
| cancel-text | 取消按钮的文字 | String | Cancel |
| on-ok | 点击ok后的回调 | Function | 无   |
| on-cancel | 点击cancel后的回调 | Function | 无   |
| show-ok | 是否显示ok按钮 | Boolean | true  |
| show-cancel | 是否显示cancel按钮 | Boolean | true  |


<script>
export default {
  methods: {
    ok() {
      this.$notify.success({content: '删除成功!'});
    },
    cancel() {
      this.$notify.open({content: '取消删除!'});
    },
  },
};
</script>
