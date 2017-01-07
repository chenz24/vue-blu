<template>
  <div>
    <data-table :data="dataSource" :change="onTableChange" checkable show-index :pagination="pagination">
      <toolbar></toolbar>
      <column label="姓名">
        <template scope="row">
          <span>hello from parent</span>
          <span>{{ row.age }}</span>
          <tag>{{ row.address }}</tag>
        </template>
      </column>
      <column label="年龄" field="age" sorter="custom"></column>
      <column label="地址" field="address"></column>
    </data-table>
  </div>
</template>
<script>
import DataTable from './test/DataTable';
import Column from './test/TableColumn';
import Toolbar from './test/Toolbar';

export default {
  components: { DataTable, Column, Toolbar },
  data() {
    return {
      dataSource: [{
        key: '1',
        name: '胡彦斌',
        age: 2,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 18,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 32,
        address: '西湖区湖底公园0号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 33,
        address: '西湖区湖底公园2号',
      }, {
        key: '2',
        name: '胡彦祖4',
        age: 5,
        address: '西湖区湖底公园3号',
      }, {
        key: '1',
        name: '胡彦斌',
        age: 6,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 7,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 19,
        address: '西湖区湖底公园0号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 9,
        address: '西湖区湖底公园2号',
      }, {
        key: '2',
        name: '胡彦祖4',
        age: 10,
        address: '西湖区湖底公园3号',
      }, {
        key: '1',
        name: '胡彦斌',
        age: 11,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 12,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 13,
        address: '西湖区湖底公园0号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 14,
        address: '西湖区湖底公园2号',
      }, {
        key: '2',
        name: '胡彦祖4',
        address: '西湖区湖底公园3号',
        age: 15,
      }],
      dataSource2: [{
        key: '1',
        name: '胡彦斌2',
        age: 2,
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 18,
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 32,
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 33,
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖4',
        age: 5,
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      }, {
        key: '1',
        name: '胡彦斌',
        age: 6,
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 7,
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖2',
        age: 19,
        address: '西湖区湖底公园0号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖3',
        age: 9,
        address: '西湖区湖底公园2号西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖4',
        address: '西湖区湖底公园3号西湖区湖底公园1号',
        age: 15,
      }],
    };
  },

  methods: {
    onTableChange(params) {
      console.log(params);
    },
  },

  computed: {
    pagination() {
      return {
        total: this.dataSource.length,
      };
    },
  },
};
</script>
