## ScrollTo

Scroll to a specific position smoothly,base on [jump.js](https://github.com/callmecavs/jump.js)

### Examples

::: demo
<summary>
  #### Basic usage
  * Sets `target` to scroll to an element, by passing a css selector like `'.target' '#id1'`
  * When setting `target='top'`, it will trigger the built-in `scrollTop`(an arrow button shows at the lower right corner of the page)
  * Scroll from the current position by passing a number of pixels(use `distance` parameter.positive scroll down,negative scroll up).
</summary>

```html
<scroll-to target="#t2">
  <button class="button is-primary" id="t1">I'm t1，Scroll to `#t2` element</button>
</scroll-to>

<scroll-to :distance="500">
  <button class="button is-primary">Scroll down 500px</button>
</scroll-to>

<div style="width: 200px;height: 1000px; margin: 10px;border: 1px solid #ddd">Long div</div>
<scroll-to target="#t1">
  <button class="button is-outlined" id="t2">I'm t2，scroll back to t1</button>
</scroll-to>
<scroll-to :distance="-500">
  <button class="button is-primary">Scroll up 500px</button>
</scroll-to>
```
:::

### API

| Properties        | Description           | Type               | Default       |
|------------|----------------|--------------------|--------------|
| target  | target element，can be any css selector，like `'.target' '#id1'`.When setting `target='top'`, it will trigger the built-in `scrollTop`  | String | -    |
| duration | Pass the time the scroll takes, in milliseconds | Number | 500 |
| distance | scroll distance(Higher priority than target,positive scroll down,negative scroll up) | Number | - |

<div style="width: 200px;height: 1000px;margin: 10px; "></div>


