## Tabs

Tabs make it easy to switch between different views.

### Examples

::: demo
<summary>
  #### Basic
  * Three styles，`boxed` `toggle` and default
  * Setting content by `slot`
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs>
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>

  <div class="column">
    <tabs type="boxed">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

<div class="columns">
  <div class="column">
    <tabs type="toggle">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
```
:::

### Styles and Icon

::: demo
<summary>
  #### styles
  * The tab can be set to take up the whole width
  * There are 3 sizes of tab: `small` `large` and default
  * `alignment`: `right` `left` `centered`
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs type="toggle" :is-full-width="true">
      <tab-item label="Pictures" icon="image">Pictures Tab</tab-item>
      <tab-item label="Music" icon="music">Music Tab</tab-item>
      <tab-item label="Videos" icon="film">Video Tab</tab-item>
      <tab-item label="Documents" icon="file-text-o">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
<hr>
<div class="columns">
  <div class="column">
    <tabs size="small">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
  <div class="column">
    <tabs alignment="centered">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

```
:::

### Layout

::: demo
<summary>
  #### layout
  * Position of tabs，accepted value: `left / right / bottom / top`
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs layout="left">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>

  <div class="column">
    <tabs layout="right">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Document">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
<hr>
<div class="columns">
  <div class="column">
    <tabs layout="bottom">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

```
:::

### Active,Disabled and Callback

::: demo
<summary>
  #### advanced
  * Sets default actived tabItem's key by `active-index`
  * TabItem can be disabled
  * Sets callback when tab is clicked by `on-tab-click`
</summary>

```html
<div class="columns">
  <div class="column">
    <tabs :active-index="2">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>

  <div class="column">
    <tabs>
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music" disabled>Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Document">Document Tab2</tab-item>
    </tabs>
  </div>
</div>
<hr>
<div class="columns">
  <div class="column">
    <tabs :on-tab-click="tabCallback">
      <tab-item label="Pictures">Pictures Tab</tab-item>
      <tab-item label="Music">Music Tab</tab-item>
      <tab-item label="Videos">Video Tab</tab-item>
      <tab-item label="Documents">Document Tab2</tab-item>
    </tabs>
  </div>
</div>

```
:::

### API

#### Tabs

| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| type | different style of tab，accepted value: `boxed / toggle` and default  | String | - |
| is-full-width  | whether the tab takes up the whole width (100%)  | Boolean | false    |
| layout | Position of tabs，accepted value: `left / right / bottom / top`  | String | top |
| size | size of tab，accepted value: `small / large` | String | - |
| alignment | alignment accepted value:`left / right` | String | left   |
| active-index | default actived tabItem's key(count from 0)  | Number | 0   |
| on-tab-click | Callback when tab is switched	  | Function | -   |


#### TabItem

| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| icon | icon of tab item  | String | - |
| label  | title of tab item  | String(`required`) | -  |

<script>
export default {
  methods: {
    tabCallback(index) {
      this.$notify.info({
        content: `opening index: ${index + 1} `,
      });
    },
  },
};
</script>

