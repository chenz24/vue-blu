<template>
  <div class="data-table-container">
    <slot></slot>
    <div class="data-table-header" ref="header" v-if="height">
      <table class="table data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
        <colgroup>
          <col v-for="col in cols" :width="col">
        </colgroup>
        <table-header :data="showData" :showIndex="showIndex"></table-header>
      </table>
    </div>

    <div class="data-table-main" :style="mainStyle">
      <table class="table data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
        <colgroup>
          <col v-for="col in cols" :width="col">
        </colgroup>
        <template v-if="!height">
          <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
        </template>
        <table-body :state="state" :checkable="checkable" :data="showData" :showIndex="showIndex"></table-body>
      </table>
    </div>
    <pagination :total="totalCnt" align="right" :change="handlePageChange" :pageSizeChange="handlePageSizeChange" v-if="totalCnt"></pagination>
  </div>
</template>
<script>
import sortBy from 'lodash/sortBy';
import utils from '../../../src/utils/utils';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default {
  components: { TableHeader, TableBody },
  name: 'DataTable',
  props: {
    data: Array,
    change: {
      type: Function,
      default() {},
    },
    height: Number,
    checkable: {
      type: Boolean,
      default: false,
    },
    showIndex: Boolean,
    pagination: {},
    onSelectChange: {
      type: Function,
      default() {},
    },
    onSelectAll: {
      type: Function,
      default() {},
    },
    rowKey: String,
    bordered: Boolean,
    striped: Boolean,
    narrow: Boolean,
  },

  data() {
    return {
      state: {
        sortKey: '',
        reverse: '',
        pagination: { current: 1 },
        selectedRows: [],
        selectedRowKeys: [],
      },
      cols: [],
      columns: [],
      selected: [],
      isTable: true,
      interData: [],
      showData: [],
    };
  },

  computed: {
    mainStyle() {
      return this.height ? { height: `${this.height}px`, overflow: 'scroll' } : null;
    },
    totalCnt() {
      const total = this.pagination && this.pagination.total ? this.pagination.total : 0;
      return total;
    },
  },

  watch: {
    columns(newVal) {
      console.log(newVal);
    },
    data(val) {
      this.interData = val;
      this.handleReorganizeData();
    },
  },

  methods: {
    calcColumnWidth() {
      let width = this.$el.offsetWidth;
      let length = this.columns.length;

      if (this.checkable) {
        width -= 40;
        this.cols.push(40);
      }

      if (this.showIndex) {
        width -= 40;
        this.cols.push(40);
      }

      this.columns.forEach((column) => {
        if (column.width) {
          width -= column.width;
          length -= 1;
        }
      });
      const avgWidth = Math.floor(width / length);

      this.columns.forEach((column) => {
        if (column.width) {
          this.cols.push(column.width);
        } else {
          this.height ? this.cols.push(avgWidth) : this.cols.push('');
        }
      });
    },

    handleToggleSort(column) {
      if (!column.sorter || !column.field) return;
      this.state.sortKey = column.field;
      this.state.reverse = !this.state.reverse;
      if (utils.isFunction(column.sorter) || column.sorter === 'custom') {
        this.interData = sortBy(this.interData, column.field);
        if (this.state.reverse) this.interData.reverse();
      }
      this.handleTableChange();
    },

    handlePageSizeChange(current, pageSize) {
      console.log('pageSize', pageSize);
      this.state.pagination.pageSize = pageSize;
      this.handleTableChange();
    },

    handlePageChange(current) {
      this.state.pagination.current = current;
      const onPageChange = this.state.pagination.change;
      if (onPageChange && utils.isFunction(onPageChange)) {
        onPageChange(current);
      }
      this.handleTableChange();
    },

    handleInitTable() {},

    handleTableChange() {
      this.change(this.state);
      this.handleReorganizeData();
    },

    handleReorganizeData() {
      if (this.state.pagination.total) {
        const current = this.state.pagination.current || 1;
        const pageSize = this.state.pagination.pageSize || 10;

        if (this.interData.length <= pageSize) {
          this.showData = this.interData;
        } else {
          const start = (current - 1) * pageSize;
          const end = parseInt(start, 10) + parseInt(pageSize, 10);
          this.showData = this.interData.slice(start, end);
        }
      } else {
        this.showData = this.interData;
      }
    },

    handleSelectedChange(row, isSelect, index) {
      let key = row[this.rowKey];
      if (!key) {
        const currentPage = this.state.pagination.current;
        key = `${currentPage}-${index}`;
      }

      const isExist = this.state.selectedRowKeys.indexOf(key) >= 0;
      if (isSelect && !isExist) {
        this.state.selectedRowKeys.push(key);
        this.state.selectedRows.push(row);
      }
      if (!isSelect && isExist) {
        const selectedIndex = this.state.selectedRowKeys.indexOf(key);
        this.state.selectedRows.splice(selectedIndex, 1);
        this.state.selectedRowKeys.splice(selectedIndex, 1);
      }

      this.onSelectChange(this.state.selectedRowKeys, this.state.selectedRows);
    },

    handleToggleSelectAll(isCheck) {
      const currentPage = this.state.pagination.current;

      if (isCheck) {
        this.showData.forEach((row, index) => {
          const key = row[this.rowKey] ? row[this.rowKey] : `${currentPage}-${index}`;
          const isExist = this.state.selectedRowKeys.indexOf(key) >= 0;
          if (!isExist) {
            this.state.selectedRowKeys.push(key);
            this.state.selectedRows.push(row);
          }
        });
      } else {
        this.showData.forEach((row, index) => {
          const key = row[this.rowKey] ? row[this.rowKey] : `${currentPage}-${index}`;
          const selectedIndex = this.state.selectedRowKeys.indexOf(key);
          if (selectedIndex >= 0) {
            this.state.selectedRows.splice(selectedIndex, 1);
            this.state.selectedRowKeys.splice(selectedIndex, 1);
          }
        });
      }

      this.onSelectChange(this.state.selectedRowKeys, this.state.selectedRows);
    },

    isCheckAll() {
      const currentPage = this.state.pagination.current;
      const checkedAll = this.showData.some((row, index) => {
        const key = row[this.rowKey] ? row[this.rowKey] : `${currentPage}-${index}`;
        return this.state.selectedRowKeys.indexOf(key) < 0;
      });
      return !checkedAll;
    },

    handleRefresh() {
      this.state = {
        sortKey: '',
        reverse: '',
        selectedRows: [],
        selectedRowKeys: [],
      };
      if (this.pagination) {
        this.state.pagination = this.pagination;
      } else {
        this.state.pagination = { current: 1 };
      }
      this.interData = this.data;
      this.handleTableChange();
    },

  },

  created() {
    this.interData = this.data;
    if (this.pagination) this.state.pagination = this.pagination;
  },

  mounted() {
    this.calcColumnWidth();
    this.handleReorganizeData();
  },
};
</script>
