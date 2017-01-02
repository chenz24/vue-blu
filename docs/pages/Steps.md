## Steps 步骤条

步骤条，常用于分步操作

### 代码演示

::: demo
<summary>
  #### 基本
  * tag有四种大小，除了默认大小还包括`small` `medium` `large`,通过`size`来设置
</summary>

```html
<steps :current="0" type="line">
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
  #### 设置大小
  * tag有四种大小，除了默认大小还包括`small` `medium` `large`,通过`size`来设置
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
