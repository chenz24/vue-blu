## Timeline

Vertical display timeline.

### Examples

::: demo
<summary>
  #### Basic
  * Sets date&time by `date` parameter.
  * color of node，including `primary` `info` `success` `danger` `warning`.
  * Setting content by `slot`
</summary>

```html
<timeline>
  <timeline-item date="2 minutes ago" type="primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.
  </timeline-item>
  <timeline-item date="Sat, 5 Mar" type="primary">
    <p>adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </timeline-item>
  <timeline-item date="Sun, 11 Feb" type="success">
    Call to customer Jacob and discuss the detail.
  </timeline-item>
</timeline>
```
:::


::: demo
<summary>
  #### More settings
  * Sets icon of timeline-item by `icon` parameter.
</summary>

```html
<timeline>
  <timeline-item date="2 minutes ago" icon="twitter" type="primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.
  </timeline-item>
  <timeline-item type="primary" date="Sat, 5 Mar">
    <p>adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <p><a href="">news center</a></p>
    <p><img src="https://pek3a.qingstor.com/warehouse1/c1.jpg" /></p>
  </timeline-item>
  <timeline-item date="Sun, 11 Feb" icon="wechat" type="success">
    Call to customer Jacob and discuss the detail.
  </timeline-item>
</timeline>
```
:::


### API

#### timeline-item

| Properties | Description    | Type        | Default       |
|------------|----------------|--------------------|--------------|
| type    | color of node，accepted value: `primary` `info` `success` `danger` `warning`   | String | - |
| date | date string (2 minutes ago, Sun, 11 Feb... etc) | String | - |
| icon | icon of timeline item  | String | -  |
