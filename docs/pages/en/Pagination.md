## Pagination

分页

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过 `total` 设置条目数，自动完成分页
  * `current` 设置默认打开第几页
</summary>

```html
<pagination :total="50" ></pagination>
<br>
<pagination :total="800" :current="5"></pagination>
```
:::

### 小尺寸版

::: demo
<summary>
  #### Size
  * 通过 `size` 设置分页大小
  * `current` 设置默认打开第几页
</summary>

```html
<pagination :total="800" :current="5" size="small"></pagination>
```
:::

### 设置显示项目和顺序

::: demo
<summary>
  #### layout
  * 分页分为 `total, pager, sizer, jumper` 四个元素，可以任意顺序组合排列这四项
  * 如： `layout="total, pager, sizer"`
</summary>

```html
<pagination :total="800" layout="total, pager, sizer"></pagination>
<br>
<pagination :total="800" layout="pager, sizer, total"></pagination>
<br>
<pagination :total="800" layout="total,pager"></pagination>

<br>
<pagination :total="800" layout="pager"></pagination>

```
:::

### 配置

::: demo
<summary>
  #### 配置
  * 通过 `size-options` 设置分页大小选项
  * `change` 设置分页回调
</summary>

```html
<pagination :total="800" :current="5" :size-options="[30, 40, 50]"></pagination>
<br>
<pagination :total="800" :page-size="15" :size-options="[15, 30, 50]"></pagination>
<br>
<pagination :total="50" :change="pageCb"></pagination>
<script>
  export default {
    methods: {
      pageCb(page) {
        this.$notify.open({
          content: `当前第${page}页`,
        });
      },
    },
  };
</script>
```
:::

### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| page-size    | 每页条数 | Number | 10    |
| current | 当前页数 | Number | 1 |
| size | 分页是否是迷你型，可选值为`small`  | String | 无 |
| total | 数据总数 | Number | 无   |
| layout | 分页项目及布局  | String | `'total, pager, sizer, jumper'`   |
| align | 对齐方式，默认居中，可选值 `right` `left` | String |  无  |
| change | 分页回调  | Function | 无   |
| size-options | 指定每页显示多少条  | Array | 无   |

<script>
export default {
  methods: {
    pageCb(page) {
      this.$notify.open({
        content: `当前第${page}页`,
      });
    },
  },
};
</script>
