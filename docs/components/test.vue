<template>
  <div class="content">
    <data-table :data="dataSource">
      <table-column
        inline-template
        field="username"
        label="标题"
        >
        <tag type="primary">{{ row.name }}</tag>
      </table-column>
      <table-column field="address" label="地址" />
      <table-column field="name" label="姓名" />
    </data-table>
  </div>
</template>
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
      }],
    };
  },
};
</script>
