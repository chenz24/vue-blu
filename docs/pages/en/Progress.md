## ProgressBar

To display the current progress of an operation flow.

### Examples

::: demo
<summary>
  #### Basic
  * There are 6 colors of ProgressBar: `primary` `info` `success` `danger` `warning` and default. sets it by `type` parameter.
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
  #### Advanced
  * the progressbar can be `striped`
  * the progressbar can be `animated`
  * display the progress value by `showinfo`
  * show info inside or outside of the progressbar by setting `info-inside`
  * apply different size including `small` `medium` `large`
  * You can custom text format by setting format
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

| Properties        | Description           | Type        | Default    |
|------------|----------------|--------------------|--------------|
| type    | There are 6 colors of ProgressBar: `primary` `info` `success` `danger` `warning` and default   | String | 无    |
| size | size of ProgressBar，accepted values:`small` `medium` `large` | String | 无 |
| percent | to set the completion percentage | Number | 0   |
| showinfo | determine whether to display the progress value  | Boolean | false   |
| info-inside | determine whether to display the progress value inside the ProgressBar | Boolean | true   |
| format  | template function of the content	  | function(percent) | `percent => percent + '%'` |


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

