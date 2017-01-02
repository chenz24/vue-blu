<template>
  <div>
    <x-table :data="dataSource">
      <column lable="姓名">
        <template scope="row">
          <span>hello from parent</span>
          <span>{{ row.age }}</span>
          <tag>{{ row.address }}</tag>
        </template>
      </column>
      <column lable="年龄" field="age"></column>
    </x-table>
  </div>
</template>
<script>
import XTable from './test/DataTable';
import Column from './test/Column';

export default {
  components: { XTable, Column },
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
      }],
    };
  },
};
</script>
