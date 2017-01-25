## Collapse

A content area which can be collapsed and expanded.

### Examples

::: demo
<summary>
  #### Basic
  * Accordion mode, only one panel can be expanded at a time.
</summary>

```html
<collapse accordion>
  <collapse-item title="Collapsible Group Item #1">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
  <collapse-item title="Collapsible Group Item #2" actived>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
  <collapse-item title="Collapsible Group Item #3">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
</collapse>

```
:::

::: demo
<summary>
  #### Advanced
  * open multiple panels
  * Collapse is nested inside the Collapse
</summary>

```html
<collapse>
  <collapse-item title="Collapsible Group Item #1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
  <collapse-item title="Collapsible Group Item #2" actived>
    <collapse>
      <collapse-item title="Sub Collapse #1">Sub Collapse #1</collapse-item>
      <collapse-item title="Sub Collapse #2">Sub Collapse #2</collapse-item>
    </collapse>
  </collapse-item>
  <collapse-item title="Collapsible Group Item #3" actived>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit</collapse-item>
</collapse>
```
:::

### API

#### Collapse


| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| accordion | Accordion mode, only one panel can be expanded at a time | Boolean | false   |


#### CollapseItem


| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| title    | title of the panel	   | String | -    |
| actived | whether the panel is active | Boolean | false   |
