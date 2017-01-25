## ProgressBar 进度条

为当前工作流程和动作提供实时反馈

### 代码演示

::: demo
<summary>
  #### 基本
  * 默认有五种主题颜色，包括`primary` `info` `success` `danger` `warning`，通过`type`来设置
</summary>

```html
<progress-bar :percent="45" type="primary"></progress-bar>
<progress-bar :percent="30" type="info"></progress-bar>
<progress-bar :percent="50" type="success"></progress-bar>
<progress-bar :percent="60" type="danger"></progress-bar>
<progress-bar :percent="65" type="warning"></progress-bar>
```
:::

::: demo
<summary>
  #### 更多设置
  * `striped` 设置为true，显示彩带样式
  * `animated` 设置为true，显示动态进度条
  * `showinfo` 设置为true，显示当前进度数值
  * `info-inside` 设置为false，进度信息会显示在进度条外
  * 通过`size`设置progress bar的宽度，除了默认值外有 `small` `medium` `large`
  * 通过设置format内容模板函数，自定义信息显示的内容
</summary>

```html
<progress-bar :percent="45" type="primary" :striped="true"></progress-bar>
<progress-bar :percent="30" type="info" :striped="true" :animated="true"></progress-bar>
<progress-bar :percent="50" type="success" :showinfo="true"></progress-bar>
<progress-bar :percent="50" type="success" size="small" :showinfo="true" :info-inside="false"></progress-bar>
<progress-bar :percent="60" type="danger" size="large" :showinfo="true" :format="percentFormat"></progress-bar>
<progress-bar :percent="percent" type="info" :showinfo="true" :striped="true" :animated="true"></progress-bar>
<p class="control has-addons">
  <a class="button" @click="percentPlus">
    <span class="icon is-small"><i class="fa fa-plus"></i></span>
  </a>
  <a class="button" @click="percentMinus">
    <span class="icon is-small"><i class="fa fa-minus"></i></span>
  </a>
</p>
<script>
  export default {
    data() {
      return {
        percent: 10,
      };
    },

    methods: {
      percentFormat(val) {
        return `Completed ${val}%`;
      },
      percentPlus() {
        if (this.percent < 100) {
          this.percent += 10;
        }
      },
      percentMinus() {
        if (this.percent > 0) {
          this.percent -= 10;
        }
      },
    },
  };
</script>
```
:::

### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| type    | 主题颜色，可选值为`primary` `info` `success` `danger` `warning`   | String | 无    |
| size | 大小，可选值为`small` `medium` `large` | String | 无 |
| percent | 百分比 | Number | 0   |
| showinfo | 是否显示进度数值  | Boolean | false   |
| info-inside | 进度信息的显示是否在进度条内部  | Boolean | true   |
| format  | 显示信息的模板函数  | function(percent) | `percent => percent + '%'` |


<script>
export default {
  data() {
    return {
      percent: 10,
    };
  },

  methods: {
    percentFormat(val) {
      return `Completed ${val}%`;
    },
    percentPlus() {
      if (this.percent < 100) {
        this.percent += 10;
      }
    },
    percentMinus() {
      if (this.percent > 0) {
        this.percent -= 10;
      }
    },
  },
};
</script>

