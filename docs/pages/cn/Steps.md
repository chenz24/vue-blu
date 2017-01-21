## Steps 步骤条

步骤条，常用于分步操作

### 代码演示

::: demo
<summary>
  #### 基本
  * `current` 设置当前进行到第几步
  * `prev-text / next-text` 设置按钮文字
</summary>

```html
<steps :current="0" type="line" prev-text="上一步" next-text="下一步">
  <step title="标题" description="举头望明月">
    <p>1.床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
  </step>
  <step title="Eating" description="春晓">
    <p>2.春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
  </step>
  <step title="Swimming" description="春夜喜雨">
    <p>3.好雨知时节，当春乃发生。随风潜入夜，润物细无声</p>
  </step>
</steps>
```
:::



::: demo
<summary>
  #### 另一种样式
  * 目前有两种样式，通过 `type` 设置
</summary>

```html
<steps :current="0" type="pills">
  <step title="标题" description="举头望明月">
    <p>1.床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
  </step>
  <step title="Eating" description="春晓">
    <p>2.春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
  </step>
  <step title="Swimming" description="春夜喜雨">
    <p>3.好雨知时节，当春乃发生。随风潜入夜，润物细无声</p>
  </step>
</steps>
```
:::

::: demo
<summary>
  #### 控制
  * `current` 设置当前进行到第几步
  * `prev-text / next-text` 设置按钮文字
</summary>

```html
<steps :current="current" type="line" :show-footer="false">
  <step title="标题" description="举头望明月">
    <p>1.床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
    <p>
      <button class="button is-info" @click="handlePrev">上一步</button>
      <button class="button is-info" @click="handleNext">下一步</button>
    </p>
  </step>
  <step title="Eating" description="春晓">
    <p>2.春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
    <p>
      <button class="button is-info" @click="handlePrev">上一步</button>
      <button class="button is-info" @click="handleNext">下一步</button>
    </p>
  </step>
  <step title="Swimming" description="春夜喜雨">
    <p>3.好雨知时节，当春乃发生。随风潜入夜，润物细无声</p>
    <p>
      <button class="button is-info" @click="handlePrev">上一步</button>
      <button class="button is-info" @click="handleNext">下一步</button>
    </p>
  </step>
</steps>
<script>
  export default {
    data() {
      return {
        current: 0,
      };
    },

    methods: {
      handleNext() {
        this.current <= 3 && this.current++;
        this.$notify.open({content: '自定义回调'});
      },
      handlePrev() {
        this.current >= 0 && this.current--;
        this.$notify.info({content: '自定义回调'});
      }
    }
  };
</script>

```
:::

### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| type    | 显示样式，可选值为`pills` `line` | String | `pills`    |
| current | 当前第几步 | Number | 0 |
| prevText | 上一步的按钮文字 | String | `Prev` |
| nextText | 下一步的按钮文字 | String | `Next`   |
| on-prev | 上一步回调  | Function | 无   |
| on-next | 下一步回调  | Function | 无   |
| show-footer | 是否显示footer栏，不显示的话可以通过`current`自己控制上一步下一步  | Boolean | true   |

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },

  methods: {
    handleNext() {
      this.current <= 3 && this.current++;
      this.$notify.open({content: '自定义回调'});
    },
    handlePrev() {
      this.current >= 0 && this.current--;
      this.$notify.info({content: '自定义回调'});
    }
  }
};
</script>
