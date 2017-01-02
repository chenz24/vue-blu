## DataTable 表格


### 代码演示

::: demo
<summary>
  #### 基本
  * 奥盛
</summary>

```html
<data-table :data="dataSource" checkable>
  <table-column label="姓名" field="name"></table-column>
  <table-column label="年龄" field="age"></table-column>
  <table-column label="label" inline-template>
    <div>
      <tag type="primary">{{ row.name }}</tag>
      <a href="">{{ row.name }}</a>
    </div>
  </table-column>
  <table-column field="age" label="年龄">
    <template scope="row">
      <span>hello from parent</span>
      <span>{{ row.address }}</span>
    </template>
  </table-column>
</data-table>
```
:::

<script>
export default {
  data() {
    return {
      dataSource: [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 42,
        address: '西湖区湖底公园0号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 42,
        address: '西湖区湖底公园2号',
      }, {
        key: '2',
        name: '胡彦祖4',
        age: 42,
        address: '西湖区湖底公园3号',
      },{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 42,
        address: '西湖区湖底公园0号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 42,
        address: '西湖区湖底公园2号',
      }, {
        key: '2',
        name: '胡彦祖4',
        age: 42,
        address: '西湖区湖底公园3号',
      },{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 42,
        address: '西湖区湖底公园0号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 42,
        address: '西湖区湖底公园2号',
      }, {
        key: '2',
        name: '胡彦祖4',
        address: '西湖区湖底公园3号',
        age: 42,
      }],

      columns: [{
        title: '序号',
        dataIndex: 'name',
        key: 'order',
        sorter: true,
        width: 120,
      }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter: true,
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }],
    }
  }
};
</script>
