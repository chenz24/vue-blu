## Breadcrumb 面包屑

在一个带有层次的导航结构中标明当前页面的位置，并可返回上级

### 代码演示

::: demo
<summary>
  #### 基本
  * 最基本的用法
</summary>

```html
<breadcrumb>
  <breadcrumb-item label="Home" to="/#"></breadcrumb-item>
  <breadcrumb-item label="Component" to="#/components"></breadcrumb-item>
  <breadcrumb-item label="breadcrumb" to="#/components/breadcrumb"></breadcrumb-item>
</breadcrumb>
```
:::

::: demo
<summary>
  #### 分隔符
  * 可通过设置`separator` 自定义分隔符
</summary>

```html
<breadcrumb separator="-">
  <breadcrumb-item label="Home" to="/#"></breadcrumb-item>
  <breadcrumb-item label="Component" to="#/components"></breadcrumb-item>
  <breadcrumb-item label="breadcrumb" to="#/components/breadcrumb"></breadcrumb-item>
</breadcrumb>
```
:::

::: demo
<summary>
  #### 链接内容
  * 可自定义链接内容
</summary>

```html
<breadcrumb>
  <breadcrumb-item>
    <router-link to="/" exact><i class="fa fa-home"></i>Home</router-link>
  </breadcrumb-item>
  <breadcrumb-item>
    <router-link to="/components/tag" exact><i class="fa fa-tag"></i>Tag标签</router-link>
  </breadcrumb-item>
  <breadcrumb-item label="breadcrumb">
    <select>
      <option>请选择</option>
      <option>山东省</option>
      <option>北京市</option>
    </select>
  </breadcrumb-item>
</breadcrumb>
```
:::

### API

#### breadcrumb

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| separator  | 分隔符，默认值`>` | String | `>`    |


#### breadcrumb-item

| 成员   | 说明           | 类型               | 默认值       |
|-------|---------------|--------------------|--------------|
| to    | 链接地址，在不设置内容时有效 | String | 无    |
