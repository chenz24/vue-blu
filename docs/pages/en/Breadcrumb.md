## Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

### Examples

::: demo
<summary>
  #### Basic Usage
  * The simplest use
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
  #### Separator
  * Customized the separator by setting the `separator` property
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
  #### link
  * Sets link address by the `to` param
</summary>

```html
<breadcrumb>
  <breadcrumb-item>
    <router-link to="/" exact><i class="fa fa-home"></i>Home</router-link>
  </breadcrumb-item>
  <breadcrumb-item>
    <router-link to="/components/tag" exact><i class="fa fa-tag"></i>Tags</router-link>
  </breadcrumb-item>
  <breadcrumb-item label="breadcrumb">
    <select>
      <option>Please Select</option>
      <option>NY</option>
      <option>LA</option>
    </select>
  </breadcrumb-item>
</breadcrumb>
```
:::

### API

#### breadcrumb

| Members        | Description           | Type               | Default       |
|------------|----------------|--------------------|--------------|
| separator  | separator，default: `>` | String | `>`    |


#### breadcrumb-item

| Members   | Description           | Type               | Default       |
|-------|---------------|--------------------|--------------|
| to    | link address | String |  -   |
