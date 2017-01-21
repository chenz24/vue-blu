## Timeline 时间线

垂直按时间展示的信息流

### 代码演示

::: demo
<summary>
  #### 基础
  * 通过`date`设置时间
  * 默认有五种主题颜色，包括`primary` `info` `success` `danger` `warning`，通过`type`来设置
  * `timeline-item`采用`slot`接收任意形式的内容
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
  #### 更多设置
  * `timeline-item`可通过`icon`参数设置图标
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

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| type    | 主题颜色，可选值为`primary` `info` `success` `danger` `warning`   | String | 无    |
| date | 日期时间 | String | 无   |
| icon | 图标  | String | 无   |
